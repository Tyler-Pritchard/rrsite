import CSS from 'csstype';
import Main from '../../assets/images/desktop/TacomaCrows.png';

export const MainWrapper: CSS.Properties = {
  // position: 'absolute',
  backgroundImage: `url(${Main})`,
  top: '0',
  width: '100%',
  height: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
};

export const MainTitle: CSS.Properties = {
  marginTop: '30%',
  color: 'white',
  border: '1px solid white',
  padding: '3%',
  top: '5%',
  width: '90vw',
  height: '40vh',
  // h1 {
  //   font-size: '2.8rem',
  // }
};
