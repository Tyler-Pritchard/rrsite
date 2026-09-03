import styled from 'styled-components';
import { colors, GlobalVariables } from '../../../globalStyles';
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
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  height: 30rem;
  z-index: 1000;
  box-sizing: border-box;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
`;

export const SubmenuItem = styled.li.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'backgroundImage'
})<SubmenuItemProps>`
  display: flex;
  position: relative;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
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
    margin-top: 3rem;
    position: relative;
    z-index: 1;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.85);
  }
`;

export const SubmenuItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  font-family: ${GlobalVariables.paragraphFont};
`;

export const SubmenuLink = styled.a`
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.highlight};
    text-decoration: underline;
  }
`;
