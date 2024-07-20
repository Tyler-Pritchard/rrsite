import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Logo from "../../../assets/icons/logo4.png";
import { NavItem, NavLink, ContainerStyle, ToolbarStyle, ButtonStyle, LogoStyle } from './primary-nav.styles';
import Submenu from './submenu';
import timelineImg from "../../../assets/images/desktop/robrichclassic.png";
import historyImg from "../../../assets/images/desktop/richhistory.png"

const PrimaryNav: React.FC = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  const submenuItems = [
    { label: 'Timeline', link: '/band/timeline', imgSrc: timelineImg },
    { label: 'History', link: '/history', imgSrc: historyImg },
  ];

  return (
    <nav style={ContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Toolbar style={ToolbarStyle}>
        <NavItem style={ButtonStyle}><NavLink href="/tour">Tour</NavLink></NavItem>
        <NavItem style={ButtonStyle}><NavLink href="/news">News</NavLink></NavItem>
        <NavItem style={ButtonStyle}>
          <NavLink href="/band">Band</NavLink>
          <Submenu items={submenuItems} show={showSubmenu} />
        </NavItem>
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

