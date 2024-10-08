import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store_index';
import { AppDispatch } from '../../../store/store_index';
import { getUserCount } from '../../../slices/userSlice';
import { TopFooterBody, TopFooterBrow, TopFooterWrapper, TopFooterCta, TopFooterButton, TopFooterCounter, TopFooterLink } from "./footer-top.styles";

const FooterTop = () => {
    const dispatch: AppDispatch = useDispatch();
    const totalUsers = useSelector<RootState, number>((state) => state.user.totalUsers);
  
    useEffect(() => {
      dispatch(getUserCount());
    }, [dispatch]);
    
    return (
        <TopFooterWrapper>
            <TopFooterBody>
                <TopFooterBrow>
                    <TopFooterCounter>{totalUsers} STRONG AND COUNTING</TopFooterCounter>
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