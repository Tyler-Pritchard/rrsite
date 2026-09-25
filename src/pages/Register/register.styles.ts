import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const RegisterWrapper = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8rem 1rem 1rem 1rem;
  };

  @media (min-width: 481px) {
    flex-direction: row;
  };

  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 10rem;
    height: 170rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding-top: 12rem;
    height: 200rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding-top: 14rem;
    height: 225rem;
  };
  @media (min-width: 1201px) {
    padding-top: 13rem;
    height: 260rem;
  };
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 481px) and (max-width: 768px){
    padding: 1rem 0 3rem 4rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem 0rem 4rem 0rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 2rem 0 2rem 0;
    width: 100%;
  };

  @media (min-width: 1201px) {
    padding: 4rem 5rem 6rem 5rem;
  };
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    margin: 3rem 1rem 2rem 1rem;
  };

  @media (min-width: 481px) {
    align-items: flex-start;
    width: 90%;
  };

  @media (min-width: 481px) and (max-width: 768px){
    height: 40rem;
    margin: 1rem 0 2rem 0;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    height: 50rem;
    margin: 2rem 0 3rem 0;
    padding-left: 3rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    height: 60rem;
    width: 50rem;
    margin: 3rem 0 4rem 0;
    padding-left: 2rem;
  };

  @media (min-width: 1201px) {
    height: 60rem;
    margin: 4rem 0 5rem 0;
  };
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 480px) {
    width: 85%;
    margin-bottom: .5rem;
  };

  @media (min-width: 481px) and (max-width: 768px){
    margin: 1.5rem 0 1.5rem 0;
    width: 80%;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    margin: 2rem 0 1rem 0;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 3rem 0 2rem 0;
  };

  @media (min-width: 1201px) {
    margin: 4rem 0 3rem 0;
  };
`;

export const InputField = styled.input`
  border: 1px solid #ccc;
  border-radius: 2px;

  @media (max-width: 480px) {
    width: 99%;
    margin: .5rem 0 2rem 0;
    padding: 1rem;
  };

  @media (min-width: 481px) and (max-width: 768px){
    font-size: 18px;
    width: 90%;
    margin: 2rem 0 2rem 0;
    height: 4.5rem;
    padding: 1rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    width: 90%;
    margin: 2rem 0 3rem 0;
    height: 6rem;
    font-size: 20px;
    padding: 1.5rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 90%;
    margin: 3rem 0 4rem 0;
    height: 8rem;
    font-size: 24px;
    padding: 1.5rem;
  };

  @media (min-width: 1201px) {
    width: 90%;
    margin: 4rem 0 5rem 0;
    height: 10rem;
    font-size: 28px;
    padding: 2rem;
  };
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    margin: 0 0 3rem 0;
  };

  @media (min-width: 481px) and (max-width: 768px){
    margin: 0 0 2rem 0;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    margin: 0 0 4rem 0;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 0 0 5rem 0;
  };

  @media (min-width: 1201px) {
    margin: 0 0 6rem 0;
  };
`;

export const InputLabel = styled.label`
  font-size: 1rem;

  @media (min-width: 481px) and (max-width: 768px){
    font-size: 20px;
  };
  
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 28px;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 26px;
  };

  @media (min-width: 1201px) {
    font-size: 28px;
  };
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
  
  @media (min-width: 481px) and (max-width: 768px){
    margin-right: 2rem;
    height: 4rem;
    width: 4rem;
  };
  
  @media (min-width: 769px) and (max-width: 992px) {
    margin-right: 3rem;
    height: 4.5rem;
    width: 4.5rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 0 4rem 0 1rem;
    height: 7rem;
    width: 7rem;
  };
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;
  
  @media (min-width: 481px) and (max-width: 768px){
    font-size: 20px;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 24px;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 26px;
    padding-right: 1rem;
  };

  @media (min-width: 1201px) {
    font-size: 28px;
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
    width: 33rem;
    height: 4rem;
    padding: 1rem;
  };

  @media (min-width: 481px) and (max-width: 768px){
    width: 40rem;
    height: 6rem;
    padding: 1rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    width: 51rem;
    height: 5rem;
    padding: 1rem;  
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 50rem;
    height: 6rem;
    padding: 1rem; 
  };

  @media (min-width: 1201px) {
    width: 14rem;
    height: 6rem;
    padding: 1rem;
  };
`;

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 52rem;
  padding: 3.6rem 3.2rem 3.2rem;
  background-color: ${colors.primaryBlue};
  border: 1px solid ${colors.borderLight};
  border-top: 2px solid ${colors.highlight};
  border-radius: 2px;
  color: ${colors.textPrimary};
  text-align: left;
`;

export const ModalButton = styled.button`
  align-self: flex-start;
  min-width: 12rem;
  height: 4.4rem;
  padding: 0 2.4rem;
  margin-top: 2.4rem;
  background-color: ${colors.highlight};
  color: ${colors.neutralOffWhite};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: filter 0.2s;

  &:hover:not(:disabled) {
    filter: brightness(1.1);
  }
`;

export const ModalTitle = styled.h2`
  font-family: ${GlobalVariables.titleFont};
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.15;
  color: ${colors.textPrimary};
  margin: 0 0 1.2rem 0;
`;

export const ModalDescription = styled.p`
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${colors.textSecondary};
  margin: 0;
`;

export const CallToAction = styled.div`
  background-color: #19857b;
  color: white;
  text-align: center;
  
  @media (max-width: 480px) {
    display: none;
  };

  @media (min-width: 481px) and (max-width: 768px){
    display: none;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    display: none;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 2rem;
    width: 85%;
  };
  
  @media (min-width: 1201px) {
    padding: 2rem;
    width: 85%;
    margin-top: 24rem;
  };
`;

export const CallToActionMobile = styled.div`
  background-color: #19857b;
  color: white;
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 2rem;
    font-size: 1.6rem;
    margin: 1rem 0 2rem 0;
  };

  @media (min-width: 481px) and (max-width: 768px){
    padding: 2rem;
    width: 90%;
    font-size: 2.2rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem;
    width: 90%;
    margin-top: 2rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    display: none;
  };
  
  @media (min-width: 1201px) {
    display: none;
  };
`;