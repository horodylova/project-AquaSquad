import styled from 'styled-components';
<<<<<<< HEAD
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
=======

export const DeleteModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DeleteModalTitle = styled.h2`
  font-family: 'roboto', sans-serif;
  color: var(--primary-txt-color);
  font-size: 26px;
  font-weight: var(--medium);
  line-height: 32px;
`;

export const DelBtn = styled.button`
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 20px;
  padding: 8px 30px;
  background: var(--red-color);
  border: none;
  color: var(--white-color);
  border-radius: 10px;

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;

export const CancelBtn = styled.button`
  font-size: 16px;
  font-weight: var(--medium);
  line-height: 20px;
  padding: 8px 30px;
  background: var(--light-grey-color);
  border: none;
  color: var(--primary-color);
  border-radius: 10px;

  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;

export const TitleSvgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteModalText = styled.p`
  font-size: 18px;
  font-weight: var(--medium);
  line-height: 20px;
  color: var(--primary-txt-color);
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
>>>>>>> 42d6610 (f)
