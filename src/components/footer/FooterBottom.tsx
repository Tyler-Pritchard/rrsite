import {BottomNavigationAction, Container, Divider, Button, Stack} from '@mui/material';
import {
    BottomFooterWrapper, BottomFooterDivider, BottomIconsContainer, BottomLinksContainer, BottomIcons, BottomFooterLinks
} from "./footer.styles";
import {ReactComponent as XIcon} from '../../assets/icons/x.svg';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg';
import {ReactComponent as YouTubeIcon} from '../../assets/icons/youtube.svg';
import {ReactComponent as InstagramIcon} from '../../assets/icons/instagram.svg';
import { ReactComponent as TikTokIcon } from '../../assets/icons/tiktok.svg';
import { ReactComponent as ThreadsIcon } from '../../assets/icons/threads.svg';
import { ReactComponent as TextIcon } from '../../assets/icons/text.svg';
import { ReactComponent as ListenIcon } from '../../assets/icons/listen.svg';

const FooterBottom = () => {
    return (
        <Container style={BottomFooterWrapper}>
            {/* Social Media Icons Container */}
            <Container style={BottomIconsContainer} disableGutters={true} maxWidth={false}>
                <BottomNavigationAction href="https://www.instagram.com/robrichusa/" style={BottomIcons} label="Instagram" icon={<InstagramIcon />} />
                <BottomNavigationAction href="https://www.youtube.com/@RobRichUSA" style={BottomIcons} label="Youtube" icon={<YouTubeIcon />} />
                <BottomNavigationAction href="https://www.facebook.com/RobRichUSA" style={BottomIcons} label="Facebook" icon={<FacebookIcon />} />
                <BottomNavigationAction href="https://www.tiktok.com/@robrichusa" style={BottomIcons} label="TikTok" icon={<TikTokIcon />} />
                <BottomNavigationAction href="https://www.threads.net/@robrichusa" style={BottomIcons} label="Threads" icon={<ThreadsIcon />} />
                <BottomNavigationAction href="https://twitter.com/RobRichUSA" style={BottomIcons} label="X" icon={<XIcon />} />
                <BottomNavigationAction style={BottomIcons} label="Text" icon={<TextIcon />} />
                <BottomNavigationAction style={BottomIcons} label="Listen" icon={<ListenIcon />} />
            </Container>

            <Divider variant='fullWidth' style={BottomFooterDivider} aria-hidden="true" />

            {/* Text Links Container  */}
            <Container style={BottomLinksContainer} maxWidth={false} disableGutters={true}>
                <Stack direction="row" spacing={2}>
                    <Button href="#text-buttons" style={BottomFooterLinks}>HELP</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={BottomFooterDivider} />
                    <Button href="#text-buttons" style={BottomFooterLinks}>RETURNS</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={BottomFooterDivider} />
                    <Button href="#text-buttons" style={BottomFooterLinks}>CREDITS</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={BottomFooterDivider} />
                    <Button href="#text-buttons" style={BottomFooterLinks}>TERMS OF USE</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={BottomFooterDivider} />
                    <Button href="#text-buttons" style={BottomFooterLinks}>PRIVACY POLICY</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem />
                    <Button disabled style={BottomFooterLinks}>© ROB RICH</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={BottomFooterDivider} />
                    <Button disabled style={BottomFooterLinks}>© UNCROSSED RECORDINGS</Button>
                    <Divider sx={{ opacity: 0.6 }} orientation="vertical" variant="middle" flexItem style={BottomFooterDivider} />
                    <Button disabled style={BottomFooterLinks}>THE ROB RICH CLUB®</Button>
                </Stack>
            </Container>
        </Container>
    );
}
export default FooterBottom;