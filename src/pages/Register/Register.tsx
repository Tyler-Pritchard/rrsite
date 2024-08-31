import React, { useState, ChangeEvent } from 'react';
import {
  RegisterWrapper,
  SideMenu,
  SideMenuItem,
  FormWrapper,
  CallToAction, Form, InputField, ErrorText, SubmitButton, Title
} from './register.styles';

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

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    const newErrors = { ...errors };

    if (firstName.trim() === '') {
      newErrors.firstName = 'First name is required';
      hasError = true;
    } else {
      newErrors.firstName = '';
    }

    if (lastName.trim() === '') {
      newErrors.lastName = 'Last name is required';
      hasError = true;
    } else {
      newErrors.lastName = '';
    }

    if (username.trim() === '') {
      newErrors.username = 'Username is required';
      hasError = true;
    } else {
      newErrors.username = '';
    }

    if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
      hasError = true;
    } else {
      newErrors.email = '';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters, include an uppercase letter, a lowercase letter, and a number';
      hasError = true;
    } else {
      newErrors.password = '';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      hasError = true;
    } else {
      newErrors.confirmPassword = '';
    }

    if (dateOfBirth.trim() === '') {
      newErrors.dateOfBirth = 'Date of birth is required';
      hasError = true;
    } else {
      newErrors.dateOfBirth = '';
    }

    if (country.trim() === '') {
      newErrors.country = 'Country is required';
      hasError = true;
    } else {
      newErrors.country = '';
    }

    setErrors(newErrors);

    if (!hasError) {
      // Submit the form data
      console.log('Form submitted successfully');
    }
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
