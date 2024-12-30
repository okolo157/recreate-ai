import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import "../styles/UploadPage.css";

function NewPage() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isImagePicked, setIsImagePicked] = React.useState(false);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("File selected:", file);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("image", base64String);
        console.log("Stored image:", base64String);
      };
      reader.readAsDataURL(file);
      setIsImagePicked(true);
    }
  };

  return (
    <div className="upload-page-container">
      {!isImagePicked && (
        <>
          <div className="top-items">
            <h1>
              Upload an Image <br /> convert it to <code>&lt;code&gt;</code>{" "}
              instantly. <br />
              <span style={{ fontStyle: "italic", fontSize: "24px" }}>
                Because who has time to write code from scratch?
              </span>{" "}
            </h1>
            <ButtonComponent onFileChange={onFileChange} />
          </div>
          <div className="bottom">
            <p
              style={{
                all: "unset",
                textAlign: "center",
                fontSize: "10px",
              }}
            >
              By using this service, you agree to comply with all applicable
              laws and regulations. You are responsible for ensuring that any
              content you upload does not violate any intellectual property
              rights. The service is provided "as is" without any warranties,
              and we are not liable for any damages arising from its use.
            </p>
          </div>
        </>
      )}
      {isImagePicked && selectedFile && (
        <div className="handle-image-container">
          <div className="left-elements">
            <div className="left-inner">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="selected"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="right-elementss">Right side</div>
        </div>
      )}
    </div>
  );
}

export default NewPage;
