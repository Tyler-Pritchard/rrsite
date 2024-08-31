import React from 'react';
import {Container, IconWrapper, StyledIconButton, StyledAccountCircleIcon, StyledShoppingCartIcon} from "./navigation.styles";

const Navigation: React.FC = () => {
    return (
        <Container>
            <StyledIconButton href="/login" aria-label="user login">
                <IconWrapper>
                    <StyledAccountCircleIcon />
                </IconWrapper>
            </StyledIconButton>
            <StyledIconButton aria-label="shopping cart">
                    <StyledShoppingCartIcon />
            </StyledIconButton>
        </Container>
    );
}

export default Navigation;
