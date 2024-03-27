import styled from 'styled-components';
// background-image: url(${(props) => props.img});
const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
`;
const HeroTitle = styled.div`
  margin-top: 50%;
  color: white;
  border: 1px solid white;
  padding: 5%;
  top: 50%;
  width: 90vw;
  height: 40vh;
  h1 {
    font-size: 2.8rem;
  }
`;
export { HeroWrapper, HeroTitle };
