import { styled } from 'styled-components';

export const LogoutModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 24px;
  border-radius: 10px;
  background: #ffffff;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: 592px;
  }
`;

export const HoverCloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 4px;
  border-radius: 100%;
  transition: background-color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover {
    background-color: #d7e3ff;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 36px;
  right: 12px;
  height: 24px;

  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 0px;
  svg {
    stroke: #407bff;
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    right: 24px;
  }
`;

export const DivOfHeadingOfLogOutModal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 232px;
  @media screen and (min-width: 768px) {
    width: 544px;
  }
`;

export const HeadingOfLogOutModal = styled.p`
  width: 200px;
  color: #2f2f2f;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  font-family: Roboto;
  margin: 0;
  width: 96px;
  @media screen and (min-width: 768px) {
    width: 384px;
  }
`;

export const BtnOfCloseOfLogOutModal = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: none;
  border: none;
`;
export const ParagraphOfExit = styled.p`
  width: 232px;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    width: 338px;
    display: flex;
    justify-content: flex-start;
  }
`;
export const BtnOfExit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: transparent;
  background: #ef5050;
  color: #ffffff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease,
    width 0.3s ease;
  width: 232px;
  height: 36px;
  padding: 8px 30px;
  &:not(:first-child) {
    margin-bottom: 24px;
  }
  &:not(:last-child) {
    background-color: #ef5050;
    color: #ffffff;
  }
  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(64, 123, 255, 0.5);
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
    padding: 10px 30px;
    &:not(:last-child) {
      margin-right: 24px;
      margin-bottom: 0;
    }
    &:not(:first-child) {
      margin-bottom: 0;
    }
  }
`;
export const BtnOfCancelModalLogOut = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: transparent;
  background: #d7e3ff;
  color: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease,
    width 0.3s ease;
  width: 232px;
  height: 36px;
  padding: 8px 30px;

  &:hover {
    box-shadow: 0px 8px 16px 0px rgba(64, 123, 255, 0.5);
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
    padding: 10px 30px;
  }
`;
export const DivOfBtns = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-start;
  }
`;
