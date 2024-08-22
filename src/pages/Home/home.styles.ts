import styled from 'styled-components';
import MainImage from '../../assets/images/desktop/TacomaCrows.png';

export const MainWrapper = styled.div`
  background-image: url(${MainImage});
  top: 0;
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

  @media (max-width: 480px) {
    width: 102%;
    height: 25rem;
    padding-top: 4.5rem;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 15%;
  margin-top: 25%;
  color: #c47e37;
  padding: 3%;
  top: 45%;
  width: 65vw;
  height: 30vh;
  text-align: center;
  background-color: #fce4ad;
  opacity: 90%;
  border: .5rem double gold;
    z-index: 0;

  @media (max-width: 480px) {
    top: 45%;
    width: 65vw;
    height: 8rem;
    padding-top: 2rem;
  };
`;

// @media (max-width: 480px) {}
// @media (max-width: 768px) {}
// @media (max-width: 992px) {}
// @media (max-width: 1200px) {}
// @media (max-width: 1201px) {}