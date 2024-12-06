import React from 'react';
import {MiddleFooterWrapper, MiddleInner, MiddleMenu} from './footer-middle.styles';
import Logo from "../../../assets/images/desktop/StandingGuitar.webp";
import { MiddleLogo } from './footer-middle.styles';

const FooterMiddle = () => {
    return (
        <MiddleFooterWrapper>
            <MiddleInner >
                <MiddleLogo src={Logo} alt="Rob Rich text logo" loading='lazy'/>
            </MiddleInner>
            <MiddleMenu>
                {/* Menu */}
            </MiddleMenu>
        </MiddleFooterWrapper>
    )
};

export default FooterMiddle;