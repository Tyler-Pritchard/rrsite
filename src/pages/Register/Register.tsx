import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/store_index';
import { registerUser } from '../../slices/userSlice';
import { SideMenu, SideMenuItem, RegisterWrapper, FormWrapper, TextBox, InputField, CheckboxContainer, CheckboxLabel, InputLabel, CheckboxInput, SubmitButton, ErrorText, CallToAction, CallToActionMobile, ModalWrapper, ModalContent, ModalButton, ContentWrapper } from './register.styles';

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
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [, setCaptchaToken] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = () => {
    setIsSubscribed(!isSubscribed);
  };

  const processRegistration = async (token: string) => {
    const registerData = {
      firstName,
      lastName,
      username,
      email,
      password,
      dateOfBirth,
      country,
      isSubscribed,
      captchaToken: token,
    };

    // console.log("PROCESS REGISTRATION in Register: ", token)

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
      console.log("PASSWORDS DO NOT MATCH")
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
      window.grecaptcha.execute('6LfU8jIqAAAAAOAFm-eNXmW-uPrxqdH9xJLEfJ7R', { action: 'submit' }).then((captchaToken: string) => {
        console.log("SUBMIT ACTION in Register: ", captchaToken)
        setCaptchaToken(captchaToken);

        if (captchaToken) {
          processRegistration(captchaToken ?? '');
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
        <SideMenuItem href="/help">FAQ</SideMenuItem>
        <SideMenuItem href="/privacy-policy">Privacy Policy</SideMenuItem>
      </SideMenu>
      <FormWrapper>
        <TextBox>
          <h1>CREATE AN ACCOUNT AND BECOME A MEMBER</h1>
          <p>*REQUIRED</p>
        </TextBox>
        <CallToActionMobile>
        {/* Call-to-action text box content */}
        <h3>Become a Member of the Rich Robbers Club</h3>
        <p>Join the Rich Robbers Club—our way of giving back to you, the most dedicated fans out there! As a member, you’ll get first dibs on tickets, access to giveaways, exclusive events, discounts, and so much more. All these perks are just for you, our amazing fans!</p>
      </CallToActionMobile>
        <form onSubmit={handleSubmit}>
          <ContentWrapper>
            <InputLabel>FIRST NAME*</InputLabel>
            <InputField
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
            />

            <InputLabel>LAST NAME*</InputLabel>
            <InputField
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
            />

            <InputLabel>USER NAME*</InputLabel>
            <InputField
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
            />

            <InputLabel>EMAIL*</InputLabel>
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />

            <InputLabel>PASSWORD*</InputLabel>
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />

            <InputLabel>CONFIRM PASSWORD*</InputLabel>
            <InputField
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            />

            <InputLabel>DATE OF BIRTH</InputLabel>
            <InputField
              type="date"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.value)}
              />
            {errors.dateOfBirth && <ErrorText>{errors.dateOfBirth}</ErrorText>}

            <InputLabel>COUNTRY</InputLabel>
            <InputField
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
              />
            {errors.country && <ErrorText>{errors.country}</ErrorText>}

            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                id="subscribe"
                checked={isSubscribed}
                onChange={handleCheckboxChange}
              />
              <CheckboxLabel htmlFor="subscribe">
                <div>Subscribe Me to Your Newsletter</div>
                <div>Stay up to date on the latest Rob Rich news, contests, content, and sales</div>
              </CheckboxLabel>
            </CheckboxContainer>

            <SubmitButton type="submit">Register</SubmitButton>
          </ContentWrapper>
        </form>
      </FormWrapper>
      <CallToAction>
        {/* Call-to-action text box content */}
        <h3>Become a Member of the Rich Robbers Club</h3>
        <p>Join the Rich Robbers Club—our way of giving back to you, the most dedicated fans out there! As a member, you’ll get first dibs on tickets, access to giveaways, exclusive events, discounts, and so much more. All these perks are just for you, our amazing fans!</p>
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
