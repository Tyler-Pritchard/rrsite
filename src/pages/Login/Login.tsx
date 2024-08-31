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
import { toggleForgotPasswordModal, sendPasswordReset } from '../../store/actions/menuActions';
import { RootState } from '../../store/store_index';

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.menu.isForgotPasswordModalOpen);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission if there are no errors
      console.log("Form submitted", { email, password, rememberMe });
    }
  };

  const handleForgotPasswordClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleForgotPasswordModal());
  };

  const handleSendPasswordReset = () => {
    if (!email) {
      setErrors({ email: 'Please enter your email to reset password' });
      return;
    }
    dispatch(sendPasswordReset(email));
    setIsEmailSent(true);
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
            onChange={() => setRememberMe(!rememberMe)}
          />
          <RememberMeLabel>Remember Me</RememberMeLabel>
        </RememberMeWrapper>

        <SubmitButton type="submit">Login</SubmitButton>
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
                <ModalButton href="/">Back to Home</ModalButton>
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
                <ModalButton onClick={handleSendPasswordReset}>Send</ModalButton>
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
