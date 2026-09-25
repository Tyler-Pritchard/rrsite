import styled from 'styled-components';
import { colors, GlobalVariables } from '../../globalStyles';

export const ResetPasswordWrapper = styled.div`
  width: 100%;
  padding: 4rem 3.2rem;
  color: ${colors.textPrimary};
`;

export const ResetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  max-width: 52rem;
`;

export const InputField = styled.input`
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

export const SubmitButton = styled.button`
  align-self: flex-start;
  min-width: 12rem;
  height: 4.4rem;
  padding: 0 2.4rem;
  margin-top: 0.8rem;
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

export const ErrorText = styled.p`
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 1.4rem;
  line-height: 1.4;
  color: #ff8a80; /* lighter red: readable on the dark background */
  margin: 0;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 0.8rem;
`;

export const PageTitle = styled.h1`
  font-family: ${GlobalVariables.titleFont};
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.15;
  color: ${colors.textPrimary};
  margin: 0;
`;

export const Description = styled.p`
  font-family: ${GlobalVariables.paragraphFont};
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${colors.textSecondary};
  margin: 0;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FieldLabel = styled.label`
  font-family: ${GlobalVariables.titleFont};
  font-weight: 700;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${colors.textPrimary};
`;
