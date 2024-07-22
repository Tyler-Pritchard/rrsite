import React, { useState } from 'react';
import { Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ContainerStyle, OpenButtonStyle, DrawerStyle, ModalContainerStyle } from './header-left.styles';

export default function HeaderLeft() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const menuItems = [
        { title: 'Tour', link: '/tour' },
        { title: 'News', link: '/news' },
        { title: 'Band', link: '/band/timeline' },
        { title: 'Music', link: '/store/music' },
        { title: 'Media', link: '/media' },
    ];

    return (
        <Container style={ContainerStyle}>
            <IconButton onClick={toggleDrawer(true)} edge="start" style={OpenButtonStyle} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)} variant="persistent" style={DrawerStyle}>
                <Container style={ModalContainerStyle}>
                    <IconButton onClick={toggleDrawer(false)}>
                        <CloseIcon />
                    </IconButton>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} onClick={toggleDrawer(false)}>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Drawer>
        </Container>
    );
}
