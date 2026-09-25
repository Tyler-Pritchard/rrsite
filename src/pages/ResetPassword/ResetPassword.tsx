import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { resetPassword } from '../../slices/userSlice';
import {
    ResetPasswordWrapper,
    ResetPasswordForm,
    InputField,
    SubmitButton,
    ErrorText,
    FormHeader,
    PageTitle,
    Description,
    FieldGroup,
    FieldLabel
  } from './resetPassword.styles';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) return; // the page shows an invalid-link view instead of the form

    if (!newPassword || !confirmPassword) {
      setError('Please enter and confirm your new password.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setIsSubmitting(true);
    try {
      // unwrap() throws if the request fails, so the catch block actually runs
      await dispatch(resetPassword({ token, newPassword })).unwrap();
      setSuccess(true);
    } catch (err) {
      setError(typeof err === 'string' ? err : 'Failed to reset password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ResetPasswordWrapper>
      {!token ? (
        <ResetPasswordForm as="div">
          <FormHeader>
            <PageTitle>This link isn't valid</PageTitle>
            <Description>
              The reset link is missing or incomplete. Go to the sign-in page and use "Forgot Password?" to get a new one.
            </Description>
          </FormHeader>
          <SubmitButton type="button" onClick={() => navigate('/login')}>
            Go to sign in
          </SubmitButton>
        </ResetPasswordForm>
      ) : success ? (
        <ResetPasswordForm as="div">
          <FormHeader>
            <PageTitle>Password updated</PageTitle>
            <Description>Your password has been reset. You can now sign in with your new password.</Description>
          </FormHeader>
          <SubmitButton type="button" onClick={() => navigate('/login')}>
            Sign in
          </SubmitButton>
        </ResetPasswordForm>
      ) : (
        <ResetPasswordForm onSubmit={handleSubmit}>
          <FormHeader>
            <PageTitle>Reset your password</PageTitle>
            <Description>Choose a new password for your account, then sign in with it.</Description>
          </FormHeader>
          <FieldGroup>
            <FieldLabel htmlFor="new-password">New password*</FieldLabel>
            <InputField
              id="new-password"
              type="password"
              autoComplete="new-password"
              value={newPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
            />
          </FieldGroup>
          <FieldGroup>
            <FieldLabel htmlFor="confirm-password">Confirm new password*</FieldLabel>
            <InputField
              id="confirm-password"
              type="password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            />
          </FieldGroup>
          {error && <ErrorText role="alert">{error}</ErrorText>}
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Resetting...' : 'Reset password'}
          </SubmitButton>
        </ResetPasswordForm>
      )}
    </ResetPasswordWrapper>
  );
};

export default ResetPassword;
