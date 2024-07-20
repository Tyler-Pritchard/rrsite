import React from 'react';
import { SubmenuWrapper, SubmenuItem, SubmenuLink, SubmenuItems } from './submenu.styles';

interface SubmenuProps {
  items: { label: string, link: string, imgSrc: string }[];
  show: boolean;
}

const Submenu: React.FC<SubmenuProps> = ({ items, show }) => {
  return (
    <SubmenuWrapper show={show}>
      <SubmenuItems>
        {items.map((item, index) => (
            <SubmenuItem key={index} style={{ backgroundImage: `url(${item.imgSrc})`}}>
            <span>
              <SubmenuLink href={item.link}>{item.label}</SubmenuLink>
            </span>
          </SubmenuItem>
        ))}
      </SubmenuItems>
    </SubmenuWrapper>
  );
};

export default Submenu;
