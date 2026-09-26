import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const LoginWrapper = styled.div`
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
  };

  @media (min-width: 769px) {
    padding-top: 12rem;
  };

  @media (min-width: 993px) {
    padding-top: 14rem;
  };
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 481px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 3rem 4rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem 3rem 4rem 5rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 3rem 4rem 5rem 6rem;
  };

  @media (min-width: 1201px) {
    padding: 4rem 5rem 6rem 5rem;
  };
`;

export const Breadcrumb = styled.div`
  font-size: 0.85rem;
  color: ${colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;

  span {
    color: ${colors.textPrimary};
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 44rem;

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
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    height: 60rem;
    margin: 3rem 0 4rem 0;
  };

  @media (min-width: 1201px) {
    height: 60rem;
    margin: 4rem 0 5rem 0;
  };
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  @media (min-width: 993px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  };
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0 1.5rem 0;

  @media (max-width: 480px) {
    margin: 1rem 0 1rem 0;
  };

  @media (min-width: 481px) {
    width: 90%;
  };

  @media (min-width: 481px) and (max-width: 768px){
    margin: 1.5rem 0 .5rem 0;
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

export const Note = styled.h4`
font-weight: 400;
  color: ${colors.textSecondary};
  margin: 0 0 2rem 0;

  @media (max-width: 480px) {
    margin: .5rem 0 4rem 0;
  };

  @media (min-width: 481px) and (max-width: 768px){
    margin: .5rem 0 2rem 0;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    margin: 1rem 0 3rem 0;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 2rem 0 4rem 0;
  };

  @media (min-width: 1201px) {
    margin: 3rem 0 5rem 0;
  };
`;

export const FormField = styled.input`
  border: 1px solid #ccc;
  border-radius: 2px;
  width: 100%;
  box-sizing: border-box;
  height: 3.5rem;
  padding: 0 1rem;
  font-size: 1rem;
  margin: 0.5rem 0 1.5rem 0;

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

export const ErrorText = styled.span`
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 1.4rem;
  line-height: 1.4;
  color: #ff8a80; /* lighter red: readable on the dark background */
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

export const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 2rem 0;

  @media (max-width: 480px) {
    margin: 0 0 3rem 0;
  };

  @media (min-width: 481px) and (max-width: 768px){
    margin: 0 0 3rem 0;
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

export const RememberMeCheckbox = styled.input`
  margin-right: 10px;
`;

export const RememberMeLabel = styled.label`
  font-size: 1rem;
  
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 24px;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 26px;
  };

  @media (min-width: 1201px) {
    font-size: 28px;
  };
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 480px) {
    width: 90%;
  };

  @media (min-width: 481px) and (max-width: 768px){
    width: 90%;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    width: 90%;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 90%;
  };

  @media (min-width: 1201px) {
    width: 90%;
  };
`;

export const SubmitButton = styled.button`
  background-color: ${colors.highlight};
  color: ${colors.neutralOffWhite};
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-family: ${GlobalVariables.paragraphFont};
  font-weight: 600;
  width: 12rem;
  height: 3.5rem;

  &:hover {
    background-color: ${colors.accentCopperOrange};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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

  @media (min-width: 769px) and (max-width: 992px) {
    width: 12rem;
    height: 5rem;
    padding: 1rem;  
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 14rem;
    height: 6rem;
    padding: 1rem; 
  };

  @media (min-width: 1201px) {
    width: 14rem;
    height: 6rem;
    padding: 1rem;
  };
`;

export const ForgotPassword = styled.button`
  background: none;
  border: none;
  color: ${colors.textSecondary};
  text-decoration: underline;
  cursor: pointer;
  font-family: ${GlobalVariables.paragraphFont};

  &:hover {
    color: ${colors.highlight};
  }

  @media (max-width: 480px) {
    width: 12rem;
  };

  @media (min-width: 481px) and (max-width: 768px){
    width: 16rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    width: 18rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 20rem;
  };

  @media (min-width: 1201px) {
    width: 24rem;
  };
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 52rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding: 3.6rem 3.2rem 3.2rem;
  background-color: ${colors.primaryBlue};
  border: 1px solid ${colors.borderLight};
  border-top: 2px solid ${colors.highlight};
  border-radius: 2px;
  color: ${colors.textPrimary};
  text-align: left;
`;

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const ModalMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${colors.textSecondary};
  font-size: 2.8rem;
  line-height: 1;
  cursor: pointer;

  &:hover {
    color: ${colors.highlight};
  }
`;

export const ModalTitle = styled.h2`
  font-family: ${GlobalVariables.titleFont};
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.15;
  color: ${colors.textPrimary};
  margin: 0 4rem 1.2rem 0; /* right margin keeps it clear of the close button */
`;

export const ModalDescription = styled.p`
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${colors.textSecondary};
  margin: 0 0 2.4rem 0;
`;

export const ModalLabel = styled.label`
  font-family: ${GlobalVariables.titleFont};
  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${colors.textPrimary};
  margin-bottom: 0.8rem;
`;

export const ModalField = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 0 1.4rem;
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 1.6rem;
  color: ${colors.neutralDark};
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 2px;

  &::placeholder {
    color: #8a8a8a;
  }
`;

export const ModalError = styled.p`
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 1.4rem;
  line-height: 1.4;
  color: #ff8a80; /* lighter red: readable on the dark modal surface */
  margin: 0.8rem 0 0 0;
`;

export const CallToAction = styled.div`
  border-top: 2px solid ${colors.highlight};
  padding-top: 1.5rem;
  margin-top: 3rem;
  max-width: 44rem;

  h2 {
    font-size: 1.1rem;
    color: ${colors.highlight};
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 0.95rem;
    font-weight: 400;
    color: ${colors.textSecondary};
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    font-size: 1.2rem;
    margin-top: 20px;
  };

  @media (min-width: 481px) and (max-width: 768px){
    padding: 1.5rem;
    width: 85%;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem;
    width: 90%;
    margin-top: 14rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 2rem;
    width: 85%;
    margin-top: 14rem;
  };

  @media (min-width: 1201px) {
    padding: 2rem;
    width: 85%;
    margin-top: 24rem;
  };
`;
