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

export const ForgotPasswordLink = styled.a`
  color: #556cd6;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #4452b1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  background: white;
  padding: 20px;
  width: 300px;
  margin: 100px auto;
  border-radius: 5px;
  position: relative;
  z-index: 1001;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 1rem;
  }
`;

export const ModalButton = styled.button`
  padding: 10px;
  background-color: #556cd6;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4452b1;
  }
`;

export const ModalButtonLink = styled.a``;

export const ModalMessage = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
  a {
    display: block;
    padding: 10px;
    background-color: #556cd6;
    color: white;
    text-decoration: none;
    &:hover {
      background-color: #4452b1;
    }
  }
`;

export const CallToAction = styled.div`
  background-color: #19857b;
  padding: 20px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 20px;
  a {
    color: #fff;
    text-decoration: underline;
    &:hover {
      color: #e0e0e0;
    }
  }
`;
