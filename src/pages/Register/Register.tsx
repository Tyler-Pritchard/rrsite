import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  RegisterWrapper,
  SideMenu,
  SideMenuItem,
  FormWrapper,
  CallToAction, Form, InputField, ErrorText, SubmitButton, Title
} from './register.styles';
import { validateEmail, validatePassword } from '../../utils/validation';

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);


  useEffect(() => {
    if (isSubmitting) {
      const validationErrors: any = {};

      if (!firstName) validationErrors.firstName = 'First name is required';
      if (!lastName) validationErrors.lastName = 'Last name is required';
      if (!username) validationErrors.username = 'Username is required';
      if (!validateEmail(email)) validationErrors.email = 'Invalid email format';
      if (!validatePassword(password)) validationErrors.password = 'Password must be at least 8 characters long and contain a number';
      if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';
      if (!dateOfBirth) validationErrors.dateOfBirth = 'Date of birth is required';
      if (!country) validationErrors.country = 'Country is required';

      setErrors(validationErrors);
      setIsSubmitting(false);

      if (Object.keys(validationErrors).length === 0) {
        // Simulate registration success
        setIsRegistered(true);
      }
    }
  }, [isSubmitting]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <RegisterWrapper>
      <SideMenu>
        <h3>Account Settings</h3>
        <SideMenuItem href="/login">Sign In</SideMenuItem>
        <h3>Customer Service</h3>
        <SideMenuItem href="#faq">FAQ</SideMenuItem>
        <SideMenuItem href="#privacy">Privacy Policy</SideMenuItem>
      </SideMenu>
      <FormWrapper>
        <Title>Register</Title>
          <Form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            />
          {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}

          <InputField
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            />
          {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}

          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />
          {errors.username && <ErrorText>{errors.username}</ErrorText>}

          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}

          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}

          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            />
          {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}

          <InputField
            type="date"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.value)}
            />
          {errors.dateOfBirth && <ErrorText>{errors.dateOfBirth}</ErrorText>}

          <InputField
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
            />
          {errors.country && <ErrorText>{errors.country}</ErrorText>}

          <SubmitButton type="submit">Register</SubmitButton>
        </Form>
      </FormWrapper>
      <CallToAction>
        {/* Call-to-action text box content */}
        <h3>Become a Fifth Member</h3>
        <p>Join our free Fan Club so we can give back to you - the most dedicated fans on the planet. You’ll get first crack at tickets plus access to giveaways, coupons, and more benefits designed exclusively for members of our Fan Club: The Fifth Members.</p>
      </CallToAction>
    </RegisterWrapper>
  );
};

export default Register;
