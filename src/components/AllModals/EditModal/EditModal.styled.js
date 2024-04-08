import styled from 'styled-components';

const Container = styled.div`
  background-color: var(--white-color);
  width: 280px;
  height: 648px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 24px 12px;

  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    gap: 24px;
    padding: 32px 24px;
    width: 704px;
    height: 580px;
  }

  @media (min-width: 1440px) {
    width: 592px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;

  @media (min-width: 768px) {
    justify-content: space-between;
    gap: 248px;
  }

  @media (min-width: 1440px) {
    justify-content: space-between;
    gap: 136px;
  }

  p {
    color: var(--primary-txt-color);

    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 123.077% */
  }
  button {
    width: 24px;
    height: 24px;

    cursor: pointer;
    top: 13px;
    right: 10px;
    background-color: transparent;
    border: 0;
  }
`;

const WaterPortionWrapper = styled.div`
  width: 254px;

  display: flex;
  padding: 8px 24px;
  align-items: center;
  gap: 12px;

  border-radius: 10px;
  background: var(--Secondary-color-2, #ecf2ff);

  .ml {
    width: 60px;

    color: var(--primary-color);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }
  .time {
    width: 82px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 200% */
  }
`;

const EnteredData = styled.div`
  max-width: 194px;

  p {
    color: var(--primary-txt-color);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    line-height: 20px;
  }
  button {
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border-radius: 30px;
    border: 1px solid #9ebbff;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }
  button:focus,
  button:hover {
    outline: 1px solid var(--primary-color);
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    }
  .title {
    font-size: 18px;
    font-weight: 500;
    line-height: 111.111%;
    padding-bottom: 16px;
  }
  .subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 125%;
    padding-bottom: 12px;
  }
  .waterControllers {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
  .ml {
    min-width: 92px;
    height: 36px;
    display: flex;
    padding: 6px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: var(--primary-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */

    border-radius: 40px;
    background: #d7e3ff;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isLarge ? '16px' : '12px')};

  font-size: ${(props) => (props.isLarge ? '18px' : '16px')};
  font-weight: ${(props) => (props.isLarge ? '500' : '400')};
  width: ${(props) => (props.isLarge ? '256' : '182')};
  color: var(--primary-txt-color);
  font-family: Roboto;
  font-style: normal;
  line-height: 20px;

  @media (min-width: 768px) {
    width: ${(props) => (props.isLarge ? '348' : '182')};
  }
`;

const Input = styled.input`
  padding: 12px 10px;

  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  border-radius: 6px;
  border: 1px solid var(--light-grey-color);

  &:focus {
    outline: 1px solid var(--primary-color);
  }
`;

const SaveButtonWrapper = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  p {
    width: 72px;
    color: var(--primary-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 133.333% */
  }

  button {
    width: 256px;

    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: var(--white-color);
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
    outline: none;
    border: 0;

    border-radius: 10px;
    background: var(--primary-color);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }
  button:focus {
    outline: 1px solid var(--primary-color);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;

    margin-left: auto;
  }
`;

const EditModalstyles = {
  Container,
  TitleContainer,
  EnteredData,
  Label,
  Input,
  SaveButtonWrapper,
  WaterPortionWrapper,
};

export default EditModalstyles;
