import styled from 'styled-components';

export const ResetPasswordWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const ResetPasswordForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputField = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
`;

export const SuccessText = styled.p`
  color: green;
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
`;
