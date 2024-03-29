import styled from 'styled-components';

export const ContainerStyles = styled.div`
width: 100%;
margin-left: auto;
margin-right: auto;


  @media screen and (min-width: 320px) {
    max-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 132px;
    padding-right: 132px;

  }
`;