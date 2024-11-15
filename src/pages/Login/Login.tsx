import React, { useState } from 'react';
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
  ModalMessage,
  SideMenu,
  SideMenuItem,
  CallToAction,
  RememberMeWrapper,
  RememberMeLabel,
  RememberMeCheckbox,
  ButtonBox
} from './login.styles';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { loginUser, forgotPassword  } from '../../slices/userSlice';
import { toggleForgotPasswordModal } from '../../reducers/menuReducer';
import { RootState } from '../../store/store_index';

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
  const handleForgotPasswordClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleForgotPasswordModal());
  };

  const handleSendPasswordReset = async () => {
    if (!email) {
      setErrors({ email: 'Email is required' });
      return;
    }

    try {
      setIsSubmitting(true);
      if (!window.grecaptcha) {
        console.error('reCAPTCHA is not loaded');
        setIsSubmitting(false);
        return;
      }

      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise
          .execute('6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R', { action: 'forgot_password' })
          .then(async (captchaToken: string) => {
            if (!captchaToken) {
              setErrors({ email: 'Failed to validate CAPTCHA.' });
              setIsSubmitting(false);
              return;
            }

            dispatch(forgotPassword({ email, captchaToken })) as unknown as ThunkAction<void, RootState, unknown, AnyAction>;
            setIsEmailSent(true);
            setErrors({});
          });
      });
    } catch (error: any) {
      setErrors({ email: 'Failed to send reset email. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <LoginWrapper>
      <SideMenu>
        <h3>Account Settings</h3>
        <SideMenuItem href="/register">Create Account</SideMenuItem>
        <h3>Customer Service</h3>
        <SideMenuItem href="/help">FAQ</SideMenuItem>
        <SideMenuItem href="/privacy-policy">Privacy Policy</SideMenuItem>
      </SideMenu>
      <ContentWrapper>
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
            <ForgotPassword type="button" onClick={handleForgotPasswordClick}>
              Forgot Password?
            </ForgotPassword>
          </ButtonBox>
        </FormWrapper>

        {isModalOpen && (
          <ModalOverlay onClick={handleForgotPasswordClick}>
            <ModalWrapper onClick={(e: React.MouseEvent) => e.stopPropagation()}>
              {isEmailSent ? (
                <ModalMessage>
                  <h2>Email Sent</h2>
                  <p>Please check your inbox for further instructions.</p>
                  <ModalButton onClick={handleForgotPasswordClick}>Done</ModalButton> {/* Closes modal */}
                </ModalMessage>
              ) : (
                <ModalContent>
                  <h2>Forgot Password</h2>
                  <FormField
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  />
                  {errors.email && <ErrorText>{errors.email}</ErrorText>}
                  <ModalButton as="button" onClick={handleSendPasswordReset} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </ModalButton>
                </ModalContent>
              )}
            </ModalWrapper>
          </ModalOverlay>
        )}
        <CallToAction>
          {/* Call-to-action text box content */}
          <h2>NEW HERE? JOIN THE RICH ROBBER'S CLUB!</h2>
          <h3>It’s totally free and super easy to sign up! Get in on presale tickets, exclusive content, early access to new releases, merch discounts, and so much more. Don’t miss out—become a part of the crew today!</h3>
        </CallToAction>
      </ContentWrapper>
    </LoginWrapper>
  );
};

export default Login;