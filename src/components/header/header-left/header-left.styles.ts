import styled from 'styled-components';

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
`;

// Close button styling
export const CloseButton = styled.button`
  position: absolute;
  top: 10rem;
  right: 20rem;
  font-size: 5rem;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #ff6347; /* Match hover color for consistency */
  }
`;

export const ModalToggleButton = styled.button`
  font-size: 3.5rem;
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  outline: none;

  &:hover {
    color: #bbbbbb;
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
  color: #ffffff;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
  }
`;
