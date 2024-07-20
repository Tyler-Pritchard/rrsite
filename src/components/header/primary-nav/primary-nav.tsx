import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { NavItem, NavLink, ContainerStyle, ToolbarStyle, ButtonStyle, LogoStyle } from './primary-nav.styles';
import Submenu from './submenu';
import Logo from "../../../assets/icons/logo4.png";
import timelineImg from "../../../assets/images/desktop/robrichclassic.png";
import historyImg from "../../../assets/images/desktop/richhistory.png";
import tour from "../../../assets/images/desktop/upcoming_dates_thumb.png";
import past from "../../../assets/images/desktop/past_dates_thumb.png";

const PrimaryNav: React.FC = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  const submenuItems1 = [
    { label: 'Timeline', link: '/timeline', imgSrc: timelineImg },
    { label: 'History', link: '/history', imgSrc: historyImg },
  ];

  const submenuItems2 = [
    { label: 'Past', link: '/tour/past', imgSrc: past },
    { label: 'Tour', link: '/tour', imgSrc: tour },
  ];

  return (
    <nav style={ContainerStyle}>
      <Toolbar style={ToolbarStyle}>

        {/* band */}
        <NavItem style={ButtonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <NavLink href="/band">Band</NavLink>
          <Submenu items={submenuItems1} show={showSubmenu} />
        </NavItem>
        
        {/* tour */}
        <NavItem style={ButtonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <NavLink href="/tour">Tour</NavLink>
          <Submenu items={submenuItems2} show={showSubmenu} />
        </NavItem>

        {/* to do */}
        <NavItem style={ButtonStyle}><NavLink href="/news">News</NavLink></NavItem>
        <NavItem>
          <img src={Logo} alt="Logo" style={LogoStyle}/>
        </NavItem>
        <NavItem style={ButtonStyle}><NavLink href="/music">Music</NavLink></NavItem>
        <NavItem style={ButtonStyle}><NavLink href="/media">Media</NavLink></NavItem>
        <NavItem style={ButtonStyle}><NavLink href="/fan-club">Fan Club</NavLink></NavItem>
        <NavItem style={ButtonStyle}><NavLink href="/shop">Shop</NavLink></NavItem>
      </Toolbar>
    </nav>
  );
};

export default PrimaryNav;

