import React, { useState } from 'react';
import {
    StyledMenuIcon, 
    StyledCloseIcon, 
    Container,
    OpenButton,
    Drawer,
    ModalContainer,
    ModalMenu,
    ModalMenuItem,
    ModalMenuLink,
    MenuItemText
  } from './header-left.styles';

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

    return (
        <Container>
            <OpenButton onClick={toggleModal}>
                <StyledMenuIcon />
            </OpenButton>
            {isModalOpen && (
                <ModalContainer>
                    <Drawer>
                        <OpenButton onClick={toggleModal}><StyledCloseIcon />Close</OpenButton>
                        <ModalMenu>
                        {menuItems.map((item, index) => (
                            <ModalMenuItem key={index} onClick={toggleModal}>
                                <ModalMenuLink href={item.link}>
                                    <MenuItemText>{item.title}</MenuItemText>
                                </ModalMenuLink>
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
