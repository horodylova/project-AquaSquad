import styled from 'styled-components';
import backDesktop1x from '../../Images/main-bg/back_desktop@1x.png';
import backDesktop2x from '../../Images/main-bg/back_desktop@2x.png';

import backTablet1x from '../../Images/main-bg/back_tablet@1x.png';
import backTablet2x from '../../Images/main-bg/back_tablet@2x.png';

import backMobile1x from '../../Images/main-bg/back_mobile@1x.png';
import backMobile2x from '../../Images/main-bg/back_mobile@2x.png';

export const BackGroundContainer = styled.section`
background-color: var(--white-color);
 min-height: 100vh;

 padding-top: 88px;
    padding-bottom: 40px;
 
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
    padding-top: 80px;
  }

  @media (min-width: 1440px) {
    background-image: image-set(
      url(${backDesktop1x}) 1x,
      url(${backDesktop2x}) 2x
    );
    padding-top: 86px;
    
  }
`;

export const ContentWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;

@media screen and (min-width: 1440px) {

  flex-direction: row;
}
}

`;

export const LeftSideContainer = styled.div`
width: 100%;
height: 504px; 
padding-bottom: 40px;

@media screen and (min-width: 768px) and (max-width: 1439px) {
  height: 548px; 
}

@media screen and (min-width: 1440px) {
  height: 680px; 
  width: 624px; 
  padding-right: 32px;  
}
`;

export const RightSideContainer = styled.div`
border-radius: 10px;
background-color% var(--light-grey-color);
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3)
@media screen and (max-width: 767px) {
  padding: 24px 8px;  
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
 
  padding: 32px 24px;
}

@media screen and (min-width: 768px) {
  
  padding: 32px 24px;
}
}`