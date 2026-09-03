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
  left: 0;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  height: 30rem;
  z-index: 1000;
  box-sizing: border-box;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};

  /* Drop in directly below the header instead of from the top of the
     viewport — these match AppBar's own responsive heights in
     header.styles.ts, so the submenu's top edge always lines up with
     the header's bottom edge instead of overlapping the hero below it. */
  @media (max-width: 480px) {
    top: 8rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    top: 10rem;
  }
  @media (min-width: 769px) and (max-width: 992px) {
    top: 12rem;
  }
  @media (min-width: 993px) {
    top: 14rem;
  }
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
