import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store_index';
import { logoutUser } from '../../../store/actions/userActions';
import {Container, IconWrapper, StyledIconButton, StyledAccountCircleIcon, StyledLogoutIcon, StyledShoppingCartIcon} from "./navigation.styles";


const Navigation: React.FC = () => {
    const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
    const dispatch: AppDispatch = useDispatch();
  
    const handleLogout = () => {
      dispatch(logoutUser()); // Dispatch the logout action to update Redux state
    };
  
    return (
        <Container>
            <StyledIconButton href="/login" aria-label="user login">
                <IconWrapper>
                    {isLoggedIn ? (
                        <StyledLogoutIcon onClick={handleLogout} />
                    ) : (
                        <StyledAccountCircleIcon />
                    )}
                </IconWrapper>
            </StyledIconButton>
            <StyledIconButton aria-label="shopping cart">
                    <StyledShoppingCartIcon />
            </StyledIconButton>
        </Container>
    );
}

export default Navigation;
