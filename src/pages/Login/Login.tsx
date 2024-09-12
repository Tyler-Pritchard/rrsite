import React, { useState } from 'react';
import {
  FormWrapper,
  FormField,
  ErrorText,
  SubmitButton,
  LoginWrapper,
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
} from './login.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { loginUser, forgotPassword  } from '../../store/actions/userActions';
import { toggleForgotPasswordModal } from '../../store/actions/menuActions';
import { RootState } from '../../store/store_index';

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleDone = () => {
    navigate('/'); // Navigate to the Home screen after clicking "Done"
  };

  const processLogin = async (formData: { email: string; password: string; rememberMe: boolean }) => {

    try {
      const response = await dispatch(loginUser(formData));  // Dispatch login action
  
      // Extract the token from the response
      const { token } = response;
  
      // Store the token based on the 'Remember Me' selection
      if (formData.rememberMe) {
        localStorage.setItem('token', token);  // Use localStorage for 'Remember Me'
      } else {
        sessionStorage.setItem('token', token);  // Use sessionStorage if 'Remember Me' is not checked
      }
      handleDone()
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form submission handler
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      email,
      password,
      rememberMe,
      captchaToken: captchaToken
    };
    
    const newErrors: { [key: string]: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    // Execute reCAPTCHA v3 to get the token
    setIsSubmitting(true);
    if (!window.grecaptcha) {
      console.error('reCAPTCHA is not loaded');
      setIsSubmitting(false);
      return;
    }

    // reCAPTCHA v3 token retrieval
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R', { action: 'login' }).then((captchaToken: string) => {
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

    setIsSubmitting(true);
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
        <SideMenuItem href="#faq">FAQ</SideMenuItem>
        <SideMenuItem href="#privacy">Privacy Policy</SideMenuItem>
      </SideMenu>

      <FormWrapper onSubmit={handleSubmit}>
        <FormField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
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

        <SubmitButton type="submit" disabled={isSubmitting}>{isSubmitting ? 'Logging in...' : 'Login'}</SubmitButton>
        <button type="button" onClick={handleForgotPasswordClick}>
          Forgot Password?
        </button>
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
        <h3>Become a Fifth Member</h3>
        <p>Join our free Fan Club so we can give back to you - the most dedicated fans on the planet. You’ll get first crack at tickets plus access to giveaways, coupons, and more benefits designed exclusively for members of our Fan Club: The Fifth Members.</p>
      </CallToAction>
    </LoginWrapper>
  );
};

export default Login;
