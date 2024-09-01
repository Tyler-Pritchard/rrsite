import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store_index';
import { registerUser } from '../../store/actions/userActions';
import { RegisterWrapper, FormWrapper, InputField, SubmitButton, ErrorText, CaptchaWrapper, CallToAction } from './register.styles';

declare global {
  interface Window {
    grecaptcha: any;
  }
}


const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Execute reCAPTCHA v3 to get the token
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R', { action: 'submit' }).then((token: string) => {
        setCaptchaToken(token);
        processRegistration(token); // Proceed with registration after token is generated
      });
    });
  };

  const processRegistration = (token: string) => {
    const registerData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      captchaToken: token, // Include CAPTCHA token
    };

    dispatch(registerUser(registerData))
      .catch((error: any) => {
        setErrors({ server: error.response?.data?.msg || error.message || 'Registration failed' });
      });
  };

  return (
    <RegisterWrapper>
      <FormWrapper>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />

          <InputField
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
          />

          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />

          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          />


          <SubmitButton type="submit">Register</SubmitButton>
        </form>
      </FormWrapper>
      <CallToAction>
        {/* Your call-to-action content */}
      </CallToAction>
    </RegisterWrapper>
  );
};

export default Register;
