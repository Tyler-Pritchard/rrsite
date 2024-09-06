import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { registerUser } from '../../store/actions/userActions';
import { SideMenu, SideMenuItem, RegisterWrapper, FormWrapper, InputField, SubmitButton, ErrorText, CallToAction, ModalWrapper, ModalContent, ModalButton } from './register.styles';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); // For navigation after clicking "Done"

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [recaptchaToken, setCaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const processRegistration = async (token: string) => {
    const registerData = {
      firstName,
      lastName,
      username,
      email,
      password,
      dateOfBirth,
      country,
      captchaToken: recaptchaToken,
    };

    // console.log("PROCESS REGISTRATION in Register: ", recaptchaToken)

    try {
      await dispatch(registerUser(registerData));
      setShowModal(true); // Show the modal after successful registration
    } catch (error) {
      console.error('Error from backend:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validatePasswords = () => {
    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validate passwords match
    if (!validatePasswords()) {
      console.log("PASSWORDS DO NOT MATCH -- ADD 'FIX THIS UI' TO THE LAUNDRY LIST")
      return;
    }

    // Execute reCAPTCHA v3 to get the token
    setIsSubmitting(true);
    if (!window.grecaptcha) {
      console.error('reCAPTCHA is not loaded');
      setIsSubmitting(false);
      return;
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha.execute('6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R', { action: 'submit' }).then((recaptchaToken: string) => {
        // console.log("SUBMIT ACTION in Register: ", recaptchaToken)
        setCaptchaToken(recaptchaToken);

        if (recaptchaToken) {
          processRegistration(recaptchaToken ?? '');
        } else {
          console.error('Token is null or undefined.');
          setIsSubmitting(false)
        }
        
      });
    });
  };

  const handleDone = () => {
    setShowModal(false);
    navigate('/'); // Navigate to the Home screen after clicking "Done"
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
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
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
          <InputField
            type="date"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.value)}
            />
          {errors.dateOfBirth && <ErrorText>{errors.dateOfBirth}</ErrorText>}

          <InputField
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
            />
          {errors.country && <ErrorText>{errors.country}</ErrorText>}


          <SubmitButton type="submit">Register</SubmitButton>
        </form>
      </FormWrapper>
      <CallToAction>
        {/* Call-to-action text box content */}
        <h3>Become a Fifth Member</h3>
        <p>Join our free Fan Club so we can give back to you - the most dedicated fans on the planet. You’ll get first crack at tickets plus access to giveaways, coupons, and more benefits designed exclusively for members of our Fan Club: The Fifth Members.</p>
      </CallToAction>

      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <h2>Registration Successful!</h2>
            <ModalButton onClick={handleDone}>Done</ModalButton>
          </ModalContent>
        </ModalWrapper>
      )}
    </RegisterWrapper>
  );
};

export default Register;
