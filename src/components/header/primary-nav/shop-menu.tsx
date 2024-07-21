import React from 'react';
import { ShopWrapper, ShopItems, ShopItem, ShopLink } from './shop-menu.styles';

interface ShopProps {
  items: { label: string, link: string }[];
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
