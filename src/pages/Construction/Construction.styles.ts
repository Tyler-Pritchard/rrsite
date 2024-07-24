import styled from 'styled-components';

export const ConstructionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f3f3f3;
  padding-top: 25rem;
  padding-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    height: 32.5rem;
    padding-top: 2.5rem;
    padding-bottom: 0rem;
  }
`;

export const ContentContainer = styled.div``

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
  
export const Message = styled.h1`
  margin-top: 8rem;
  font-size: 2rem;
  color: #333;
`;

// @media (max-width: 480px) {}
// @media (max-width: 768px) {}
// @media (max-width: 992px) {}
// @media (max-width: 1200px) {}
// @media (max-width: 1201px) {}