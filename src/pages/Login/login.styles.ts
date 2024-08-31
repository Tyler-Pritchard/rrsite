import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 30rem;
`;

export const SideMenu = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #f2f2f2;
  position: relative;
  top: 100px;
  left: 0;
  height: 100%;
`;

export const SideMenuItem = styled.a`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #e0e0e0;
  }
`;


export const FormWrapper = styled.form`
width: 75%;
  padding: 20px;
  margin-left: 25%;
  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 5px;
      font-weight: bold;
    }

    input {
      margin-bottom: 15px;
      padding: 10px;
      font-size: 1rem;
    }
  button {
      padding: 10px;
      background-color: #556cd6;
      color: white;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: #4452b1;
      }
    } 
`;

export const FormField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RememberMeCheckbox = styled.input`
  margin-right: 10px;
`;

export const RememberMeLabel = styled.label`
  font-size: 1rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  width: 90%;
  max-width: 500px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalMessage = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
`;

export const ModalButton = styled.a`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const CallToAction = styled.div`
  background-color: #19857b;
  padding: 20px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
`;