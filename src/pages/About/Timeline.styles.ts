import styled from 'styled-components';

export const TimelineContainer = styled.div`
  // width: 100%;
  // height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10rem;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
  @media (max-width: 480px) {
    height: 45rem;
    padding: .5rem;
    padding-top: 3rem;
  }
  @media (min-width: 481px) and (max-width: 768px){
      height: 55rem;
      padding: .25rem;
      padding-top: 10rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    height: 70rem;
    padding: 1.5rem;
    padding-top: 10rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    height: 80rem;
    padding: 2rem;
    padding-top: 16rem;
  }
  @media (min-width: 1201px) {
    height: 75rem;
    padding: 3.5rem; 
    padding-top: 25rem;
  }
`;
