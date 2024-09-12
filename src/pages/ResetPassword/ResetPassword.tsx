import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { resetPassword } from '../../store/actions/userActions';
import {
    ResetPasswordWrapper,
    ResetPasswordForm,
    InputField,
    SubmitButton,
    ErrorText,
    SuccessText
  } from './resetPassword.styles';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  useEffect(() => {
    console.log('Token from URL:', token);
  }, [token]);
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log("RESET PASSWORD TOKEN:", token);

    if (!newPassword || !token) {
      setError('Password and token are required');
      return;
    }

    try {
        await dispatch(resetPassword(token, newPassword));
        setSuccess(true);
        setError('');
        navigate('/login');
      } catch (err) {
        console.error(err);
        setError('Failed to reset password. Please try again.');
      }
  };

  return (
    <ResetPasswordWrapper>
      <ResetPasswordForm onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        {success && <SuccessText>Password reset successfully!</SuccessText>}
        {error && <ErrorText>{error}</ErrorText>}
        <InputField
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
        />
        <SubmitButton type="submit">Reset Password</SubmitButton>
      </ResetPasswordForm>
    </ResetPasswordWrapper>
  );
};

export default ResetPassword;
