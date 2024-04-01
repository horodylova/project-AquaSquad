import styled from 'styled-components';

export const PasswordInputStyled = styled.div`
  position: relative;
  width: 100%;
  button {
    display: flex;
    position: absolute;
    border: none;
    background-color: transparent;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: #407BFF;
    }
  }
`;

export const PasswordInputWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;