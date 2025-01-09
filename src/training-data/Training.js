import React, { useState, useRef, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";

const CustomModelTraining = () => {
  const [model, setModel] = useState(null);
  const [isTraining, setIsTraining] = useState(false);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [trainedClasses, setTrainedClasses] = useState([]);
  const [currentClass, setCurrentClass] = useState("");
  const [prediction, setPrediction] = useState(null);

  const imageRef = useRef(null);
  const fileInputRef = useRef(null);

  // Create a simple convolutional neural network
  const createModel = () => {
    const model = tf.sequential();

    // Add layers
    model.add(
      tf.layers.conv2d({
        inputShape: [64, 64, 3],
        filters: 32,
        kernelSize: 3,
        activation: "relu",
      })
    );
    model.add(tf.layers.maxPooling2d({ poolSize: 2 }));

    model.add(
      tf.layers.conv2d({
        filters: 64,
        kernelSize: 3,
        activation: "relu",
      })
    );
    model.add(tf.layers.maxPooling2d({ poolSize: 2 }));

    model.add(tf.layers.flatten());
    model.add(tf.layers.dense({ units: 128, activation: "relu" }));
    model.add(tf.layers.dropout({ rate: 0.5 }));
    model.add(
      tf.layers.dense({ units: trainedClasses.length, activation: "softmax" })
    );

    return model;
  };

  // Preprocess image to tensor
  const preprocessImage = async (imgElement) => {
    return tf.tidy(() => {
      const tensor = tf.browser
        .fromPixels(imgElement)
        .resizeNearestNeighbor([64, 64])
        .toFloat()
        .div(255.0)
        .expandDims();
      return tensor;
    });
  };

  // Handle adding a new training example
  const handleAddExample = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const imageUrl = URL.createObjectURL(file);
      const img = new Image();
      img.src = imageUrl;

      img.onload = async () => {
        imageRef.current.src = imageUrl;
        const tensor = await preprocessImage(img);

        // Store training data
        if (!window.trainingData) {
          window.trainingData = {
            xs: [],
            ys: [],
            classes: new Set(),
          };
        }

        window.trainingData.xs.push(tensor);
        window.trainingData.classes.add(currentClass);

        // Create one-hot encoded label
        const label = Array.from(window.trainingData.classes).indexOf(
          currentClass
        );
        const oneHot = new Array(window.trainingData.classes.size).fill(0);
        oneHot[label] = 1;
        window.trainingData.ys.push(tf.tensor1d(oneHot));

        setTrainedClasses(Array.from(window.trainingData.classes));
      };
    } catch (err) {
      console.error("Error adding example:", err);
    }
  };

  // Train the model
  const trainModel = async () => {
    if (!window.trainingData || window.trainingData.xs.length === 0) {
      alert("Please add training examples first!");
      return;
    }

    setIsTraining(true);

    try {
      // Concatenate all training data
      const xs = tf.concat(window.trainingData.xs);
      const ys = tf.concat(window.trainingData.ys);

      // Create and compile model
      const newModel = createModel();
      newModel.compile({
        optimizer: tf.train.adam(0.001),
        loss: "categoricalCrossentropy",
        metrics: ["accuracy"],
      });

      // Train the model
      await newModel.fit(xs, ys, {
        epochs: 50,
        batchSize: 32,
        callbacks: {
          onEpochEnd: (epoch, logs) => {
            setTrainingProgress(((epoch + 1) / 50) * 100);
          },
        },
      });

      setModel(newModel);
    } catch (err) {
      console.error("Error training model:", err);
    } finally {
      setIsTraining(false);
    }
  };

  // Predict using trained model
  const predictImage = async () => {
    if (!model || !imageRef.current) return;

    try {
      const tensor = await preprocessImage(imageRef.current);
      const prediction = await model.predict(tensor).data();
      const maxIndex = prediction.indexOf(Math.max(...prediction));
      setPrediction({
        class: trainedClasses[maxIndex],
        confidence: prediction[maxIndex],
      });
    } catch (err) {
      console.error("Error making prediction:", err);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          value={currentClass}
          onChange={(e) => setCurrentClass(e.target.value)}
          placeholder="Enter class name"
          className="border p-2 mr-2"
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!currentClass}
        >
          Add Training Example
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleAddExample}
          accept="image/*"
          className="hidden"
        />
      </div>

      <div className="mb-4">
        <img ref={imageRef} className="max-w-full h-auto" alt="Preview" />
      </div>

      <div className="mb-4">
        <h3 className="font-bold">Trained Classes:</h3>
        <ul>
          {trainedClasses.map((className) => (
            <li key={className}>{className}</li>
          ))}
        </ul>
      </div>

      {isTraining ? (
        <div className="mb-4">
          <p>Training Progress: {trainingProgress.toFixed(1)}%</p>
          <div className="w-full bg-gray-200 rounded">
            <div
              className="bg-blue-500 rounded h-2"
              style={{ width: `${trainingProgress}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <button
            onClick={trainModel}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
            disabled={trainedClasses.length < 2}
          >
            Train Model
          </button>
          <button
            onClick={predictImage}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
            disabled={!model}
          >
            Predict
          </button>
        </div>
      )}

      {prediction && (
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="font-bold mb-2">Prediction:</h3>
          <p>Class: {prediction.class}</p>
          <p>Confidence: {(prediction.confidence * 100).toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default CustomModelTraining;
