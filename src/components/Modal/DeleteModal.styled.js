import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ReactModalStyled = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 40px);
  padding: 32px 24px;
  border-radius: 10px;
  background-color: var(--white-color);
  color: var(--primary-txt-color);
  line-height: 1.1;
    box-sizing: border-box;
  overflow-y: auto;

  @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 592px;
  }
`;

export const Title = styled.h2`
    font-size: 26px;
  line-height: 1.25;
  margin-bottom: 24px;
`;

export const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SecondTitleModal = styled.h3`
  font-size: 18px;
  line-height: 1.11;
  margin-bottom: 24px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }

  /* @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: flex-start;
  } */
`;

export const ButtonRed = styled.button`
  width: 100%;
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  background-color: var(--red-color);
  color: var(--white-color);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
//   transition: box-shadow var(--animationCubicBezier); виправити

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const ButtonCancel = styled.button`
  width: 100%;
  padding: 8px 30px;
  border-radius: 10px;
  border: none;
  background-color: var(--light-grey-color);
  color: var(--primary-color);

  transition: box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;