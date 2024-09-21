import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8rem 1rem 1rem 1rem;
  };
  @media (min-width: 481px) and (max-width: 768px){
    flex-direction: row;
    padding-top: 10rem;
  };
`;

export const SideMenu = styled.div`
  background-color: #f2f2f2;
  @media (max-width: 480px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 2rem;
    width: 20rem;
  };
`;

export const SideMenuItem = styled.a`
  text-decoration: none;
  color: #000;
  &:hover {
    background-color: #e0e0e0;
  };
  @media (min-width: 481px) and (max-width: 768px){
    padding: 1rem;
  };
`;

export const ContentWrapper = styled.div`
  @media (min-width: 481px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 3rem 4rem;
  };
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    margin: 3rem 1rem 2rem 1rem;
  };
  @media (min-width: 481px) and (max-width: 768px){
    align-items: flex-start;
    width: 90%;
    height: 40rem;
    margin: 1rem 0 2rem 0;
  };
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    margin: 1rem 0 1rem 0;
  };
  @media (min-width: 481px) and (max-width: 768px){
    width: 90%;
    margin: 1.5rem 0 .5rem 0;
  };
`;

export const Note = styled.h4`
  @media (max-width: 480px) {
    margin: .5rem 0 4rem 0;
  };
  @media (min-width: 481px) and (max-width: 768px){
    margin: .5rem 0 2rem 0;
  };

`;

export const FormField = styled.input`
  border: 1px solid #ccc;
  border-radius: 2px;

  @media (max-width: 480px) {
    width: 99%;
    margin: .5rem 0 2rem 0;
    padding: 1rem;
  };
  @media (min-width: 481px) and (max-width: 768px){
    width: 90%;
    margin: 1.5rem 0 2rem 0;
    height: 4.5rem;
    padding: 1rem;
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
    margin: 0 0 3rem 0;
  };
  @media (min-width: 481px) and (max-width: 768px){
    margin: 0 0 3rem 0;
  };
`;

export const RememberMeCheckbox = styled.input`
  margin-right: 10px;
`;

export const RememberMeLabel = styled.label`
  font-size: 1rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    width: 90%;
  };
  @media (min-width: 481px) and (max-width: 768px){
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
  @media (min-width: 481px) and (max-width: 768px){
    width: 10rem;
    height: 4rem;
    padding: 1rem;
  };
`;

export const ForgotPassword = styled.a`
  @media (max-width: 480px) {
    width: 12rem;
  };
  @media (min-width: 481px) and (max-width: 768px){
    width: 16rem;
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
  color: white;
  text-align: center;
  @media (max-width: 480px) {
    padding: 20px;
    font-size: 1.2rem;
    margin-top: 20px;
  };
  @media (min-width: 481px) and (max-width: 768px){
    padding: 1.5rem;
    width: 85%;
  };
`;