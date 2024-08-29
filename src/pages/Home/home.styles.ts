import styled from 'styled-components';
import MainImage from '../../assets/images/desktop/TacomaCrows.png';

export const MainWrapper = styled.div`
  background-image: url(${MainImage});
  width: 100vw;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 480px) {
    padding-top: 24rem;
    padding-bottom: 10rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 36rem;
    padding-bottom: 24rem;
  }
  @media (min-width: 769px) and (max-width: 992px){
    padding-top: 38rem;
    padding-bottom: 16rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    padding-top: 42rem;
    padding-bottom: 16rem;
  }
  @media (min-width: 1201px) {
    padding-top: 24rem;
    padding-bottom: 18rem;
  }
`;

export const MainTitle = styled.h1`
  color: #5f955c;
  background-color: #fce4ad;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: 95%;
  z-index: 1;

  @media (max-width: 480px) {
    width: 75vw;
    height: 30vh;
    border: .75rem double #f1e180;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 95vw;
    height: 55vh;
    border: 2rem double #f1e180;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    width: 90vw;
    height: 50vh;
    border: 3rem double #f1e180;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 80vw;
    height: 40vh;
    border: 3.5rem double #f1e180;
  }
  @media (min-width: 1201px) {
    width: 80vw;
    height: 80vh;
    border: 3.5rem double #f1e180;
  }
`;
