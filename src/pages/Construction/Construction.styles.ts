import styled from 'styled-components';

export const ConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f3f3f3;
  
  @media (max-width: 480px) {
    height: 30rem;
    padding: .5rem;
  }
  @media (min-width: 481px) and (max-width: 768px){
      height: 60rem;
      padding: 1rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    height: 70rem;
    padding: 1.5rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    height: 80rem;
    padding: 2rem;
  }
  @media (min-width: 1201px) {
    height: 75rem;
    padding: 3.5rem; 
  }
`;

export const ContentContainer = styled.div``

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
  
export const Message = styled.h1`
  font-size: 2rem;
  color: #333;
`;
