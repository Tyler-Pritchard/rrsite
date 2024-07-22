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
  marginTop: '25%',
  color: '#C47E37',
  padding: '3%',
  top: '45%',
  width: '65vw',
  height: '30vh',
  textAlign: 'center',
  backgroundColor: '#FCE4AD',
  opacity: '90%',
  paddingTop: '6rem',
};
