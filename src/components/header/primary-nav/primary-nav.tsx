import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { NavItem, NavLink, ContainerStyle, ToolbarStyle, ButtonStyle, LogoStyle } from './primary-nav.styles';
import { connect } from 'react-redux';
import { showSubmenu, hideSubmenu } from '../../../store/actions/menuActions';
import Submenu from './submenu';
import Logo from "../../../assets/icons/logo4.png";
import timelineImg from "../../../assets/images/desktop/robrichclassic.png";
import historyImg from "../../../assets/images/desktop/richhistory.png";
import tour from "../../../assets/images/desktop/upcoming_dates_thumb.png";
import past from "../../../assets/images/desktop/past_dates_thumb.png";

interface SubmenuItem {
  label: string;
  link: string;
  imgSrc: string;
}

interface PrimaryNavProps {
  visibleSubmenu: string | null;
  showSubmenu: (menu: string) => void;
  hideSubmenu: () => void;
}

const PrimaryNav: React.FC<PrimaryNavProps> = ({ visibleSubmenu, showSubmenu, hideSubmenu }) => {
  const submenuItems: { [key: string]: SubmenuItem[] } = {
    band: [
      { label: 'Timeline', link: '/band/timeline', imgSrc: timelineImg },
      { label: 'History', link: '/history', imgSrc: historyImg },
    ],

    tour: [
      { label: 'Upcoming Dates', link: '/tour', imgSrc: tour },
      { label: 'Past Dates', link: '/tour/past', imgSrc: past },
    ]
  };

  return (
    <nav style={ContainerStyle}>
      <Toolbar style={ToolbarStyle}>

        {/* band */}
        <NavItem
          onMouseEnter={() => showSubmenu('band')}
          onMouseLeave={hideSubmenu}
        >
          <NavLink href="/band">Band</NavLink>
          {visibleSubmenu === 'band' && <Submenu items={submenuItems.band} show />}
        </NavItem>
        <NavItem
          onMouseEnter={() => showSubmenu('tour')}
          onMouseLeave={hideSubmenu}
        >
          <NavLink href="/tour">Tour</NavLink>
          {visibleSubmenu === 'tour' && <Submenu items={submenuItems.tour} show />}
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

const mapStateToProps = (state: any) => ({
  visibleSubmenu: state.menu.visibleSubmenu,
});

const mapDispatchToProps = {
  showSubmenu,
  hideSubmenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrimaryNav);