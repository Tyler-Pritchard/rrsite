import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ReactComponent as TikTokIcon } from '../../assets/icons/tiktok.svg';
import { ReactComponent as ThreadsIcon } from '../../assets/icons/threads.svg';

const Footer = () => {
    return (
        <BottomNavigation
        showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //     setValue(newValue);
        // }}
        >
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
            <BottomNavigationAction label="Youtube" icon={<YouTubeIcon />} />
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
            <BottomNavigationAction label="TikTok" icon={<TikTokIcon />} />
            <BottomNavigationAction label="Threads" icon={<ThreadsIcon />} />
            <BottomNavigationAction label="X" icon={<XIcon />} />
        </BottomNavigation>
    );
}
export default Footer;