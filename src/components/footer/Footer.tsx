import React from 'react';
import FooterBottom from "./footer-bottom/footer-bottom";
import FooterMiddle from "./footer-middle/footer-middle";
import FooterTop from "./footer-top/footer-top";
import { FooterWrapper } from "./footer.styles";


// Define a props interface in case future props are added
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <FooterWrapper>
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </FooterWrapper>
    );
}

export default Footer;