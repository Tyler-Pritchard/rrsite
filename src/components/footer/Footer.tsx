import React from 'react';
import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import { FooterWrapper } from "./footer.styles";


const Footer = () => {
    return (
        <FooterWrapper maxWidth="1200px" disableGutters={true}>
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </FooterWrapper>
    );
}

export default Footer;