import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ModalContainer,
  ModalMenu,
  ModalMenuItem,
  ModalToggleButton,
  Overlay,
  ModalMenuLink,
  CloseButton,
} from './header-left.styles';

type MenuItem = {
  label: string;
  href: string;
};

// Menu items
const MENU_ITEMS: MenuItem[] = [
  { label: 'Tour', href: '/tour' },
  { label: 'News', href: '/news' },
  { label: 'Timeline', href: '/band/timeline' },
  { label: 'Store', href: '/store' },
  { label: 'Media', href: '/media' },
];

// Modal component
const Modal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <CloseButton onClick={onClose} aria-label="Close Navigation Menu">
          &times;
        </CloseButton>
        <ModalMenu>
          {MENU_ITEMS.map((item, index) => (
            <ModalMenuItem key={index}>
              <ModalMenuLink href={item.href}>{item.label}</ModalMenuLink>
            </ModalMenuItem>
          ))}
        </ModalMenu>
      </ModalContainer>
    </>,
    document.body
  );
};

// Main header-left component
const HeaderLeft: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <ModalToggleButton onClick={toggleModal} aria-label="Open Navigation Menu">
        ☰
      </ModalToggleButton>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default HeaderLeft;
