import styled from 'styled-components';

export const ContainerSettings = styled.div`
  color: black;
  background-color: white;
  width: 280px;
  padding: 32px 12px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: 1008px;
  }
`;

export const HoverCloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  &:hover {
    background-color: #d7e3ff;
  }
`;

export const WrapperUpload = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;

  img {
    border-radius: 100%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    color: #d7e3ff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: calc(18 / 14);
    stroke: #d7e3ff;
    fill: none;
  }
`;

export const ContainerAvatar = styled.div`
  width: 80px;
  height: 80px;
  div {
    width: auto;
    height: 100%;
    background-color: red;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 52px;
    color: white;
    background-color: blue;
  }
`;

export const WrapperForma = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WrapperFormaMain = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const WrapperFormaLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const WrapperFormaRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
`;

export const TitlePart = styled.h3`
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
  line-height: 20px;
  color: #2f2f2f;
`;

export const Title = styled.h2`
  font-size: 26px;
  font-family: Roboto;
  line-height: 32px;
  font-weight: 500;
  margin-bottom: 24px;
  color: #2f2f2f;
`;

export const SettingTitleWrp = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: baseline;

  button {
    padding: 6px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }
`;
