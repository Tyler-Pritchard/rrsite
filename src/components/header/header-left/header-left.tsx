import React, { useState } from 'react';
import {
    Container,
    OpenButton,
    Drawer,
    ModalContainer,
    ModalMenu,
    ModalMenuItem,
    MenuItemText
  } from './header-left.styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const HeaderLeft: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  
    const menuItems = [
        { title: 'Tour', link: '/tour' },
        { title: 'News', link: '/news' },
        { title: 'Band', link: '/band/timeline' },
        { title: 'Music', link: '/store/music' },
        { title: 'Media', link: '/media' },
    ];
/* TO DO: REPLACE MENUICON & CLOSE ICON */
    return (
        <Container>
            <OpenButton onClick={toggleModal}>
                <MenuIcon />
            </OpenButton>
            {isModalOpen && (
                <ModalContainer>
                    <Drawer>
                        <OpenButton onClick={toggleModal}><CloseIcon /></OpenButton>
                        <ModalMenu>
                        {menuItems.map((item, index) => (
                            <ModalMenuItem key={index} onClick={toggleModal}>
                                <MenuItemText>{item.title}</MenuItemText>
                            </ModalMenuItem>
                        ))}
                        </ModalMenu>
                    </Drawer>
                </ModalContainer>
            )}
        </Container>
    );
  };
  
  export default HeaderLeft;
