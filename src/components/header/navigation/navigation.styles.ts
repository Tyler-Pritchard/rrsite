import styled from 'styled-components';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`

// Hide account button for mobile
export const IconWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledIconButton = styled(IconButton)``

export const StyledAccountCircleIcon = styled(AccountCircleIcon)`
  font-size: 2rem;
  color: white;
`

export const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
    font-size: 2rem;
    color: white;
`