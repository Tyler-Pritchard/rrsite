import {BottomNavigation, BottomNavigationAction, Container, Divider, Button, Stack} from '@mui/material';
import {FooterWrapper, FooterDivider, IconsContainer, LinksContainer, Icons, FooterLinks} from "./footer.styles";
import {ReactComponent as XIcon} from '../../assets/icons/x.svg';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg';
import {ReactComponent as YouTubeIcon} from '../../assets/icons/youtube.svg';
import {ReactComponent as InstagramIcon} from '../../assets/icons/instagram.svg';
import { ReactComponent as TikTokIcon } from '../../assets/icons/tiktok.svg';
import { ReactComponent as ThreadsIcon } from '../../assets/icons/threads.svg';
import { ReactComponent as TextIcon } from '../../assets/icons/text.svg';
import { ReactComponent as ListenIcon } from '../../assets/icons/listen.svg';

//TO DO:
// -Add links 
// -Break footer into menu and icon components

const Footer = () => {
    return (
        <BottomNavigation style={FooterWrapper}
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
        >
            {/* Social Media Icons Container */}
            <Container style={IconsContainer} disableGutters={true} maxWidth={false}>
                <BottomNavigationAction style={Icons} label="Instagram" icon={<InstagramIcon />} />
                <BottomNavigationAction style={Icons} label="Youtube" icon={<YouTubeIcon />} />
                <BottomNavigationAction style={Icons} label="Facebook" icon={<FacebookIcon />} />
                <BottomNavigationAction style={Icons} label="TikTok" icon={<TikTokIcon />} />
                <BottomNavigationAction style={Icons} label="Threads" icon={<ThreadsIcon />} />
                <BottomNavigationAction style={Icons} label="X" icon={<XIcon />} />
                <BottomNavigationAction style={Icons} label="Text" icon={<TextIcon />} />
                <BottomNavigationAction style={Icons} label="Listen" icon={<ListenIcon />} />
            </Container>

            <Divider variant='fullWidth' style={FooterDivider} aria-hidden="true" />

            {/* Text Links Container  */}
            <Container style={LinksContainer} maxWidth={false} disableGutters={true}>
                <Stack direction="row" spacing={2}>
                    <Button href="#text-buttons" style={FooterLinks}>HELP</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={FooterDivider} />
                    <Button href="#text-buttons" style={FooterLinks}>RETURNS</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={FooterDivider} />
                    <Button href="#text-buttons" style={FooterLinks}>CREDITS</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={FooterDivider} />
                    <Button href="#text-buttons" style={FooterLinks}>TERMS OF USE</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={FooterDivider} />
                    <Button href="#text-buttons" style={FooterLinks}>PRIVACY POLICY</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem />
                    <Button disabled style={FooterLinks}>© ROB RICH</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={FooterDivider} />
                    <Button disabled style={FooterLinks}>© UNCROSSED RECORDINGS</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={FooterDivider} />
                    <Button disabled style={FooterLinks}>THE ROB RICH CLUB®</Button>
                </Stack>
            </Container>
        </BottomNavigation>
    );
}
export default Footer;