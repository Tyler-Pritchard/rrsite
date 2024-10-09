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
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { loginUser, forgotPassword  } from '../../slices/userSlice';
import { toggleForgotPasswordModal } from '../../reducers/menuReducer';
import { RootState } from '../../store/store_index';

// Define the structure for form data
interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
  captchaToken?: string | null;
}

interface LoginResponse {
  token?: string;
  message?: string;
}

// Define the structure for errors
interface ErrorState {
  email?: string;
  password?: string;
  login?: string;
}

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
  
      // Properly type and destructure the response
      const response = await dispatch(loginUser(formData)) as { payload: LoginResponse };
  
      // Extract token and message from the response payload
      const { token, message } = response.payload;
  
      // If a message exists, handle it as an error
      if (message) {
        throw new Error(message);
      }
  
      // Validate that the token is a string and not empty
      if (!token || typeof token !== 'string') {
        throw new Error('Invalid login response, token missing or not a string.');
      }
  
      // Store the token based on the 'Remember Me' selection
      if (formData.rememberMe) {
        localStorage.setItem('token', token);  // Use localStorage for 'Remember Me'
      } else {
        sessionStorage.setItem('token', token);  // Use sessionStorage if 'Remember Me' is not checked
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
    
    // Use ErrorState type directly
    const newErrors: ErrorState = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    // Execute reCAPTCHA v3 to get the token
    setIsSubmitting(true);
    if (!window.grecaptcha) {
      console.error('reCAPTCHA is not loaded');
      setIsSubmitting(false);
      return;
    }

    // Execute reCAPTCHA v3 to get the token
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute('6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R', { action: 'login' })
        .then((captchaToken: string) => {
          console.log("HANDLESUBMIT reCAPTCHA token in Login.tsx: ", captchaToken);
          setCaptchaToken(captchaToken); // Store the token in state

          if (captchaToken) {
            formData.captchaToken = captchaToken ?? '';
            // Proceed with login after captcha validation
            processLogin(formData);
        } else {
          console.error('Token is null or undefined.');
          setIsSubmitting(false)
        }
      });
    });
  };

  // Forgot Password Handlers
  const handleForgotPasswordClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleForgotPasswordModal());
  };

  // Function to handle sending the password reset email
  const handleSendPasswordReset = async () => {
    if (!email) {
      // Handle empty email validation
      return;
    }

    try {
      // Dispatch the forgot password action
      await dispatch(forgotPassword(email));     
      // Update state to show success message
      setIsEmailSent(true);
      setErrors({}); // Clear any existing errors
    } catch (error: any) {
      // Handle the error safely
      if (error.response && error.response.data) {
        setErrors({ email: error.response.data.msg });
      } else {
        setErrors({ email: 'Failed to send reset email. Please try again.' });
      }
    } finally {
      setIsSubmitting(false);  // Re-enable button or hide loader
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