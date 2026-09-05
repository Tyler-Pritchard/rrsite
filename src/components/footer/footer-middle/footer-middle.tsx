import React from 'react';
import {MiddleFooterWrapper, MiddleInner, MiddleMenu} from './footer-middle.styles';
import StickersJPG from "../../../assets/images/desktop/I_have_stickers.png";
import StickersWEBP from "../../../assets/images/desktop/I_have_stickers.webp";
import StickersAVIF from "../../../assets/images/desktop/I_have_stickers.avif";

const FooterMiddle = () => {
    return (
        <MiddleFooterWrapper>
            <MiddleInner >
                <picture>
                    {/* Provide AVIF and WebP as modern formats */}
                    <source srcSet={StickersAVIF} type="image/avif" />
                    <source srcSet={StickersWEBP} type="image/webp" />
                    {/* Fallback to JPG/PNG for older browsers */}
                    <img src={StickersJPG} alt="I have stickers" loading="lazy" />
                </picture>
                <h3>YOUR DONATIONS PAID FOR THEM. IF YOU SEE ME, PLEASE TAKE ONE :)</h3>
            </MiddleInner>
            <MiddleMenu>
                {/* Menu */}
            </MiddleMenu>
        </MiddleFooterWrapper>
    )
};

export default FooterMiddle;