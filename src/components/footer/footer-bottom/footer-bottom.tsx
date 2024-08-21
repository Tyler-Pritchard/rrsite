import React from 'react';
import {Stack} from '@mui/material';
import {
    BottomFooterWrapper, BottomFooterDivider, BottomIconsContainer, BottomLinksContainer, BottomIconLink, BottomIcons, BottomFooterLinks
} from "./footer-bottom.styles";
import XIcon from '../../../assets/icons/x.svg';
import FacebookIcon from '../../../assets/icons/facebook.svg';
import YouTubeIcon from '../../../assets/icons/youtube.svg';
import InstagramIcon from '../../../assets/icons/instagram.svg';
import TikTokIcon from '../../../assets/icons/tiktok.svg';
import ThreadsIcon from '../../../assets/icons/threads.svg';
import TextIcon from '../../../assets/icons/text.svg';
import ListenIcon from '../../../assets/icons/listen.svg';

const FooterBottom = () => {
    return (
        <BottomFooterWrapper>
            {/* Social Media Icons Container */}
            <BottomIconsContainer>
                <BottomIconLink href="https://www.instagram.com/robrichusa/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <BottomIcons src={InstagramIcon} alt="Instagram" />
                </BottomIconLink>
                <BottomIconLink href="https://www.youtube.com/@RobRichUSA" aria-label="Youtube" target="_blank" rel="noopener noreferrer">
                    <BottomIcons src={YouTubeIcon} />
                </BottomIconLink>
                <BottomIconLink href="https://www.facebook.com/RobRichUSA" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <BottomIcons src={FacebookIcon} />
                </BottomIconLink>
                <BottomIconLink href="https://www.tiktok.com/@robrichusa" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                    <BottomIcons src={TikTokIcon} />
                </BottomIconLink>
                <BottomIconLink href="https://www.threads.net/@robrichusa" aria-label="Threads" target="_blank" rel="noopener noreferrer">
                    <BottomIcons src={ThreadsIcon} />
                </BottomIconLink>
                <BottomIconLink href="https://twitter.com/RobRichUSA" aria-label="X" target="_blank" rel="noopener noreferrer">
                    <BottomIcons src={XIcon} />
                </BottomIconLink>
                <BottomIconLink href="https://www.robrich.band" aria-label="Text" target="_blank" rel="noopener noreferrer">
                    <BottomIcons src={TextIcon} />
                </BottomIconLink>
                <BottomIconLink href="https://www.reverbnation.com/robrichusa" aria-label="Listen" target="_blank" rel="noopener noreferrer">
                    <BottomIcons src={ListenIcon} />
                </BottomIconLink>
            </BottomIconsContainer>

            <BottomFooterDivider variant='fullWidth' aria-hidden="false" />

            {/* Text Links Container  */}
            <BottomLinksContainer>
                <Stack direction="row" spacing={2}>
                    <BottomFooterLinks href="#text-buttons">HELP</BottomFooterLinks>
                    <BottomFooterDivider orientation="vertical" variant="middle" />
                    <BottomFooterLinks href="#text-buttons">RETURNS</BottomFooterLinks>
                    <BottomFooterDivider orientation="vertical" variant="middle" />
                    <BottomFooterLinks href="#text-buttons">CREDITS</BottomFooterLinks>
                    <BottomFooterDivider orientation="vertical" variant="middle" />
                    <BottomFooterLinks href="#text-buttons">TERMS OF USE</BottomFooterLinks>
                    <BottomFooterDivider orientation="vertical" variant="middle" />
                    <BottomFooterLinks href="#text-buttons">PRIVACY POLICY</BottomFooterLinks>
                    <BottomFooterDivider orientation="vertical" variant="middle" />
                    <BottomFooterLinks disabled>© ROB RICH</BottomFooterLinks>
                    <BottomFooterDivider orientation="vertical" variant="middle" />
                    <BottomFooterLinks disabled>© UNCROSSED RECORDINGS</BottomFooterLinks>
                    <BottomFooterDivider orientation="vertical" variant="middle" />
                    <BottomFooterLinks disabled>THE ROB RICH CLUB®</BottomFooterLinks>
                </Stack>
            </BottomLinksContainer>
        </BottomFooterWrapper>
    );
}
export default FooterBottom;