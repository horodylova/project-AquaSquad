import styled from 'styled-components';


export const UserLogoContainer = styled.div`
  position: relative;
`;

export const UserLogoBtn = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
`;


export const UserName = styled.div`
  margin-right: 8px;
  font-size: 16px;
`;


export const UserLogoIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: #407BFF;
`;

export const HeaderIcon = styled.svg`
  margin-left: 8px;
  width: 28px;
  height: 28px;
  fill: #ffffff; //change to global const
  stroke: #2F2F2F; //change to global const
`;
