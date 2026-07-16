import React from 'react';
import {
  TipWrapper,
  HeroImage,
  Name,
  Tagline,
  PaymentSection,
  PaymentButton,
  PaymentNote,
  SectionTitle,
  VideoWrapper,
  SocialRow,
  SocialLink,
} from './Tip.styles';

import heroPhoto from '../../assets/images/desktop/UmbrellaStage1.png';

// PLACEHOLDERS — replace with real values before going live
const VENMO_LINK = 'https://venmo.com/PLACEHOLDER';
const PAYPAL_LINK = 'https://paypal.me/PLACEHOLDER';
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/videoseries?si=XF2ZZbU9wHhDKdO5&amp;list=PLGsq_SvGDamI';
const INSTAGRAM_LINK = 'https://instagram.com/robrichusa/';
const FACEBOOK_LINK = 'https://facebook.com/RobRichUSA/';

const Tip: React.FC = () => {
  return (
    <TipWrapper>
      <HeroImage src={heroPhoto} alt="Rob Rich performing" />
      <Name>ROB RICH</Name>
      <Tagline>
        Thank you for supporting local artists!
      </Tagline>

      <PaymentSection>
        <PaymentButton href={VENMO_LINK} target="_blank" rel="noopener noreferrer">
          Tip via Venmo
        </PaymentButton>
        <PaymentButton href={PAYPAL_LINK} target="_blank" rel="noopener noreferrer">
          Tip via PayPal
        </PaymentButton>
      </PaymentSection>
      <PaymentNote>Rob Rich (Tyler)</PaymentNote>

      <SectionTitle>Latest Videos</SectionTitle>
      <VideoWrapper>
        <iframe
          src={YOUTUBE_EMBED_URL}
          title="Rob Rich - Latest Performance"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>

      <SectionTitle>Follow</SectionTitle>
      <SocialRow>
        <SocialLink href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
          Instagram
        </SocialLink>
        <SocialLink href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer">
          Facebook
        </SocialLink>
      </SocialRow>
    </TipWrapper>
  );
};

export default Tip;