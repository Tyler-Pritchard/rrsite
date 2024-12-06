import React from 'react';
import {MiddleFooterWrapper, MiddleInner, MiddleMenu} from './footer-middle.styles';
import StandingGuitarJPG from "../../../assets/images/desktop/StandingGuitar.png";
import StandingGuitarWEBP from "../../../assets/images/desktop/StandingGuitar.webp";
import StandingGuitarAVIF from "../../../assets/images/desktop/StandingGuitar.avif";

const FooterMiddle = () => {
    return (
        <MiddleFooterWrapper>
            <MiddleInner >
                <picture>
                    {/* Provide AVIF and WebP as modern formats */}
                    <source srcSet={StandingGuitarAVIF} type="image/avif" />
                    <source srcSet={StandingGuitarWEBP} type="image/webp" />
                    {/* Fallback to JPG/PNG for older browsers */}
                    <img src={StandingGuitarJPG} alt="Rob Rich text logo" loading="lazy" />
                </picture>
            </MiddleInner>
            <MiddleMenu>
                {/* Menu */}
            </MiddleMenu>
        </MiddleFooterWrapper>
    )
};

export default FooterMiddle;