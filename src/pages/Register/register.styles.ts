import styled from 'styled-components';

export const RegisterWrapper = styled.div`
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

export const FormWrapper = styled.div`
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

    .captcha {
      margin: 15px 0;
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
  }
`;

export const Form = styled.form`
  /* Your existing styling */
`;

export const InputField = styled.input`
  /* Your existing styling */
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const CheckboxContainer = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 10px;
    transform: scale(1.2);
  }

  label {
    font-size: 14px;
    color: #fff;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: #fff; /* Or any other color that fits */
  
  span {
    font-size: 14px;
    color: #ccc; /* Lighter color for the subtext */
    margin-top: 5px;
  }
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  /* Your existing styling */
`;

export const Title = styled.h1`
  /* Your existing styling */
`;

export const CallToAction = styled.div`
  background-color: #19857b;
  padding: 20px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

export const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;