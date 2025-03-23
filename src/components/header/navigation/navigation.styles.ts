import styled from 'styled-components';
import { colors, GlobalVariables } from '../../../globalStyles';
import { ReactComponent as AccountCircleIcon } from '../../../assets/icons/user.svg';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/icons/cart.svg';
import { ReactComponent as LogOutIcon } from '../../../assets/icons/logout.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  font-family: ${GlobalVariables.paragraphFont};
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
  background: transparent;
  cursor: pointer;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
  padding: 0.5rem;

  &:hover,
  &:focus-visible {
    color: ${colors.highlight};
    transition: color 0.3s ease;
    outline: none;
  }
`;

export const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  color: ${colors.textPrimary};
  background-color: transparent;
  height: 2rem;
  width: 2rem;

  ${StyledIconButton}:hover & {
    color: ${colors.highlight};
  }
`;

export const StyledLogoutIcon = styled(LogOutIcon)`
  color: ${colors.textPrimary};
  background-color: transparent;
  height: 2rem;
  width: 2rem;

  ${StyledIconButton}:hover & {
    color: ${colors.highlight};
  }
`;

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
  color: ${colors.textPrimary};
  background-color: transparent;
  height: 2rem;
  width: 2rem;

  ${StyledIconButton}:hover & {
    color: ${colors.highlight};
  }
`;
