import CSS from 'csstype';

const FooterWrapper: CSS.Properties = {
    backgroundColor: 'rgb(0, 0, 0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
};

const FooterDivider: CSS.Properties = {
    margin: '1rem',
}

const IconsContainer: CSS.Properties = {
    marginLeft: '25%',
    marginRight: '20%',
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
}

const Icons: CSS.Properties = {
    width: '4rem',
    height: '4rem'
}

const LinksContainer: CSS.Properties = {
    flexDirection: 'row',
    width: '80%',
}

const FooterLinks: CSS.Properties = {
    fontSize: 'x-small',
    color: 'white',
    // TO DO: add underline on hover to active links
}

export {FooterWrapper, IconsContainer, LinksContainer, FooterDivider, FooterLinks, Icons};