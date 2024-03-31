import styled from 'styled-components';
import { Link } from 'react-router-dom';

// кнопка Sign Up
export const Input = styled.input`
  font-family: 'roboto', sans-serif;
  font-weight: var(--medium);
  font-size: 16px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 30px;
  margin-bottom: 16px;
  width: 100%;

  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: var(--primary-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: white;
  ${(props) => (props.disabled ? `cursor: default;` : '')}

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    padding: 10px 30px;
  }
`;

export const InputFild = styled.input`
  color: ${(props) =>
    props.$errors ? 'var(--red-color)' : 'var(--light-blue-color)'};
  outline: none;
  border: 2px solid var(--light-grey-color);

  border-radius: 6px;
  padding: 12px 10px;
  ${({ $errors }) =>
    $errors ? `border: 1px solid var(--red-color);` : ''}/* margin-top: 8px; */
`;

export const Label = styled.label`
  font-family: 'roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;

  display: flex;
  gap: 8px;
  flex-direction: column;
  color: var(--primary-txt-color);
  ::placeholder {
    color: ${(props) =>
      props.$errors ? 'var(--red-color)' : 'var(--light-blue-color)'};
  }
  /* position: relative; */
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  /* min-height: 304px; */
  gap: 16px;
  /* padding-bottom: 66px; */
  /* padding-top: 24px; */

  @media (min-width: 768px) {
    /* padding-top: 24px; */
    min-width: 336px;
  }

  @media (min-width: 1440px) {
    /* padding-top: 140px; */
    min-width: 384px;
    min-height: 500px;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  min-width: 280px;
  background-size: contain;

  /* min-height: 304px; */

  @media (min-width: 768px) {
    position: relative;
    align-items: start;
    flex-direction: row;
    background-repeat: no-repeat;
    background-position: 100px center;

    /* width: 736px; */
    background-image: image-set(
      url('../../../src/Images/signIn-signUp/bottle/tablet/bottle_tablet@1x.png')
        1x,
      url('../../../src/Images/signIn-signUp/bottle/tablet/bottle_tablet@2x.png')
        2x
    );
  }

  @media (min-width: 1440px) {
    align-items: end;
    flex-direction: column;
    background-position: -50px center;
    background-image: image-set(
      url('../../../src/Images/signIn-signUp/bottle/desktop/bottle_desktop@1x.png')
        1x,
      url('../../../src/Images/signIn-signUp/bottle/desktop/bottle_desktop@2x.png')
        2x
    );
  }
`;

export const MainTitle = styled.h1`
  font-family: 'robot', sans-serif;
  font-size: 26px;
  font-weight: var(--medium);
  line-height: 32px;

  color: var(--primary-txt-color);
  margin-bottom: 0;
`;

export const SignInLin = styled(Link)`
  color: var(--primary-color);
  line-height: 20px;
  font-size: 16px;
  font-family: 'roboto', sans-serif;
  font-weight: 400;
`;

export const BottleImg = styled.div`
  width: 280px;
  height: 210px;

  background-size: 280px 210px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  background-image: image-set(
    url('../../../src/Images/signIn-signUp/bottle/mobile/bottle_mobile@1x.png')
      1x,
    url('../../../src/Images/signIn-signUp/bottle/mobile/bottle_mobile@2x.png')
      2x
  );
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SectionAuth = styled.section`
  /* width: 100vw; */
  width: 100%;
  height: fit-content;

  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  background-image: image-set(
    url('../../../src/Images/signIn-signUp/back/mobile/back_mobile@1x.png') 1x,
    url('../../../src/Images/signIn-signUp/back/mobile/back_mobile@2x.png') 2x
  );

  @media (min-width: 768px) {
    background-image: image-set(
      url('../../../src/Images/signIn-signUp/back/tablet/back_tablet@1x.png') 1x,
      url('../../../src/Images/signIn-signUp/back/tablet/back_tablet@2x.png') 2x
    );
  }

  @media (min-width: 1440px) {
    background-image: image-set(
      url('../../../src/Images/signIn-signUp/back/desktop/back_desktop@1x.png')
        1x,
      url('../../../src/Images/signIn-signUp/back/desktop/back_desktop@2x.png')
        2x
    );
  }
`;

export const EyeSvg = styled.svg`
  position: absolute;
  right: 10px;
  top: -40px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  /* background-color: red; */
`;
