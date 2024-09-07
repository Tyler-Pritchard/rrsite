import styled from 'styled-components';
import { ReactComponent as AccountCircleIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/icons/cart.svg';
import { ReactComponent as LogOutIcon } from '../../../assets/icons/logout.svg';


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

// Hide account button for mobile
export const IconWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
    height: 0px;
    width: 0px;
    padding: 0px;
  }
`;

export const StyledIconButton = styled.a`
  border: none;
`;

export const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  color: black;
  background: none;
  background-color: transparent;
  height: 2rem;
  width: 2rem;
`;

export const StyledLogoutIcon = styled(LogOutIcon)`
  color: black;
  background: none;
  background-color: transparent;
  height: 2rem;
  width: 2rem;
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: black;
  background: none;
  background-color: transparent;
  height: 2rem;
  width: 2rem;
  border: none;
`;