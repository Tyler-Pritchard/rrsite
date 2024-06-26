import CSS from 'csstype';
import Main from '../../assets/images/desktop/TacomaCrows.png';

export const MainWrapper: CSS.Properties = {
  backgroundImage: `url(${Main})`,
  top: '0',
  width: '100%',
  height: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
};

export const MainTitle: CSS.Properties = {
  marginBottom: '23%',
  marginTop: '17%',
  paddingTop: '4rem',
  color: '#C47E37',
  padding: '3%',
  top: '5%',
  width: '65vw',
  height: '30vh',
  textAlign: 'center',
  backgroundColor: '#FCE4AD',
  opacity: '90%'
};
