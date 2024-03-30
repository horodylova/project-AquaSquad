import styled from 'styled-components';

import bg_main_page from '../../Images/main-bg/back_desktop@1x.png';
import bg_tabl from '../../Images/main-bg/back_tablet@1.png';
import bg_desk from '../../Images/main-bg/back_desktop@1.png';
import bg_el from '../../Images/main-bg/back_desktop@2.png';

export const Container = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    padding: 109px 80px 0 86px;
  }
`;

export const WelcomeLayout = styled.section`
  min-height: 100vh;

  background-image: url(${bg_main_page});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${bg_tabl});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bg_desk}), url(${bg_el});
    background-blend-mode: multiply;
  }
`;