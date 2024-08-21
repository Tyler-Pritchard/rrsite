import React from 'react';
import FooterBottom from "./footer-bottom/footer-bottom";
import FooterMiddle from "./footer-middle/footer-middle";
import FooterTop from "./footer-top/footer-top";
import { FooterWrapper } from "./footer.styles";


const Footer = () => {
    return (
        <FooterWrapper>
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </FooterWrapper>
    );
}

export default Footer;