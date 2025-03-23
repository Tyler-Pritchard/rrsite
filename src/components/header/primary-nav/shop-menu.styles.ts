import styled from 'styled-components';
import { colors, GlobalVariables } from '../../../globalStyles';
import { default as isPropValid } from '@emotion/is-prop-valid';

interface ShopItemProps {
  backgroundImage: string;
}

export const ShopWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'show'
})<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30rem;
  z-index: 1000;
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};
`;

export const ShopItem = styled.li`
  display: flex;
  position: relative;
  list-style: none;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  overflow: hidden;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  font-family: ${GlobalVariables.paragraphFont};
  color: ${colors.textPrimary};

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

  .content {
    position: relative;
    z-index: 1;
  }
`;

export const ShopItems = styled.ul.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'backgroundImage'
})<ShopItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  font-family: ${GlobalVariables.paragraphFont};
`;

export const ShopLink = styled.a`
  color: ${colors.textPrimary};
  font-family: ${GlobalVariables.paragraphFont};
  text-decoration: none;
  margin: 0 3rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${colors.highlight};
    text-decoration: underline;
  }
`;
