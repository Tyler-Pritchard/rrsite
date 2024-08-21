import React from 'react';
import { TopFooterBody, TopFooterBrow, TopFooterWrapper, TopFooterCta, TopFooterButton, TopFooterCounter } from "./footer-top.styles";

const FooterTop = () => {
    return (
        <TopFooterWrapper disableGutters={true} maxWidth="1200px">
            <TopFooterBody>
                <TopFooterBrow>
                    <TopFooterCounter>3 STRONG AND COUNTING</TopFooterCounter>
                </TopFooterBrow>
                <h2>JOIN MY FREE FAN CLUB EVENTUALLY!!</h2>
                <TopFooterCta>
                    <TopFooterButton size={"large"} variant={"outlined"}>Sign Up Today</TopFooterButton>
                </TopFooterCta>
            </TopFooterBody>
        </TopFooterWrapper>
    )
}

export default FooterTop;