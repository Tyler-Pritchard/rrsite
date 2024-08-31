import React from 'react';
import {
  RegisterWrapper,
  SideMenu,
  SideMenuItem,
  FormWrapper,
  CallToAction,
} from './register.styles';

const Register: React.FC = () => {
  return (
    <RegisterWrapper>
      <SideMenu>
        <SideMenuItem href="#register">Register</SideMenuItem>
        <SideMenuItem href="#faq">FAQ</SideMenuItem>
        <SideMenuItem href="#privacy">Privacy Policy</SideMenuItem>
      </SideMenu>
      <FormWrapper>
        <h2>Register</h2>
        <form>
          <label>First Name</label>
          <input type="text" name="firstName" required />

          <label>Last Name</label>
          <input type="text" name="lastName" required />

          <label>Username</label>
          <input type="text" name="username" required />

          <label>Email</label>
          <input type="email" name="email" required />

          <label>Confirm Email</label>
          <input type="email" name="confirmEmail" required />

          <label>Password</label>
          <input type="password" name="password" required />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" required />

          <label>Date of Birth</label>
          <input type="date" name="dateOfBirth" required />

          <label>Country</label>
          <input type="text" name="country" required />

          <label>
            <input type="checkbox" name="subscribe" />
            Subscribe to newsletter
          </label>

          {/* CAPTCHA */}
          <div className="captcha">
            {/* CAPTCHA component */}
          </div>

          <button type="submit">Register</button>
        </form>
      </FormWrapper>
      <CallToAction>
        {/* Call-to-action text box content */}
        Join our community for exclusive content, updates, and more!
      </CallToAction>
    </RegisterWrapper>
  );
};

export default Register;
