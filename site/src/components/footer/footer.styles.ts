import CSS from 'csstype';

const FooterWrapper: CSS.Properties = {
    backgroundColor: 'rgb(0, 0, 0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    // border: '2px solid red',
};

const FooterDivider: CSS.Properties = {
    margin: '1rem',
    opacity: '0.8',
    color: 'white'
}

const IconsContainer: CSS.Properties = {
    marginLeft: '25%',
    marginRight: '20%',
    width: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    // border: '2px solid blue'
}

const Icons: CSS.Properties = {
    width: '1%',
    height: '1%'
}

const LinksContainer: CSS.Properties = {
    flexDirection: 'row',
    width: '80%',
    // border: '2px solid green',
}

export {FooterWrapper, IconsContainer, LinksContainer, FooterDivider, Icons};