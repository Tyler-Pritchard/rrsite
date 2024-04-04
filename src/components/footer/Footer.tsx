import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import {BottomNavigation, Container} from '@mui/material';
import { FooterWrapper } from "./footer.styles";


const Footer = () => {
    return (
        <BottomNavigation style={FooterWrapper} showLabels>
            <FooterMiddle />
            <FooterBottom />
        </BottomNavigation>
    );
}

export default Footer;