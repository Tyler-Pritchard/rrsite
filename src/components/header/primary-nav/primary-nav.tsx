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
import news from "../../../assets/images/desktop/rr_news.png";
import press from "../../../assets/images/desktop/press_thumb.png";
import andOnTopOfThat from "../../../assets/images/desktop/on_top_thumb.png";
import releases from "../../../assets/images/desktop/releases_thumb.png";
import songs from "../../../assets/images/desktop/songs_thumb.png";
import videos from "../../../assets/images/desktop/videos_thumb.png";
import photos from "../../../assets/images/desktop/photos_thumb.png";
import podcast from "../../../assets/images/desktop/podcast_thumb.png";
import fans from "../../../assets/images/desktop/fan_club_thumb.png";
import FanClubMenu from './fan-club-menu';

interface SubmenuItem {
  label: string;
  link: string;
  imgSrc: string;
}

interface FanClubItem {
  label: string;
  link: string;
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
    ],
    news: [
      { label: 'News', link: '/news', imgSrc: news },
      { label: 'In the Press', link: '/press', imgSrc: press },
      { label: 'And on Top of That...', link: '/and-on-top-of-that', imgSrc: andOnTopOfThat },
    ],
    music: [
      { label: 'Releases', link: '/releases', imgSrc: releases },
      { label: 'Songs and Lyrics', link: '/songs', imgSrc: songs },
    ],
    media: [
      { label: 'Videos', link: '/videos', imgSrc: videos },
      { label: 'Photos', link: '/photos', imgSrc: photos },
      { label: 'Podcast', link: '/podcast', imgSrc: podcast },
    ],
  };

  const fanClubItems: FanClubItem[] = [
    { label: 'Sign Up', link: '/fans/join' },
    { label: 'News', link: '/fans/benefits' },
    { label: 'So What!', link: '/fans/events' },
    { label: 'Contests', link: '/fans/join' },
    { label: 'Videos', link: '/fans/benefits' },
    { label: 'Photos', link: '/fans/events' },
    { label: 'Forums', link: '/fans/benefits' },
    { label: 'Local Chapters', link: '/fans/events' },
  ];

  return (
    <nav style={ContainerStyle}>
      <Toolbar style={ToolbarStyle}>
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
        <NavItem style={ButtonStyle} onMouseEnter={() => showSubmenu('news')} onMouseLeave={hideSubmenu}>
          <NavLink href="/news">News</NavLink>
          {visibleSubmenu === 'news' && <Submenu items={submenuItems.news} show />}
        </NavItem>
        <NavItem>
          <img src={Logo} alt="Logo" style={LogoStyle}/>
        </NavItem>
        <NavItem style={ButtonStyle} onMouseEnter={() => showSubmenu('music')}
          onMouseLeave={hideSubmenu}>
          <NavLink href="/music">Music</NavLink>
          {visibleSubmenu === 'music' && <Submenu items={submenuItems.music} show />}
        </NavItem>
        <NavItem style={ButtonStyle} onMouseEnter={() => showSubmenu('media')}
          onMouseLeave={hideSubmenu}>
          <NavLink href="/media">Media</NavLink>
          {visibleSubmenu === 'media' && <Submenu items={submenuItems.media} show />}
        </NavItem>
        <NavItem style={ButtonStyle} onMouseEnter={() => showSubmenu('fans')}
          onMouseLeave={hideSubmenu}>
          <NavLink href="/fans">Fan Club</NavLink>
            {visibleSubmenu === 'fans' && <FanClubMenu items={fanClubItems} show backgroundImage={fans} />}
        </NavItem>

        {/* to do */}
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