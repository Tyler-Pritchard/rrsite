import React, { useEffect, useState } from 'react';
import {
  ContentWrapper,
  FormWrapper,
  FormField,
  Note,
  ErrorText,
  SubmitButton,
  ForgotPassword,
  LoginWrapper,
  TextBox,
  ModalOverlay,
  ModalWrapper,
  ModalContent,
  ModalButton,
  ModalCloseButton,
  ModalTitle,
  ModalDescription,
  ModalLabel,
  ModalField,
  ModalError,
  ModalMessage,
  CallToAction,
  RememberMeWrapper,
  RememberMeLabel,
  RememberMeCheckbox,
  ButtonBox,
  FormRow
} from './login.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { loginUser, forgotPassword  } from '../../slices/userSlice';
import { toggleForgotPasswordModal } from '../../reducers/menuReducer';
import { RootState } from '../../store/store_index';
import Register from '../Register/Register';

// Define the structure for form data to ensure correct types are used
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
  captchaToken?: string | null;
}

// Define the structure of the response payload for login actions
interface LoginResponse {
  token?: string;
  message?: string;
}

// Define the structure for errors displayed in the UI
interface ErrorState {
  email?: string;
  password?: string;
  login?: string;
}

// Declare the reCAPTCHA global interface to be used in the component

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const isModalOpen = useSelector((state: RootState) => state.menu.isForgotPasswordModalOpen);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<ErrorState>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>('');
  const [resetError, setResetError] = useState<string>('');
  const [isSendingReset, setIsSendingReset] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleDone = () => {
    navigate('/'); // Navigate to the Home screen after clicking "Done"
  };

  const processLogin = async (formData: LoginFormData) => {
    try {
      setIsSubmitting(true);

      const response = await dispatch(loginUser(formData)) as { payload: LoginResponse };
      const { token, message } = response.payload;

      if (message) {
        throw new Error(message);
      }

      if (!token || typeof token !== 'string') {
        throw new Error('Invalid login response, token missing or not a string.');
      }

      if (formData.rememberMe) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }

      handleDone();
    } catch (error: any) {
      setErrors((prev) => ({ ...prev, login: error.message || 'Failed to login. Please try again.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData: LoginFormData = {
      email,
      password,
      rememberMe,
      captchaToken
    };

    const newErrors: ErrorState = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format';
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);

    // Execute reCAPTCHA Enterprise to get the token
    if (!window.grecaptcha) {
      console.error('reCAPTCHA is not loaded');
      setIsSubmitting(false);
      return;
    }

    window.grecaptcha.enterprise.ready(() => {
      window.grecaptcha.enterprise
        .execute('6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R', { action: 'login' })
        .then((captchaToken: string) => {
          console.log("HANDLESUBMIT reCAPTCHA token in Login.tsx: ", captchaToken);
          setCaptchaToken(captchaToken);

          if (captchaToken) {
            formData.captchaToken = captchaToken ?? '';
            processLogin(formData);
          } else {
            console.error('Token is null or undefined.');
            setIsSubmitting(false);
          }
        });
    });
  };

  // Forgot Password Handlers
  const openForgotPassword = (e: React.MouseEvent) => {
    e.stopPropagation();
    setResetEmail(email); // pre-fill with whatever they typed on the login form
    setResetError('');
    setIsEmailSent(false);
    dispatch(toggleForgotPasswordModal());
  };

  const closeForgotPassword = () => {
    if (!isModalOpen) return;
    dispatch(toggleForgotPasswordModal());
    setIsEmailSent(false); // so reopening shows the form, not "Email Sent"
    setResetError('');
  };

  // Close the modal on Escape
  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeForgotPassword();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  const handleSendResetLink = (e: React.FormEvent) => {
    e.preventDefault(); // the modal is a <form>, so Enter submits

    if (!resetEmail) {
      setResetError('Email is required');
      return;
    }
    if (!validateEmail(resetEmail)) {
      setResetError('Invalid email format');
      return;
    }
    if (!window.grecaptcha) {
      console.error('reCAPTCHA is not loaded');
      setResetError('Something went wrong loading the page. Please refresh and try again.');
      return;
    }

    setResetError('');
    setIsSendingReset(true);

    window.grecaptcha.enterprise.ready(() => {
      // Promise.resolve guarantees .catch/.finally exist on whatever grecaptcha returns
      Promise.resolve(
        window.grecaptcha.enterprise.execute('6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R', { action: 'forgot_password' })
      )
        .then(async (token: string) => {
          if (!token) {
            setResetError('Failed to validate CAPTCHA.');
            return;
          }
          try {
            // unwrap() throws on failure, so "Email Sent" only shows on success
            await dispatch(forgotPassword({ email: resetEmail, captchaToken: token })).unwrap();
            setIsEmailSent(true);
          } catch (err) {
            setResetError(typeof err === 'string' ? err : 'Failed to send reset email. Please try again.');
          }
        })
        .catch(() => setResetError('Failed to validate CAPTCHA.'))
        .finally(() => setIsSendingReset(false));
    });
  };

  return (
    <LoginWrapper>
      <ContentWrapper>
        <FormRow>
          <FormWrapper onSubmit={handleSubmit}>
            <TextBox>
              <h1>SIGN IN</h1>
              <p>*REQUIRED</p>
            </TextBox>
            <Note>If you are already a Member, please enter your email and password.</Note>
            <h3>EMAIL ADDRESS*</h3>
            <FormField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            <h3>PASSWORD*</h3>
            <FormField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}

            <RememberMeWrapper>
              <RememberMeCheckbox
                type="checkbox"
                checked={rememberMe}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
              />
              <RememberMeLabel>Remember Me</RememberMeLabel>
            </RememberMeWrapper>
            <ButtonBox>
              <SubmitButton type="submit" disabled={isSubmitting}>{isSubmitting ? 'Logging in...' : 'Login'}</SubmitButton>
              <ForgotPassword type="button" onClick={openForgotPassword}>
                Forgot Password?
              </ForgotPassword>
            </ButtonBox>
          </FormWrapper>
        </FormRow>

        {isModalOpen && (
          <ModalOverlay onClick={closeForgotPassword}>
            <ModalWrapper
              role="dialog"
              aria-modal="true"
              aria-labelledby="forgot-password-title"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <ModalCloseButton type="button" aria-label="Close" onClick={closeForgotPassword}>
                &times;
              </ModalCloseButton>

              {isEmailSent ? (
                <ModalMessage>
                  <ModalTitle id="forgot-password-title">Check your email</ModalTitle>
                  <ModalDescription>
                    If an account exists for {resetEmail}, we've sent a link to reset your password.
                  </ModalDescription>
                  <ModalButton type="button" onClick={closeForgotPassword}>Done</ModalButton>
                </ModalMessage>
              ) : (
                <ModalContent onSubmit={handleSendResetLink} noValidate>
                  <ModalTitle id="forgot-password-title">Reset your password</ModalTitle>
                  <ModalDescription>
                    Enter the email on your account and we'll send you a link to reset your password.
                  </ModalDescription>
                  <ModalLabel htmlFor="reset-email">Email*</ModalLabel>
                  <ModalField
                    id="reset-email"
                    type="email"
                    autoComplete="email"
                    autoFocus
                    value={resetEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setResetEmail(e.target.value)}
                    aria-invalid={!!resetError}
                    aria-describedby={resetError ? 'reset-email-error' : undefined}
                  />
                  {resetError && <ModalError id="reset-email-error" role="alert">{resetError}</ModalError>}
                  <ModalButton type="submit" disabled={isSendingReset}>
                    {isSendingReset ? 'Sending...' : 'Send reset link'}
                  </ModalButton>
                </ModalContent>
              )}
            </ModalWrapper>
          </ModalOverlay>
        )}
        <CallToAction>
          <h2>New here? Join the Rich Robber's Club!</h2>
          <h3>Free to join — early access, presale codes, and merch discounts.</h3>
        </CallToAction>
      </ContentWrapper>
      <FormRow>
        <Register /> 
      </FormRow>
    </LoginWrapper>
  );
};

export default Login;