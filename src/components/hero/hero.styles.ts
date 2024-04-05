import CSS from 'csstype';
import Hero from '../../assets/images/desktop/pngtree-five-crows-perched-on-a-fence-image_2925450.jpeg';

export const HeroWrapper: CSS.Properties = {
  // position: 'absolute',
  backgroundImage: `url(${Hero})`,
  top: '0',
  width: '100%',
  height: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
};

export const HeroTitle: CSS.Properties = {
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
