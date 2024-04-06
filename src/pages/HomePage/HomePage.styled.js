import styled from 'styled-components';
import backDesktop1x from '../../Images/main-bg/back_desktop@1x.png';
import backDesktop2x from  '../../Images/main-bg/back_desktop@2x.png';

import backTablet1x from '../../Images/main-bg/back_tablet@1x.png';
import backTablet2x from '../../Images/main-bg/back_tablet@2x.png';

import backMobile1x from '../../Images/main-bg/back_mobile@1x.png';
import backMobile2x from '../../Images/main-bg/back_mobile@2x.png';

export const BackGroundContainer = styled.section`
 width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  

  padding: 84px 0 50px 0;

  margin: 0 auto;
  padding: 88px 0 40px 0;

  @media (max-width: 767px) {
    background-image: image-set(
        url(${backMobile1x}) 1x,
        url(${backMobile2x}) 2x
      );
  }

  @media (min-width: 768px) {
    background-image: image-set(
        url(${backTablet1x}) 1x,
        url(${backTablet2x}) 2x
      );
  }

  @media (min-width: 1440px) {
    background-image: image-set(
        url(${backDesktop1x}) 1x,
        url(${backDesktop2x}) 2x
      );
    padding: 144px 0 0 0;
  }
  `