//TO DO: Refactor exports/attributes
import CSS from 'csstype';


// FOOTER STYLES
export const FooterWrapper: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgb(0, 0, 0)',
    height: 'auto',
}


// FOOTER MIDDLE STYLES
export const MiddleFooterWrapper: CSS.Properties = {
    border: '2px solid blue',
};

export const MiddleInner: CSS.Properties = {

};

export const MiddleMenu: CSS.Properties = {
};


// FOOTER BOTTOM STYLES
export const BottomFooterWrapper: CSS.Properties = {
    border: '2px solid red',
};

export const BottomFooterDivider: CSS.Properties = {
    margin: '.5rem',
}

export const BottomIconsContainer: CSS.Properties = {
    paddingLeft: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    border: '2px solid orange',
}

export const BottomIcons: CSS.Properties = {
    width: '4rem',
    height: '4rem',
    marginLeft: '.1rem',
    marginRight: '.1rem'
}

export const BottomLinksContainer: CSS.Properties = {
    flexDirection: 'row',
    //width: '75%',
    //marginLeft: '15%'
    border: '2px solid yellow',
}

export const BottomFooterLinks: CSS.Properties = {
    fontSize: 'x-small',
    color: 'white',
    // TO DO: add underline on hover to active links
}