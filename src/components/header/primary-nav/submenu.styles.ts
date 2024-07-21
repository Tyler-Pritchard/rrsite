import styled from 'styled-components';
import { default as isPropValid } from '@emotion/is-prop-valid';

interface SubmenuItemProps {
  backgroundImage: string;
}

export const SubmenuWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'show'
})<{ show: boolean }>`
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    width: 100%;
    height: 20rem;
    z-index: 1000;
`;

export const SubmenuItem = styled.li.withConfig({ shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'backgroundImage'
})<SubmenuItemProps>`
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
        background-image: url(${props => props.backgroundImage});
        opacity: 0.9;
        z-index: -1;
    }

    .content {
        position: relative;
        z-index: 1;
    }
`;
    
export const SubmenuItems = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
` 
    
export const SubmenuLink = styled.a`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
