import {Container} from '@mui/material';
import {MiddleFooterWrapper, MiddleInner, MiddleMenu} from './footer.styles';

const FooterMiddle = () => {
    return (
        <Container style={MiddleFooterWrapper} disableGutters={true} maxWidth={false}>
            <Container style={MiddleInner} >
                {/* Image */}
            </Container>
            <Container style={MiddleMenu}>
                {/* Menu */}
            </Container>

        </Container>
    )
};

export default FooterMiddle;