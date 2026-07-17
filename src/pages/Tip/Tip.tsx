import React from 'react';
import {
  TipWrapper,
  HeroImage,
  Name,
  Tagline,
  Section,
  SectionTitle,
  PaymentNote,
  VideoWrapper,
  RowList,
  RowButton,
  RowIcon,
  TimelineCard,
  TimelineCardTitle,
  TimelineCardSubtitle,
} from './Tip.styles';

import heroPhoto from '../../assets/images/desktop/UmbrellaStage1.png';

// Payment icons
import venmoIcon from '../../assets/icons/venmo.svg';
import paypalIcon from '../../assets/icons/paypal.svg';
import patreonIcon from '../../assets/icons/patreon.svg';

// SM/media icons
import youtubeIcon from '../../assets/icons/youtube.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import threadsIcon from '../../assets/icons/threads.svg';
import xIcon from '../../assets/icons/x.svg';
import soundcloudIcon from '../../assets/icons/soundcloud.svg';
import bandcampIcon from '../../assets/icons/bandcamp.svg';

// Brand accent colors — left border
const BRAND = {
  venmo: '#3D95CE',
  paypal: '#003087',
  patreon: '#FF424D',
};

// Account links
const VENMO_LINK = 'https://venmo.com/u/RobRichMusic';
const PAYPAL_LINK = 'https://www.paypal.biz/RobRichUSA';
const PATREON_LINK = 'https://patreon.com/RobRichUSA?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink';
const YOUTUBE_EMBED_URL =
  'https://www.youtube.com/embed/videoseries?si=XF2ZZbU9wHhDKdO5&list=PLGsq_SvGDamI';
const YOUTUBE_CHANNEL_LINK = 'https://youtube.com/@RobRichUSA';
const FACEBOOK_LINK = 'https://facebook.com/RobRichUSA/';
const INSTAGRAM_LINK = 'https://instagram.com/robrichusa/';
const THREADS_LINK = 'https://www.threads.net/@robrichusa';
const X_LINK = 'https://x.com/RobRichUSA';
const SOUNDCLOUD_LINK = 'https://on.soundcloud.com/wktjNloOFCUWdh4Y4k';
const BANDCAMP_LINK = 'https://robrich.bandcamp.com/';

const Tip: React.FC = () => {
  return (
    <TipWrapper>
      <HeroImage src={heroPhoto} alt="Rob Rich performing" />
      <Name>ROB RICH</Name>
      <Tagline>Thank you for supporting local artists!</Tagline>

      <Section>
        <SectionTitle>Support</SectionTitle>
        <RowList>
          <RowButton accent={BRAND.venmo} href={VENMO_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={venmoIcon} alt="" />
            Venmo
          </RowButton>
          <RowButton accent={BRAND.paypal} href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={paypalIcon} alt="" />
            PayPal
          </RowButton>
          <RowButton accent={BRAND.patreon} href={PATREON_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={patreonIcon} alt="" />
            Patreon
          </RowButton>
        </RowList>
        <PaymentNote>Rob Rich (Tyler)</PaymentNote>
      </Section>

      <Section>
        <SectionTitle>Listen &amp; Watch</SectionTitle>
        <VideoWrapper>
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="Rob Rich - Latest Performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoWrapper>
        <RowList>
          <RowButton href={YOUTUBE_CHANNEL_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={youtubeIcon} alt="" />
            YouTube
          </RowButton>
          <RowButton href={SOUNDCLOUD_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={soundcloudIcon} alt="" />
            SoundCloud
          </RowButton>
          <RowButton href={BANDCAMP_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={bandcampIcon} alt="" />
            BandCamp
          </RowButton>
        </RowList>
      </Section>

      <Section>
        <SectionTitle>Follow</SectionTitle>
        <RowList>
          <RowButton href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={instagramIcon} alt="" />
            Instagram
          </RowButton>
          <RowButton href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={facebookIcon} alt="" />
            Facebook
          </RowButton>
          <RowButton href={THREADS_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={threadsIcon} alt="" />
            Threads
          </RowButton>
          <RowButton href={X_LINK} target="_blank" rel="noopener noreferrer">
            <RowIcon src={xIcon} alt="" />
            X
          </RowButton>
        </RowList>
      </Section>

      <Section>
        <TimelineCard to="/band/timeline">
          <TimelineCardTitle>The Story So Far</TimelineCardTitle>
          <TimelineCardSubtitle>26 years of music in one long sporadically updated timeline.</TimelineCardSubtitle>
        </TimelineCard>
      </Section>
    </TipWrapper>
  );
};

export default Tip;