import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import CodeIcon from "@mui/icons-material/Code";
import "../styles/UploadPage.css";

function NewPage() {
  // const location = useLocation();
  // const { image } = location.state || {};

  const [selectedFile, setSelectedFile] = React.useState(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        localStorage.setItem("image", base64String);
        console.log(file);
      };
      reader.readAsDataURL(file);
    }
  };

  // const RenderFile = () => {
  //   if (selectedFile) {
  //     return <div>{selectedFile.type}</div>;
  //   }
  // };

  return (
    <div className="upload-page-container">
      <div className="top-items">
        <h1>
          Upload an Image <br /> convert it to <code>&lt;code&gt; </code>{" "}
          instantly. <br />
          <span style={{ fontStyle: "italic", fontSize: "24px" }}>
            Because who has time to write code from scratch?
          </span>{" "}
        </h1>
        <ButtonComponent onFileChange={onFileChange} />
      </div>
      {/* {image && <img src={image} alt="Selected" />} */}
      <div className="bottom">
        <p
          style={{
            all: "unset",
            textAlign: "center",
            fontSize: "10px",
          }}
        >
          By using this service, you agree to comply with all applicable laws
          and regulations. You are responsible for ensuring that any content you
          upload does not violate any intellectual property rights. The service
          is provided "as is" without any warranties, and we are not liable for
          any damages arising from its use.
        </p>
        {/* <RenderFile /> */}
      </div>
    </div>
  );
}

export default NewPage;
