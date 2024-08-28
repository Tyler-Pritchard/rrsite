import styled from 'styled-components';

export const ConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f3f3f3;
  height: 30rem;
  
  @media (min-width: 481px) and (max-width: 768px){
      height: 50rem;
      padding-top: 8rem;
  }
  @media (min-width: 768px) {

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
