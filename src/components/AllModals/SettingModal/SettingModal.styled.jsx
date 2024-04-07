import styled from 'styled-components';
// import { Input } from './Input.styled';


export const ContainerSettings = styled.div`
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translate(-50%);

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
    top: 50%;
    transform: translate(-50%, -50%);
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
    background-color: #D7E3FF;
  }
`;

export const WrapperUpload = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  img {
    border-radius: 100%;
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    color: #D7E3FF;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: calc(18 / 14);
    stroke: #D7E3FF;
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
    stroke: #407BFF;
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    right: 24px;
  }
`;



export const TitlePart = styled.h3`
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
  line-height: 20px;
  color: #2F2F2F;
  margin-bottom: 8px;

`;

export const Title = styled.h2`
  font-size: 26px;
  font-family: Roboto;
  line-height: 32px;
  font-weight: 500;
  margin-bottom: 24px;
  color: #2F2F2F;
`;








