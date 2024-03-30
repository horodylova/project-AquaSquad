import styled from 'styled-components';

import Mobile from '../../Images/welcome-page/Mobile.png';
import Tablet from '../../Images/welcome-page/Tablet.png';
import Desktop from '../../Images/welcome-page/Desktop.png';

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

  background-image: url(${Mobile});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${Tablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${Desktop}), url(${Desktop});
    background-blend-mode: multiply;
  }
`;