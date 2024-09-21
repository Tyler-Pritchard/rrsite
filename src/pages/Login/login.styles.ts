import styled from 'styled-components';

export const LoginWrapper = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-top: 8rem;
  }
`;

export const SideMenu = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #f2f2f2;
  position: relative;
  top: 100px;
  left: 0;
  height: 100%;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const SideMenuItem = styled.a`
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #e0e0e0;
  };
`;

export const FormWrapper = styled.form`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 1rem;
  };
`;

export const TextBox = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: .5rem;
  };
`;

export const Note = styled.p`
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  };
`;

export const FormField = styled.input`
  border: 1px solid #ccc;

  @media (max-width: 480px) {
    width: 99%;
    margin: .5rem 0 1rem 0;
    padding: 1rem;
    border-radius: 2px;
  };
`;

export const ErrorText = styled.span`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    margin: .5rem 0 1.5rem 0;
  };
`;

export const RememberMeCheckbox = styled.input`
  margin-right: 10px;
`;

export const RememberMeLabel = styled.label`
  font-size: 1rem;
`;

export const ButtonBox = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  };
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusfify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 480px) {
    width: 10rem;
    height: 4rem;
    padding: 1rem;
  };
`;

export const ForgotPassword = styled.a`
  @media (max-width: 480px) {
    width: 12rem;
  };
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
    margin: 1rem 0;

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
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
  font-size: 1rem;
  transition: background-color 0.2s;
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