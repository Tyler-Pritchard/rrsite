import React from 'react';
import { TopFooterBody, TopFooterBrow, TopFooterWrapper, TopFooterCta, TopFooterButton, TopFooterCounter, TopFooterLink } from "./footer-top.styles";

const FooterTop = () => {
    return (
        <TopFooterWrapper>
            <TopFooterBody>
                <TopFooterBrow>
                    <TopFooterCounter>3 STRONG AND COUNTING</TopFooterCounter>
                </TopFooterBrow>
                <h2>JOIN MY FREE FAN CLUB EVENTUALLY!!</h2>
                <TopFooterCta>
                    <TopFooterLink href='/register'>
                        <TopFooterButton>
                            SIGN UP TODAY
                        </TopFooterButton>
                    </TopFooterLink>
                </TopFooterCta>
            </TopFooterBody>
        </TopFooterWrapper>
    )
}

export default FooterTop;