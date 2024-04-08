import styled from 'styled-components';

import Mobile from '../../Images/welcome-page/Mobile.png';
import Tablet from '../../Images/welcome-page/Tablet.png';
import Desktop1 from '../../Images/main-bg/bg_main_page.png';
import Desktop2 from '../../Images/main-bg/bg_el_main_page.png';


export const ContainerWelcome = styled.div`
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

  background-image: url(${Mobile});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${Tablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${Desktop2}), url(${Desktop1});
    background-blend-mode: multiply;
  }
`;