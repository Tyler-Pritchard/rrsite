import styled from 'styled-components';
import { colors, GlobalVariables } from '../../../globalStyles';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: visible;
  height: 10rem;
  font-family: ${GlobalVariables.paragraphFont};
`;

export const NavItem = styled.li`
  display: none;

  @media (min-width: 1200px) {
    display: inline-block;
    position: relative;
    cursor: pointer;
    padding: 4.2rem 1rem;
    font-family: ${GlobalVariables.paragraphFont};
    color: ${colors.textPrimary};
  }
`;

export const NavLink = styled.a`
  @media (min-width: 1200px) {
    color: ${colors.textPrimary};
    position: relative;
    text-decoration: none;
    display: inline;
    z-index: 9999;
    font-family: ${GlobalVariables.paragraphFont};
    font-size: 1.6rem;
    transition: color 0.3s ease;

    &:hover,
    &:focus-visible {
      color: ${colors.highlight};
      text-decoration: underline;
      outline: none;
    }
  }
`;

export const LogoItem = styled.li`
  display: inline-block;
  position: relative;
  cursor: pointer;
  z-index: 9999;

  @media (max-width: 480px) {
    padding-top: 2rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-top: 1.5rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    padding-top: 1rem;
  }
`;

export const Logo = styled.img`
  @media (max-width: 480px) {
    height: 5.75rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 7rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    height: 8rem;
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    height: 9.5rem;
  }
  @media (min-width: 1201px) {
    height: 9rem;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};

  &:hover {
    color: ${colors.highlight};
  }
`;
