//TO DO: Refactor exports/attributes
import CSS from 'csstype';
import Metal from "../../assets/images/desktop/savage.svg";


// FOOTER STYLES
export const FooterWrapper: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: 'black',
};

// FOOTER TOP STYLES
export const TopFooterWrapper: CSS.Properties = {
    height: '30rem',
    width: '100%',
    backgroundImage: `url(${Metal})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

export const TopFooterBody: CSS.Properties = {
    color: 'white',
    height: '15rem',
    width: '30rem',
    float: 'right',
    marginTop: '9rem',
    marginRight: '4rem',
};

export const TopFooterBrow: CSS.Properties = {
    float: 'left',
};

export const TopFooterCounter: CSS.Properties = {
    float: 'left',
};

export const TopFooterCta: CSS.Properties = {
    float: 'left',
};

export const TopFooterButton: CSS.Properties = {
    color: 'white',
    float: 'left',
    border: '2px solid white',
};


// FOOTER MIDDLE STYLES
export const MiddleFooterWrapper: CSS.Properties = {
    height: '23rem',
    backgroundColor: 'rgb(0, 0, 0)',
};

export const MiddleInner: CSS.Properties = {

};

export const MiddleLogo: CSS.Properties = {
    width: '30%',
};

export const MiddleMenu: CSS.Properties = {
};


// FOOTER BOTTOM STYLES
export const BottomFooterWrapper: CSS.Properties = {
    justifyContent: 'center',
    height: "15rem",
    backgroundColor: 'rgb(0, 0, 0)',
    paddingTop: '4rem',
};

export const BottomFooterDivider: CSS.Properties = {
    height: '10px',
    color: 'white',
}

export const BottomIconsContainer: CSS.Properties = {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingLeft: '25%',
    paddingRight: '25%',
}

export const BottomIcons: CSS.Properties = {
    width: '2rem',
    height: '2rem',
    color: 'white'
}

export const BottomLinksContainer: CSS.Properties = {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '15%',
    paddingRight: '15%',
}

export const BottomFooterLinks: CSS.Properties = {
    fontSize: 'x-small',
    color: 'white',
    // TO DO: add underline on hover to active links
}