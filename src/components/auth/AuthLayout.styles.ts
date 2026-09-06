import styled from 'styled-components';

export const AuthWrapper = styled.div`
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
  };

  @media (min-width: 769px) {
    padding-top: 12rem;
  };

  @media (min-width: 993px) {
    padding-top: 14rem;
  };
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 481px) and (max-width: 768px){
    padding: 1rem 2rem 3rem 4rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem 3rem 4rem 5rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 3rem 4rem 5rem 6rem;
  };

  @media (min-width: 1201px) {
    padding: 4rem 5rem 6rem 5rem;
  };
`;