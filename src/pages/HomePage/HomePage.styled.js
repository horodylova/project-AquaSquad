import styled from 'styled-components';
import backDesktop1x from '../../Images/main-bg/back_desktop@1x.png';
import backDesktop2x from '../../Images/main-bg/back_desktop@2x.png';

import backTablet1x from '../../Images/main-bg/back_tablet@1x.png';
import backTablet2x from '../../Images/main-bg/back_tablet@2x.png';

import backMobile1x from '../../Images/main-bg/back_mobile@1x.png';
import backMobile2x from '../../Images/main-bg/back_mobile@2x.png';

import bottleMob1x from '../../Images/home-bottles/Mobile-Bottle-home-screen@1x.png';
import bottleMob2x from '../../Images/home-bottles/Mobile-Bottle-home-screen@2x.png';

import bottleTablet1x from '../../Images/home-bottles/Tablet-Bottle-Home-Screen@1x.png';
import bottleTablet2x from '../../Images/home-bottles/Tablet-Bottle-Home-Screen@2x.png';

import bottleDesk1x from '../../Images/home-bottles/Desk-Botle-Home-screen@1x.png';
import bottleDesk2x from '../../Images/home-bottles/Desk-Botle-Home-screen@2x.png';



export const BackGroundContainer = styled.section`
background-color: var(--white-color);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
 
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
    background-position: top center;

  }

  @media (min-width: 1440px) {
    background-image: image-set(
      url(${backDesktop1x}) 1x,
      url(${backDesktop2x}) 2x
    );
    background-position: top center;
    
  }
`;

export const ContentWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;

@media screen and (min-width: 768px) {
  display: flex;
  padding: 0 32px;
}

@media screen and (min-width: 1440px) {
  overflow: hidden;
  justify-content: center;
  // padding: 30px 112px;
  padding-top: 30px;
  gap: 36px;
  flex-direction: row;
}
`;

export const LeftSideContainer = styled.div`
padding: 32px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
// gap: 232px;

background-position: center;
background-repeat: no-repeat;
background-image: image-set(
  url(${bottleMob1x}) 1x,
  url(${bottleMob2x}) 2x
);

@media screen and (min-width: 768px) {
  margin-top: 0;
  padding: 40px 32px;
  gap: 326px;

  background-position: center;
  background-image: image-set(
    url(${bottleTablet1x}) 1x,
    url(${bottleTablet2x}) 2x
  );
}

@media screen and (min-width: 1440px) {
  padding: 0px;
  gap: 446px;
  background-position: top;
  background-image: image-set(
    url(${bottleDesk1x}) 1x,
    url(${bottleDesk2x}) 2x
  );
}
`;

export const RightSideContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
margin: 32px 0 40px;

padding: 24px 8px;
width: 280px;

border-radius: 10px;
background: var(--light-blue-1);
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

@media screen and (min-width: 768px) {
  padding: 32px 24px;
  margin: 0px;
  margin-bottom: 44px;
  width: 704px;
  height: 688px;
}

@media screen and (min-width: 1440px) {
  width: 592px;
}
`