import styled from "styled-components";
//Interfaces
interface NavigationProps {
  clicked: boolean;
}
//styles
const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: justify;
  width: 100%;
`;
const ItemLink = styled.a`
  display: inline-block;
  font-weight: 300;
  text-decoration: none;
  color: white;
  padding: 1rem 2rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: black;
    transform: translateX(1rem);
  }
`;
const NavigationWrapper = styled.nav<NavigationProps>`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(NavigationProps) => (NavigationProps.clicked ? "100%" : "0")};
  opacity: ${(NavigationProps) => (NavigationProps.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;
export { List, ItemLink, NavigationWrapper };
