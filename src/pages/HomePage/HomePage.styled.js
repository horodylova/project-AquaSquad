import styled from 'styled-components';
import backDesktop1x from '../../Images/main-bg/back_desktop@1x.png';
import backDesktop2x from '../../Images/main-bg/back_desktop@2x.png';

import backTablet1x from '../../Images/main-bg/back_tablet@1x.png';
import backTablet2x from '../../Images/main-bg/back_tablet@2x.png';

import backMobile1x from '../../Images/main-bg/back_mobile@1x.png';
import backMobile2x from '../../Images/main-bg/back_mobile@2x.png';




export const BackGroundContainer = styled.section`
position: relative;
background-color: var(--white-color);
background-size: cover;
position: relative;
background-position: 0% -5%;
background-repeat: no-repeat;
height: 100%;
z-index: 0;
 
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
    background-size: cover;
    background-position: 0% 0%;
    background-repeat: no-repeat;

  }

  @media (min-width: 1440px) {
    background-image: image-set(
      url(${backDesktop1x}) 1x,
      url(${backDesktop2x}) 2x
    );
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    
  }
`;

export const ContentWrapper = styled.div`
@media (min-width: 1440px) {
  display: flex;
  gap: 32px;
}

@media only screen and (max-width: 1439px) {
  padding-bottom: 40px;
}

`;

export const LeftSideContainer = styled.div`

@media (min-width: 1440px){
  padding-bottom: 76px;
  width:592px;
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