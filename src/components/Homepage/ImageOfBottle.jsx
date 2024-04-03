import { ImgTumb } from '../../pages/HomePage/HomePage.styled';
import bottleMobile from '../../Images/main-bg/Bottle-Main-sm.png';
import bottleTablet from '../../Images/main-bg/Bottle-Main-md.png';
import bottleDesktop from '../../Images/main-bg/Bottle-Main-lg.png';

export const ImageOfBottle = () => {
  return (
    <ImgTumb>
      <img
        src={bottleMobile}
        srcSet={`
          ${bottleMobile} 320w,
          ${bottleTablet} 768w,
          ${bottleDesktop} 1400w
        `.trim()}
        sizes="(min-width: 1441px) 1440px,
              (min-width: 769px) 768px,
              (max-width: 320px) 100vw
"
        alt="bottle"
      />
    </ImgTumb>
  );
};