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

// Define an interface for the props
interface HeaderLeftProps {}

// Define an interface for menu items
interface MenuItem {
    title: string;
    link: string;
}

const HeaderLeft: React.FC<HeaderLeftProps> = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    // toggle modal state
    const toggleModal = (): void => {
    //   setIsModalOpen(!isModalOpen);
    console.log("modal toggled!")
    };
  
    const menuItems: MenuItem[] = [
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
