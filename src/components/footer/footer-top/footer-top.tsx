import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store_index';
import { AppDispatch } from '../../../store/store_index';
import { getUserCount } from '../../../slices/userSlice';
import { TopFooterBody, TopFooterBrow, TopFooterWrapper, TopFooterCta, TopFooterButton, TopFooterCounter, TopFooterLink } from "./footer-top.styles";

const FooterTop = () => {

    const dispatch: AppDispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const totalUsers = useSelector<RootState, number>((state) => state.user.totalUsers);
    const isLoggedIn = useSelector<RootState, boolean>((state) => state.user.isLoggedIn);
  
    useEffect(() => {
        dispatch(getUserCount()).then(() => setLoading(false));
    }, [dispatch]);
    
    return loading ? <p>Loading...</p> : (
        <TopFooterWrapper>
            <TopFooterBody>
                <TopFooterBrow>
                    <TopFooterCounter>{totalUsers} STRONG AND COUNTING</TopFooterCounter>
                </TopFooterBrow>
                {isLoggedIn ? (
                    <>
                    <h2>WELCOME BACK, FAM!</h2>
                    <br/>
                    <h4>COMING SOON: Interactive map, exclusive content, and more!</h4>
                    </>
                ) : (
                    <>
                        <h2>JOIN MY FREE FAN CLUB</h2>
                        <br/>
                        <h4>GET ACCESS TO EXCLUSIVE CONTENT, FEATURES AND UPDATES</h4>
                        <TopFooterCta>
                            <TopFooterLink href='/register'>
                                <TopFooterButton>
                                    SIGN UP TODAY
                                </TopFooterButton>
                            </TopFooterLink>
                        </TopFooterCta>
                    </>
                )}
            </TopFooterBody>
        </TopFooterWrapper>
    )
}

export default FooterTop;
