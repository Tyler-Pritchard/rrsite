import React, { useState } from 'react';
import {
  LoginWrapper,
  SideMenu,
  SideMenuItem,
  FormWrapper,
  CallToAction,
  ForgotPasswordLink,
  ModalWrapper,
  ModalContent,
  ModalButton,
  ModalButtonLink,
  ModalMessage,
  ModalOverlay,
} from './login.styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store_index';
import { toggleForgotPasswordModal, sendPasswordReset } from '../../store/actions/menuActions';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.menu.isForgotPasswordModalOpen);
  const [email, setEmail] = useState<string>('');
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);

  const handleForgotPasswordClick = () => {
    dispatch(toggleForgotPasswordModal());
  };

  const handleSendClick = () => {
    dispatch(sendPasswordReset(email));
    setIsEmailSent(true);
  };

  return (
    <LoginWrapper>
      <SideMenu>
        <h3>Account Settings</h3>
        <SideMenuItem href="#register">Register</SideMenuItem>
        <h3>Customer Service</h3>
        <SideMenuItem href="#faq">FAQ</SideMenuItem>
        <SideMenuItem href="#privacy">Privacy Policy</SideMenuItem>
      </SideMenu>
      <FormWrapper>
        <h2>Login</h2>
        <form>
          <label>Username</label>
          <input type="text" name="username" required />

          <label>Password</label>
          <input type="password" name="password" required />

          <button type="submit">Login</button>
        </form>
        <ForgotPasswordLink onClick={handleForgotPasswordClick}>
          Forgot Password?
        </ForgotPasswordLink>
        <CallToAction>
          Don't have an account? <a href="/register">Sign up now!</a>
        </CallToAction>
      </FormWrapper>

      {isModalOpen && (
        <ModalOverlay onClick={handleForgotPasswordClick}>
          <ModalWrapper onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
{isEmailSent ? (
              <ModalMessage>
                <h2>Email Sent</h2>
                <p>Please check your inbox for further instructions.</p>
                <ModalButtonLink href='/'>
                  <ModalButton>Back to Home</ModalButton>
                </ModalButtonLink>
              </ModalMessage>
            ) : (
              <ModalContent>
                <h2>Forgot Password</h2>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <ModalButton onClick={handleSendClick}>Send</ModalButton>
              </ModalContent>
            )}
          </ModalWrapper>
        </ModalOverlay>
      )}
    </LoginWrapper>
  );
};

export default Login;
