import React from 'react';
import {MiddleFooterWrapper, MiddleInner, MiddleMenu} from './footer-middle.styles';
import Logo from "../../../assets/images/desktop/StandingGuitar.png";
import { MiddleLogo } from './footer-middle.styles';

const FooterMiddle = () => {
    return (
        <MiddleFooterWrapper disableGutters={true} maxWidth="1200px">
            <MiddleInner >
                <MiddleLogo src={Logo} alt="Rob Rich text logo" />
            </MiddleInner>
            <MiddleMenu>
                {/* Menu */}
            </MiddleMenu>
        </MiddleFooterWrapper>
    )
};

export default FooterMiddle;