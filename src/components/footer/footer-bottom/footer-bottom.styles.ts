import styled from 'styled-components';

export const BottomFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgb(0, 0, 0);
  width: 100vw;

  @media (max-width: 480px) {
    padding-top: 2rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 2.5rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-top: 3.5rem;
    padding-bottom: 2rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
  @media (min-width: 1201px) {
    padding-top: 5rem;
    padding-bottom: 3rem;
  }
`;

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 480px) {
    width: 85vw;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 65vw;
    margin-bottom: 1rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    justify-content: center;
    width: 45vw;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 35vw;
  }
  @media (min-width: 1201px) {
    width: 35vw;
  }
`;

export const BottomIconLink = styled.a``;

export const BottomIcons = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  color: white;

  @media (min-width: 769px) and (max-width: 992px) {
    margin: .5rem;
  }
`;

export const BottomLinksContainer = styled.div``;

export const FooterStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 480px) {
    width: 70vw;
    gap: .5rem;
    margin: 1.5rem 1.5rem;
  }    
  @media (min-width: 481px) and (max-width: 768px) {
    width: 55vw;
  }
  @media (min-width: 769px) and (max-width: 850px) {
    width: 50vw;
    margin-top: 1rem;
  }
  @media (min-width: 851px) and (max-width: 900px) {
    width: 95vw;
    margin-top: 1rem;
  }
  @media (min-width: 901px) and (max-width: 992px) {
    width: 90vw;
    flex-wrap: nowrap;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    width: 80vw;
    gap: 1rem;
    align-items: flex-end;
    justify-content: space-around;
    margin: .5rem 0rem;
  }
  @media (min-width: 1201px) {
    width: 60vw;
    margin-top: 1.25rem;
    justify-content: space-between;
    text-align: center;
  }
`;

export const BottomFooterLinks = styled.a<{ disabled?: boolean }>`
  font-size: x-small;
  color: white;
  text-decoration: none;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; /* Prevent click if disabled */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}; /* Dim the link if disabled */

  &:hover {
    text-decoration: ${({ disabled }) => (disabled ? 'none' : 'underline')}; /* No hover effect if disabled */
  }

  @media (min-width: 481px) and (max-width: 768px) {
    margin: .25rem .75rem;
  }
  @media (min-width: 769px) and (max-width: 850px) {
    margin: .25rem 1.5rem;
  }
  @media (min-width: 851px) and (max-width: 900px) {
    margin: .25rem 1.5rem;
  }
  @media (min-width: 901px) and (max-width: 992px) {
    margin: 1rem;
  }
`;