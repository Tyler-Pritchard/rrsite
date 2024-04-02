import LogoWrapper from "./logo.styles";
const logoSvg = require("./logo.svg") as string;
export default function Logo() {
  return <LogoWrapper src={logoSvg}></LogoWrapper>;
}
