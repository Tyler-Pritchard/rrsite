import React from 'react';
import { FanClubWrapper, FanClubItems, FanClubItem, FanClubLink } from './fan-club-menu.styles';

// Define a separate interface for individual fan club items
interface FanClubItemProps {
  label: string;
  link: string;
}

// Define props for FanClubMenu
interface FanClubProps {
  items: FanClubItemProps[];
  show: boolean;
  backgroundImage: string;
}

const FanClubMenu: React.FC<FanClubProps> = ({ items, show, backgroundImage }) => {
  return (
    <FanClubWrapper show={show}>
      <FanClubItems backgroundImage={backgroundImage}>
        <FanClubItem>
              {items.map((item, index) => (
                <FanClubLink key={index} href={item.link}>{item.label}</FanClubLink>
              ))}
        </FanClubItem>
      </FanClubItems>
    </FanClubWrapper>
  );
};

export default FanClubMenu;
