import React from "react";
import styled from "styled-components";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Modal({ handleCloseModal, onFileChange }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <ModalHeader>
          <ModalText>
            <h3>Upload a file</h3>
            <p>
              Please select files in the following formats: PNG, JPG, WEBP,
              AVIF, PDF
            </p>
          </ModalText>
          <CloseIcon icon={faClose} onClick={handleCloseModal} />
        </ModalHeader>
        <InputContainer>
          <StyledInput type="file" onChange={onFileChange} />
        </InputContainer>
      </ModalContent>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(8px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, #0b6fcb, #43a5fe);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ModalText = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    color: white;
  }

  p {
    margin: 10px 0 30px;
    color: white;
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
`;

const InputContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


export default Modal;
