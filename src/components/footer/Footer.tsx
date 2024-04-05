import FooterBottom from "./FooterBottom";
import FooterMiddle from "./FooterMiddle";
import FooterTop from "./FooterTop";
import {Container} from '@mui/material';
import { FooterWrapper } from "./footer.styles";


const Footer = () => {
    return (
        <Container style={FooterWrapper} maxWidth={'xl'} disableGutters={true}>
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </Container>
    );
}

export default Footer;