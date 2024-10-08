import React from 'react';
import { SubmenuWrapper, SubmenuItems, SubmenuItem, SubmenuLink } from './submenu.styles';

// Define a separate interface for individual submenu items
interface SubmenuItemProps {
  label: string;
  link: string;
  imgSrc: string;
}

// Define props for Submenu using SubmenuItemProps[]
interface SubmenuProps {
  items: SubmenuItemProps[];
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
