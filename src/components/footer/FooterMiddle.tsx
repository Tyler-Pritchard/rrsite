import React from 'react';
import {Container} from '@mui/material';
import {MiddleFooterWrapper, MiddleInner, MiddleMenu} from './footer.styles';
import Logo from "../../assets/images/desktop/StandingGuitar.png";
import { MiddleLogo } from './footer.styles';

const FooterMiddle = () => {
    return (
        <Container style={MiddleFooterWrapper} disableGutters={true} maxWidth={false}>
            <Container style={MiddleInner} >
                <img src={Logo} alt="Rob Rich text logo" style={MiddleLogo} />
            </Container>
            <Container style={MiddleMenu}>
                {/* Menu */}
            </Container>
        </Container>
    )
};

export default FooterMiddle;