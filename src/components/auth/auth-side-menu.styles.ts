import styled from 'styled-components';
import { colors } from '../../globalStyles';

export const SideMenu = styled.div`
  background-color: #f2f2f2;
  gap: 0.5rem;

  @media (max-width: 480px) {
    display: none;
  };

  @media (min-width: 481px) {
    display: flex;
    flex-direction: column;
  };

  @media (min-width: 481px) and (max-width: 768px) {
    padding: 2rem;
    width: 20rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 4rem;
    width: 20rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 6rem;
    width: 30rem;
  };

  @media (min-width: 1201px) {
    padding: 6rem;
    width: 40rem;
  };
`;

export const Breadcrumb = styled.div`
  font-size: 0.85rem;
  color: ${colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;

  span {
    color: ${colors.textPrimary};
  }
`;


export const SideMenuItem = styled.a`
  display: block;
  text-decoration: none;
  color: #000;
  padding: 0.5rem 0;

  &:hover {
    color: ${colors.highlight};
  };

  @media (min-width: 481px) and (max-width: 768px){
    padding: 1rem;
  };

  @media (min-width: 769px) and (max-width: 992px) {
    padding: 2rem;
  };

  @media (min-width: 993px) and (max-width: 1200px) {
    padding: 2.5rem;
  };

  @media (min-width: 1201px) {
    padding: 3rem;
  };
`;