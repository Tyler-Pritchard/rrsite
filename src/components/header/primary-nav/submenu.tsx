import React from 'react';
import { SubmenuWrapper, SubmenuItems, SubmenuItem, SubmenuLink } from './submenu.styles';

interface SubmenuProps {
  items: { label: string, link: string, imgSrc: string }[];
  show: boolean;
}

const Submenu: React.FC<SubmenuProps> = ({ items, show }) => {
  return (
    <SubmenuWrapper show={show}>
      <SubmenuItems>
        {items.map((item, index) => (
          <SubmenuItem key={index} backgroundImage={item.imgSrc}>
            <div className="content">
              <span>
                <SubmenuLink href={item.link}>{item.label}</SubmenuLink>
              </span>
            </div>
          </SubmenuItem>
        ))}
      </SubmenuItems>
    </SubmenuWrapper>
  );
};

export default Submenu;
