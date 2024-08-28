import styled from 'styled-components';
import MainImage from '../../assets/images/desktop/TacomaCrows.png';

export const MainWrapper = styled.div`
  background-image: url(${MainImage});
  width: 99%;
  height: auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10rem;
  padding-bottom: 6rem;

  @media (min-width: 992px) {
    padding-top: 14rem;
  }
  @media (min-width: 1200px) {
    padding-top: 16rem;
  }
`;

export const MainTitle = styled.h1`
  color: #c47e37;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;
  height: 30vh;
  text-align: center;
  background-color: #fce4ad;
  opacity: 90%;
  border: .5rem double gold;
  z-index: 0;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    height: 40vh;
    padding-top: 2rem;
    justify-content: center;
  };
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
