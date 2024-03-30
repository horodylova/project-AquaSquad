import styled from 'styled-components';

// кнопка Sign Up
export const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 30px;
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 10px;

  background: var(--Primery-Color-Blue, #407bff);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: white;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  ${(props) => (props.disabled ? `cursor: default;` : '')}

  @media (min-width: 768px) {
    padding: 10px 30px;
  }
`;

export const InputFild = styled.input`
  color: ${(props) => (props.$errors ? 'red' : '#9ebbff')};

  outline: none;

  border: 2px solid #d7e3ff;
  border-radius: 6px;
  padding: 12px 10px;
  ${({ $errors }) => ($errors ? `border: 1px solid #EF5050;` : '')}
`;

export const Label = styled.label`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: #2f2f2f;

  ::placeholder {
    color: #9ebbff;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1440px) {
    width: 384px;
  }
`;

// export const ExampleMobContainer = styled.div`
//   margin: 0px auto;
//   padding-right: 20px;
//   padding-left: 20px;

//   @media (min-width: 768px) {
//     width: 768px;
//     padding-right: 32px;
//     padding-left: 32px;
//   }

//   @media (min-width: 1440px) {
//     width: 1440px;
//     padding-right: 120px;
//     padding-left: 120px;
//   }
// `;

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (min-width: 768px) {
    align-items: start;
  }

  @media (min-width: 1440px) {
    align-items: end;
  }
`;

export const MainTitle = styled.h1`
  color: #2f2f2f;
  margin-bottom: 16px;
`;

export const SignInLin = styled.a`
  color: #407bff;
  line-height: 20px;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
`;

export const BottleImg = styled.div`
  width: 280px;
  height: 210px;

  background-image: image-set(
    url('../../../src/Images/signIn-signUp/bottle/mobile/bottle_mobile@1x.png')
      1x,
    url('../../../src/Images/signIn-signUp/bottle/mobile/bottle_mobile@2x.png')
      2x
  );
  background-size: 280px 210px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
