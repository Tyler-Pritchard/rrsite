import React from 'react';
import { FanClubWrapper, FanClubItems, FanClubItem, FanClubLink } from './fan-club-menu.styles';

interface FanClubProps {
  items: { label: string, link: string }[];
  show: boolean;
  backgroundImage: string;
}

const FanClubMenu: React.FC<FanClubProps> = ({ items, show, backgroundImage }) => {
  return (
    <FanClubWrapper show={show}>
      <FanClubItems backgroundImage={backgroundImage}>
        <FanClubItem>
          <div className="content">
            <span>
              {items.map((item, index) => (
                <FanClubLink key={index} href={item.link}>{item.label}</FanClubLink>
              ))}
            </span>
          </div>
        </FanClubItem>
      </FanClubItems>
    </FanClubWrapper>
  );
};

export default FanClubMenu;
