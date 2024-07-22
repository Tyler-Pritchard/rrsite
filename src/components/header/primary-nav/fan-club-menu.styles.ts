import styled from 'styled-components';
import { default as isPropValid } from '@emotion/is-prop-valid';

interface FanClubItemProps {
  backgroundImage: string;
}

export const FanClubWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'show'
})<{ show: boolean }>`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    width: 100%;
    height: 20rem;
`;

export const FanClubItem = styled.li`
    display: flex;
    position: relative;
    list-style: none;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: white;
    overflow: hidden;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        opacity: 0.9;
        z-index: -1;
    }
        
    .content {}
`;
        
export const FanClubItems = styled.ul.withConfig({shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'backgroundImage'})<FanClubItemProps>`
    display: flex;
    background-image: url(${props => props.backgroundImage});
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
`;
    
export const FanClubLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin: 0 2rem;

    &:hover {
        text-decoration: underline;
    }
`;
