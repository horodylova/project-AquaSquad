import styled from 'styled-components';
import { Link } from 'react-router-dom';

import DeskBack1 from '../../Images/signIn-signUp/back/desktop/back_desktop@1x.png';
import DeskBack2 from '../../Images/signIn-signUp/back/desktop/back_desktop@2x.png';

import TableBack1 from '../../Images/signIn-signUp/back/tablet/back_tablet@1x.png';
import TableBack2 from '../../Images/signIn-signUp/back/tablet/back_tablet@2x.png';

import MobileBack1 from '../../Images/signIn-signUp/back/mobile/back_mobile@1x.png';
import MobileBack2 from '../../Images/signIn-signUp/back/mobile/back_mobile@2x.png';



import MobileBottle1 from '../../Images/signIn-signUp/bottle/mobile/bottle_mobile@1x.png';
import MobileBottle2 from '../../Images/signIn-signUp/bottle/mobile/bottle_mobile@2x.png';

import TabletBottle1 from '../../Images/signIn-signUp/bottle/tablet/bottle_tablet@1x.png';
import TabletBottle2 from '../../Images/signIn-signUp/bottle/tablet/bottle_tablet@2x.png';

import DeskBottle1 from '../../Images/signIn-signUp/bottle/desktop/bottle_desktop@1x.png';
import DeskBottle2 from '../../Images/signIn-signUp/bottle/desktop/bottle_desktop@2x.png';



// кнопка Sign Up


export const MessageError = styled.div`
  color: var(--red-color);
  border-color: var(--red-color) !important;
  color: var(--red-color);
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 364px;
  }
`;

export const InputField = styled.input`
border-radius: 6px;
border: 1px solid rgb(215, 227, 255);
min-width: 280px;
font-size: 16px;
padding: 12px 10px;
line-height: 20px;
&::placeholder {
  color: var(--light-blue-color);
}
  color: ${(props) =>
    props.$errors ? 'var(--red-color)' : 'var(--light-blue-color)'};
  outline: none;
  border: 2px solid var(--light-grey-color);

  border-radius: 6px;
  padding: 12px 10px;
  ${({ $errors }) =>
    $errors ? `border: 1px solid var(--red-color);` : ''}/* margin-top: 8px; */

    @media screen and (min-width: 768px) {
      min-width: 336px;
    }
    @media screen and (min-width: 1440px) {
      min-width: 384px;
    }
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const LabelWrapper = styled.div`
font-size: 18px;
line-height: 1.33;
color: rgb(47, 47, 47);
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 8px;
width: 100%;
`;


export const Label = styled.label`
  font-family: 'roboto', sans-serif;
  color: var(--primary-txt-color);
  display: block;
  font-size: 18px;
  line-height: 24px;

`;

export const FormWrapper = styled.div`
@media screen and (min-width: 768px) {
  position: relative;
}

@media screen and (min-width: 1440px) {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
}`;

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 16px;

@media screen and (min-width: 768px) {
  margin-right: auto;
  width: 336px;
  position: absolute;
}

@media screen and (min-width: 1440px) {
  width: 384px;
  padding-top: 113px;
  margin-right: -190px;
}
`;

export const RegisterContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 320px;
  padding-top: 20px;
  // not right, but works

  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 112px;
    padding-right: 112px;
  }
`;

export const MainTitle = styled.h1`
  font-family: 'robot', sans-serif;
  font-size: 26px;
  font-weight: var(--medium);
  line-height: 32px;

  color: var(--primary-txt-color);
`;

export const SignUpButton = styled.button`
color: var(--primary-color);
  line-height: 20px;
  font-size: 16px;
  font-family: 'roboto', sans-serif;
  font-weight: 400;

&:hover {
  box-shadow: 0px 4px 14px 0px #407bff;
}
`;

export const SignInLin = styled.button`
font-family: 'Roboto-Medium';
background-color: var(--primaryBlue);
min-width: 280px;
border-radius: 10px;
border: none;
font-size: 16px;
padding: 8px 30px;
color: var(--primaryWhite);
cursor: pointer;
box-shadow: 0px 4px 8px 0px #407bff;
transition: box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
&:hover {
  box-shadow: 0px 4px 14px 0px #407bff;
}
&:focus {
  /* box-shadow: none; */
}
@media screen and (min-width: 768px) {
  min-width: 336px;
  line-height: 24px;
  font-size: 18px;
}
@media screen and (min-width: 1440px) {
  min-width: 384px;
}
`;


export const BottleImg = styled.div`
background-repeat: no-repeat;
background-size: contain;
min-height: 80vh;
background-position: center bottom;


@media (max-width: 767px) {
  background-image: image-set(
    url(${MobileBottle1}) 1x,
    url(${MobileBottle2}) 2x
  );
}


@media (min-width: 768px) and (max-width: 1023px) {
  background-image: image-set(
    url(${TabletBottle1}) 1x,
    url(${TabletBottle2}) 2x
  );
  background-position: 80px center;
  width: 736px;
  height: 548px;
}


@media (min-width: 1440px) {
  background-image: image-set(
    url(${DeskBottle1}) 1x,
    url(${DeskBottle2}) 2x
  );
  margin-top: 0;
  background-position: -65px center;
  width: 916px;
  min-height: 680px;
}
`;

export const SectionAuth = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 767px) {
    background-image: image-set(
      url(${MobileBack1}) 1x,
      url(${MobileBack2}) 2x
    );
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: image-set(
      url(${TableBack1}) 1x,
      url(${TableBack2}) 2x
    );
  }

  @media (min-width: 1024px) {
    background-image: image-set(
      url(${DeskBack1}) 1x,
      url(${DeskBack2}) 2x
    );
  }
`;

export const EyeSvg = styled.svg`
cursor: pointer;
stroke: var(--primaryBlue);
position: absolute;
right: 10px;
top: 40%;
transform: translateY(-50%);
fill: none;
width: 16px;
height: 16px;
margin-top: 5px;
`;
