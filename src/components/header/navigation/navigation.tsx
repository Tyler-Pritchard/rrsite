import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {ContainerStyle, AccountButton, CartButton} from "./navigation.styles";

const Navigation: React.FC = () => {
    return (
        <Box style={ContainerStyle} gap={2}>
            <IconButton aria-label="user login">
                <AccountCircleIcon style={AccountButton} />
            </IconButton>
            <IconButton aria-label="shopping cart">
                <ShoppingCartIcon style={CartButton} />
            </IconButton>
        </Box>
    );
}

export default Navigation;
