import styled from 'styled-components';

export const Container = styled.div`
  width: 4.5rem;
`;

export const OpenButton = styled.button`
  color: white;
  
  @media (min-width: 768px) {
    height: 3rem;
    width: 3rem;
  }
`;

export const Drawer = styled.div`
    background-color: white;
    width: 98vw;
    height: 98vh;
    padding-top: 6rem;
    padding-left: 3rem;
    border-radius: 8px; 
    z-index: 10002; 
`;
  
export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalMenu = styled.ul`
  list-style-type: none;
  padding-left: 2rem;
  font-size: large;
  margin: 0;
`;

export const ModalMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: black;
  
  &:hover {
    background-color: lightgray;
  }
`;

export const MenuItemText = styled.header`
  color: black;
`;