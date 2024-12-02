import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store_index';
import { logoutUser } from '../../../slices/userSlice';
import Cart from '../../../pages/Cart/Cart'; // Import the Cart overlay component
import {
  Container,
  IconWrapper,
  StyledIconButton,
  StyledAccountCircleIcon,
  StyledLogoutIcon,
  StyledShoppingCartIcon,
} from './navigation.styles';

const Navigation: React.FC = () => {
  const isLoggedIn = useSelector<RootState, boolean>((state) => state.user.isLoggedIn);
  const dispatch: AppDispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false); // State for toggling cart overlay

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const toggleCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default navigation
    setIsCartOpen((prev) => !prev); // Toggle cart overlay
  };

  return (
    <>
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
        {/* Update cart icon to toggle cart overlay */}
        <StyledIconButton href="#" aria-label="shopping cart" onClick={toggleCart}>
          <StyledShoppingCartIcon />
        </StyledIconButton>
      </Container>
      {/* Render Cart overlay */}
      {isCartOpen && <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navigation;
