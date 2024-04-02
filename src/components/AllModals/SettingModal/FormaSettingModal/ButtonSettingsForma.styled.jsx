import styled from 'styled-components';


export const ButtonSettingsForma = styled.button`
width: 256px;
margin-left: auto;
display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  padding: 8px 30px;

  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: #9ebbff;
    cursor: not-allowed;
  }
  @media screen and (min-width: 768px) {
    // width:  100% ;
    width: 160px;
    font-size: 18px;
    line-height: calc(24 / 18);
    padding: 10px 30px;
  }
`;
 