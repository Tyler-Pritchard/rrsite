import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  display: flex;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 8rem 1rem 1rem 1rem;
  };

  @media (min-width: 481px) {
    flex-direction: row;
  };

  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 10rem;
    height: 170rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding-top: 12rem;
    height: 200rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding-top: 14rem;
    height: 225rem;
  };
`;

export const SideMenu = styled.div`
  background-color: #f2f2f2;

  @media (max-width: 480px) {
    display: none;
  };

  @media (min-width: 481px) {
    display: flex;
    flex-direction: column;
  };

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 2rem;
    width: 25rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 4rem;
    width: 25rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 6rem;
    width: 30rem;
  };

  @media (min-width: 1201px) {
    padding: 6rem;
    width: 40rem;
  };
`;

export const SideMenuItem = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #e0e0e0;
  };

  @media (min-width: 481px) and (max-width: 768px){
    padding: 1.5rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 2.5rem;
  };

  @media (min-width: 1201px) {
    padding: 3rem;
  };
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 481px) and (max-width: 768px){
    padding: 1rem 2rem 3rem 4rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem 0rem 4rem 0rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 3rem 4rem 5rem 6rem;
  };

  @media (min-width: 1201px) {
    padding: 4rem 5rem 6rem 5rem;
  };
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    margin: 3rem 1rem 2rem 1rem;
  };

  @media (min-width: 481px) {
    align-items: flex-start;
    width: 90%;
  };

  @media (min-width: 481px) and (max-width: 768px){
    height: 40rem;
    margin: 1rem 0 2rem 0;
    padding-left: 2rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    height: 50rem;
    margin: 2rem 0 3rem 0;
    padding-left: 3rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    height: 60rem;
    margin: 3rem 0 4rem 0;
  };

  @media (min-width: 1201px) {
    height: 60rem;
    margin: 4rem 0 5rem 0;
  };
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 480px) {
    width: 85%;
    margin-bottom: .5rem;
  };

  @media (min-width: 481px) and (max-width: 768px){
    margin: 1.5rem 0 1.5rem 0;
    width: 80%;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    margin: 2rem 0 1rem 0;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 3rem 0 2rem 0;
  };

  @media (min-width: 1201px) {
    margin: 4rem 0 3rem 0;
  };
`;

export const InputField = styled.input`
  border: 1px solid #ccc;
  border-radius: 2px;

  @media (max-width: 480px) {
    width: 99%;
    margin: .5rem 0 2rem 0;
    padding: 1rem;
  };

  @media (min-width: 481px) and (max-width: 768px){
    font-size: 18px;
    width: 90%;
    margin: 2rem 0 2rem 0;
    height: 4.5rem;
    padding: 1rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    width: 90%;
    margin: 2rem 0 3rem 0;
    height: 6rem;
    font-size: 20px;
    padding: 1.5rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 90%;
    margin: 3rem 0 4rem 0;
    height: 8rem;
    font-size: 24px;
    padding: 1.5rem;
  };

  @media (min-width: 1201px) {
    width: 90%;
    margin: 4rem 0 5rem 0;
    height: 10rem;
    font-size: 28px;
    padding: 2rem;
  };
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    margin: 0 0 3rem 0;
  };

  @media (min-width: 481px) and (max-width: 768px){
    margin: 0 0 2rem 0;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    margin: 0 0 4rem 0;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    margin: 0 0 5rem 0;
  };

  @media (min-width: 1201px) {
    margin: 0 0 6rem 0;
  };
`;

export const InputLabel = styled.label`
  font-size: 1rem;

  @media (min-width: 481px) and (max-width: 768px){
    font-size: 20px;
  };
  
  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 28px;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 26px;
  };

  @media (min-width: 1201px) {
    font-size: 28px;
  };
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
  
  @media (min-width: 481px) and (max-width: 768px){
    margin-right: 2rem;
    height: 4rem;
    width: 4rem;
  };
  
  @media (min-width: 769px) and (max-width: 992px) {
    margint-right: 3rem;
    height: 4.5rem;
    width: 4.5rem;
  };
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;
  
  @media (min-width: 481px) and (max-width: 768px){
    font-size: 20px;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    font-size: 24px;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    font-size: 26px;
  };

  @media (min-width: 1201px) {
    font-size: 28px;
  };
`;

export const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  jusfify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 480px) {
    width: 33rem;
    height: 4rem;
    padding: 1rem;
  };

  @media (min-width: 481px) and (max-width: 768px){
    width: 40rem;
    height: 6rem;
    padding: 1rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    width: 51rem;
    height: 5rem;
    padding: 1rem;  
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    width: 14rem;
    height: 6rem;
    padding: 1rem; 
  };

  @media (min-width: 1201px) {
    width: 14rem;
    height: 6rem;
    padding: 1rem;
  };
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
`;

export const ModalButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const CallToAction = styled.div`
  background-color: #19857b;
  color: white;
  text-align: center;
  
  @media (max-width: 480px) {
    display: none;
  };

  @media (min-width: 481px) and (max-width: 768px){
    display: none;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    display: none;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 2rem;
    width: 85%;
  };
  
  @media (min-width: 1201px) {
    padding: 2rem;
    width: 85%;
    margin-top: 24rem;
  };
`;

export const CallToActionMobile = styled.div`
  background-color: #19857b;
  color: white;
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 2rem;
    font-size: 1.6rem;
    margin: 1rem 0 2rem 0;
  };

  @media (min-width: 481px) and (max-width: 768px){
    padding: 2rem;
    width: 90%;
    font-size: 2.2rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem;
    width: 90%;
    margin-top: 2rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    display: none;
  };
  
  @media (min-width: 1201px) {
    padding: 2rem;
    width: 85%;
    margin-top: 24rem;
  };
`;