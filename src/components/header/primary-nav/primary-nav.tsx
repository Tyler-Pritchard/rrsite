import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavItem, NavLink, NavContainer, LogoItem, Logo, LogoLink } from './primary-nav.styles';
import { RootState, AppDispatch } from '../../../store/store_index';
import { showSubmenu, hideSubmenu } from '../../../slices/menuSlice';
import Submenu from './submenu';
import Logo_image from "../../../assets/icons/logo4.webp";
import timelineImg from "../../../assets/images/desktop/robrichclassic.webp";
import historyImg from "../../../assets/images/desktop/richhistory.webp";
import tour from "../../../assets/images/desktop/upcoming_dates_thumb.webp";
import past from "../../../assets/images/desktop/past_dates_thumb.webp";
import news from "../../../assets/images/desktop/rr_news.webp";
import press from "../../../assets/images/desktop/press_thumb.webp";
import andOnTopOfThat from "../../../assets/images/desktop/on_top_thumb.webp";
import releases from "../../../assets/images/desktop/releases_thumb.webp";
import songs from "../../../assets/images/desktop/songs_thumb.webp";
import videos from "../../../assets/images/desktop/videos_thumb.webp";
import photos from "../../../assets/images/desktop/photos_thumb.webp";
import podcast from "../../../assets/images/desktop/podcast_thumb.webp";
import fans from "../../../assets/images/desktop/fan_club_thumb.webp";
import shop from "../../../assets/images/desktop/shop_thumb.webp";
import FanClubMenu from './fan-club-menu';
import ShopMenu from './shop-menu';

interface SubmenuItem {
  label: string;
  link: string;
  imgSrc: string;
}

interface FanClubItem {
  label: string;
  link: string;
}

interface ShopItem {
  label: string;
  link: string;
}

const PrimaryNav: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const visibleSubmenu = useSelector((state: RootState) => state.menu.visibleSubmenu);

  const submenuItems: { [key: string]: SubmenuItem[] } = {
    band: [
      { label: 'TIMELINE', link: '/band/timeline', imgSrc: timelineImg },
      { label: 'HISTORY', link: '/history', imgSrc: historyImg },
    ],

    tour: [
      { label: 'UPCOMING DATES', link: '/tour', imgSrc: tour },
      { label: 'PAST DATES', link: '/tour/past', imgSrc: past },
    ],
    news: [
      { label: 'NEWS', link: '/news', imgSrc: news },
      { label: 'IN THE PRESS', link: '/press', imgSrc: press },
      { label: 'AND ON TOP OF THAT...', link: '/and-on-top-of-that', imgSrc: andOnTopOfThat },
    ],
    music: [
      { label: 'RELEASES', link: '/releases', imgSrc: releases },
      { label: 'SONGS AND LYRICS', link: '/songs', imgSrc: songs },
    ],
    media: [
      { label: 'VIDEOS', link: '/videos', imgSrc: videos },
      { label: 'PHOTOS', link: '/photos', imgSrc: photos },
      { label: 'PODCAST', link: '/podcast', imgSrc: podcast },
    ],
  };

  const fanClubItems: FanClubItem[] = [
    { label: 'SIGN UP', link: '/register' },
    { label: 'NEWS', link: '/fans/club-news' },
    { label: 'SO WHAT!', link: '/fans/so-what' },
    { label: 'CONTESTS', link: '/fans/contests' },
    { label: 'VIDEOS', link: '/videos/?category=Fifth Member Exclusives' },
    { label: 'PHOTOS', link: '/photos/?category=Fifth Member Exclusives' },
    { label: 'FORUMS', link: 'https://www.forums.robrich.band' },
    { label: 'LOCAL CHAPTERS', link: '/fans/local-chapters' },
  ];

  const shopItems: ShopItem[] = [
    { label: 'NEW & FEATURED', link: '/shop/products' },
    { label: 'MEDIA', link: '/shop/products' },
    { label: 'APPAREL', link: '/shop/products' },
    { label: 'ACCESSORIES', link: '/shop/products' },
    { label: 'COLLECTIONS', link: '/shop/products' },
  ];

  return (
    <NavContainer>
        {/* band */}
        <NavItem
          onMouseEnter={() => dispatch(showSubmenu('band'))}
          onMouseLeave={() => dispatch(hideSubmenu())}
        >
          <NavLink href="/band/timeline">Band</NavLink>
          {visibleSubmenu === 'band' && <Submenu items={submenuItems.band} show />}
        </NavItem>
        {/* tour */}
        <NavItem
          onMouseEnter={() => dispatch(showSubmenu('tour'))}
          onMouseLeave={() => dispatch(hideSubmenu())}
        >
          <NavLink href="/tour">Tour</NavLink>
          {visibleSubmenu === 'tour' && <Submenu items={submenuItems.tour} show />}
        </NavItem>
        {/* news  */}
        <NavItem onMouseEnter={() => dispatch(showSubmenu('news'))} onMouseLeave={() => dispatch(hideSubmenu())}>
          <NavLink href="/news">News</NavLink>
          {visibleSubmenu === 'news' && <Submenu items={submenuItems.news} show />}
        </NavItem>
        {/* logo  */}
        <LogoItem>
          <LogoLink href="/">
            <Logo src={Logo_image} alt="Logo" />
          </LogoLink>
        </LogoItem>
        {/* music  */}
        <NavItem onMouseEnter={() => dispatch(showSubmenu('music'))}
          onMouseLeave={() => dispatch(hideSubmenu())}>
          <NavLink href="/releases">Music</NavLink>
          {visibleSubmenu === 'music' && <Submenu items={submenuItems.music} show />}
        </NavItem>
        {/* media  */}
        <NavItem onMouseEnter={() => dispatch(showSubmenu('media'))}
          onMouseLeave={() => dispatch(hideSubmenu())}>
          <NavLink href="/media">Media</NavLink>
          {visibleSubmenu === 'media' && <Submenu items={submenuItems.media} show />}
        </NavItem>
        {/* fans  */}
        <NavItem onMouseEnter={() => dispatch(showSubmenu('fans'))}
          onMouseLeave={() => dispatch(hideSubmenu())}>
          <NavLink href="/fans">Fan Club</NavLink>
            {visibleSubmenu === 'fans' && <FanClubMenu items={fanClubItems} show backgroundImage={fans} />}
        </NavItem>
        {/* shop  */}
        <NavItem onMouseEnter={() => dispatch(showSubmenu('shop'))}
          onMouseLeave={() => dispatch(hideSubmenu())}>
        {/* <NavItem onMouseEnter={() => showSubmenu('shop')}> */}
          <NavLink href="/shop/products">Shop</NavLink>
          {visibleSubmenu === 'shop' && <ShopMenu items={shopItems} show backgroundImage={shop} />}
        </NavItem>
    </NavContainer>
  );
};

export default PrimaryNav;