import React from 'react';
import {
    BottomFooterWrapper, BottomIconsContainer, BottomLinksContainer, FooterStack, BottomIconLink, BottomIcons, BottomFooterLinks
} from "./footer-bottom.styles";
import XIcon from '../../../assets/icons/x.svg';
import FacebookIcon from '../../../assets/icons/facebook.svg';
import YouTubeIcon from '../../../assets/icons/youtube.svg';
import InstagramIcon from '../../../assets/icons/instagram.svg';
import TikTokIcon from '../../../assets/icons/tiktok.svg';
import ThreadsIcon from '../../../assets/icons/threads.svg';
import TextIcon from '../../../assets/icons/text.svg';
import ListenIcon from '../../../assets/icons/listen.svg';

// Define the TypeScript interface for the social link items
interface SocialLink {
    href: string;
    ariaLabel: string;
    iconSrc: string;
    altText: string;
}

// Define the TypeScript interface for the footer link items
interface FooterLink {
    href: string;
    label: string;
    disabled?: boolean;
}
  
// Social media links configuration
const socialLinks: SocialLink[] = [
    { href: 'https://www.instagram.com/robrichusa/', ariaLabel: 'Instagram', iconSrc: InstagramIcon, altText: 'Instagram' },
    { href: 'https://www.youtube.com/@RobRichUSA', ariaLabel: 'Youtube', iconSrc: YouTubeIcon, altText: 'YouTube' },
    { href: 'https://www.facebook.com/RobRichUSA', ariaLabel: 'Facebook', iconSrc: FacebookIcon, altText: 'Facebook' },
    { href: 'https://www.tiktok.com/@robrichusa', ariaLabel: 'TikTok', iconSrc: TikTokIcon, altText: 'TikTok' },
    { href: 'https://www.threads.net/@robrichusa', ariaLabel: 'Threads', iconSrc: ThreadsIcon, altText: 'Threads' },
    { href: 'https://twitter.com/RobRichUSA', ariaLabel: 'X', iconSrc: XIcon, altText: 'Twitter' },
    { href: 'https://www.robrich.band', ariaLabel: 'Text', iconSrc: TextIcon, altText: 'Official Website' },
    { href: 'https://www.reverbnation.com/robrichusa', ariaLabel: 'Listen', iconSrc: ListenIcon, altText: 'ReverbNation' },
];

// Footer text links configuration
const footerLinks: FooterLink[] = [
    { href: "#text-buttons", label: "HELP" },
    { href: "#text-buttons", label: "RETURNS" },
    { href: "#text-buttons", label: "CREDITS" },
    { href: "#text-buttons", label: "TERMS OF USE" },
    { href: "#text-buttons", label: "PRIVACY POLICY" },
    { href: "#", label: "© ROB RICH", disabled: true },
    { href: "#", label: "© UNCROSSED RECORDINGS", disabled: true },
    { href: "#", label: "THE RICH ROBBERS CLUB®", disabled: true },
];

const FooterBottom = () => {
    return (
        <BottomFooterWrapper>
                {/* Social Media Icons Container */}
                <BottomIconsContainer>
            {socialLinks.map((link, index) => (
            <BottomIconLink
                key={index}
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
            >
                <BottomIcons src={link.iconSrc} alt={link.altText} loading="lazy"/>
            </BottomIconLink>
            ))}
        </BottomIconsContainer>

            {/* Text Links Container  */}
            <BottomLinksContainer>
            <FooterStack>
                {footerLinks.map((link, index) => (
                    <BottomFooterLinks
                    key={index}
                    href={!link.disabled ? link.href : undefined} // Conditionally render href
                    aria-disabled={link.disabled}                // Set aria-disabled for disabled links
                    style={{ cursor: link.disabled ? 'not-allowed' : 'pointer' }} // Visual cue for disabled state
                    >
                    {link.label}
                    </BottomFooterLinks>
                ))}
            </FooterStack>
            </BottomLinksContainer>
        </BottomFooterWrapper>
    );
}
export default FooterBottom;