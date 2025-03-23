import styled from 'styled-components';
import { colors, GlobalVariables } from '../../../globalStyles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10rem;
  right: 20rem;
  font-size: 5rem;
  background: none;
  border: none;
  color: ${colors.textPrimary};
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.highlight};
  }
`;

export const ModalToggleButton = styled.button`
  font-size: 3.5rem;
  background: none;
  border: none;
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  cursor: pointer;
  outline: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.textSecondary};
  }
`;

export const ModalMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const ModalMenuItem = styled.li`
  margin: 1rem 0;
`;

export const ModalMenuLink = styled.a`
  text-decoration: none;
  font-size: 3rem;
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.highlight};
  }
`;
