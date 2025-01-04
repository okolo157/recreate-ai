import React from "react";
import ButtonComponent from "../components/ButtonComponent";
import styled from "styled-components";
import bgImg from "../assets/images/background-5.png";

function Upload() {
  

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
    <UploadPageContainer>
      {!isImagePicked && (
        <>
          <TopItems>
            <h1>
              Upload an Image <br /> convert it to <code>&lt;code&gt;</code>{" "}
              instantly. <br />
              <Subheading>
                Because who has time to write code from scratch?
              </Subheading>
            </h1>
            <ButtonComponent Text="upload" onFileChange={onFileChange} />
          </TopItems>
          <Bottom>
            <Disclaimer>
              By using this service, you agree to comply with all applicable
              laws and regulations. You are responsible for ensuring that any
              content you upload does not violate any intellectual property
              rights. The service is provided "as is" without any warranties,
              and we are not liable for any damages arising from its use.
            </Disclaimer>
          </Bottom>
        </>
      )}
      {isImagePicked && selectedFile && (
        <HandleImageContainer>
          <LeftElements>
            <LeftInner>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="selected"
                style={{ width: "100%", height: "100%" }}
              />
            </LeftInner>
          </LeftElements>
          <RightElements>Right side</RightElements>
        </HandleImageContainer>
      )}
    </UploadPageContainer>
  );
}

const UploadPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  color: white;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
`;

const TopItems = styled.div`
  flex: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Subheading = styled.span`
  font-style: italic;
  font-size: 24px;
`;

const Bottom = styled.div`
  flex: 20%;
  width: 40%;
  margin-bottom: 0px;
`;

const Disclaimer = styled.p`
  all: unset;
  text-align: center;
  font-size: 10px;
`;

const HandleImageContainer = styled.div`
  width: 100%;
  display: flex;
`;

const LeftElements = styled.div`
  flex: 50%;
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`;

const LeftInner = styled.div`
  padding: 40px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 80%;
  backdrop-filter: blur(40px);
  border-radius: 10px;
  position: relative;
  z-index: 1;
  border: 1px inset rgb(69, 69, 69);
  max-width: 50%;
`;

const RightElements = styled.div`
  flex: 50%;
`;


export default Upload;
