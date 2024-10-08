import React from 'react';
import { ShopWrapper, ShopItems, ShopItem, ShopLink } from './shop-menu.styles';

// Define a separate interface for individual shop items
interface ShopItemProps {
  label: string;
  link: string;
}

// Define props for ShopMenu using ShopItemProps[]
interface ShopProps {
  items: ShopItemProps[];
  show: boolean;
  backgroundImage: string;
}

const ShopMenu: React.FC<ShopProps> = ({ items, show, backgroundImage }) => {
  return (
    <ShopWrapper show={show}>
      <ShopItems backgroundImage={backgroundImage}>
        <ShopItem>
          <div className="content">
            <span>
              {items.map((item, index) => (
                <ShopLink key={index} href={item.link}>{item.label}</ShopLink>
              ))}
            </span>
          </div>
        </ShopItem>
      </ShopItems>
    </ShopWrapper>
  );
};

export default ShopMenu;
