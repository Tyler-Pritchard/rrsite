import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import {
  RegisterWrapper,
  SideMenu,
  SideMenuItem,
  FormWrapper,
  CallToAction, Form, InputField, ErrorText, SubmitButton, Title,
} from './register.styles';
import { validateEmail, validatePassword } from '../../utils/validation';
import { registerUser } from '../../store/actions/userActions';
import ReCAPTCHA from 'react-google-recaptcha';
import { AppDispatch } from '../../store/store_index';



const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); 

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
      if (!captchaToken) validationErrors.captcha = 'Please complete the CAPTCHA'; 

      setErrors(validationErrors);
      setIsSubmitting(false);

      if (Object.keys(validationErrors).length === 0) {
        // Submit the registration data to the backend
        const registerData = {
          firstName,
          lastName,
          username,
          email,
          password,
          dateOfBirth,
          country,
          captchaToken,
        };

        // Dispatch the register action
      dispatch(registerUser(registerData))
        .then(() => {
          setIsRegistered(true);
        })
        .catch((error: any) => {
          setErrors({ server: error.response?.data?.msg || error.message || 'Registration failed' });
        });
      }
    }
  }, [isSubmitting, dispatch, firstName, lastName, username, email, password, confirmPassword, dateOfBirth, country, captchaToken]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  const handleCaptchaChange = (token: string | null) => {
    console.log('Captcha Token:', token);
    setCaptchaToken(token); // Set CAPTCHA token when it's completed
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
            <ReCAPTCHA
                sitekey="6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R" // actual reCAPTCHA site key
                onChange={handleCaptchaChange}
              />
              {errors.captcha && <ErrorText>{errors.captcha}</ErrorText>}

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
function setIsRegistered(arg0: boolean) {
  throw new Error('Function not implemented.');
}

