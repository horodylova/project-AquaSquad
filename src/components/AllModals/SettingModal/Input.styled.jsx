import styled from 'styled-components';

export const Input = styled.input`
  font-family: inherit;
  font-size: 16px;
  line-height: calc(20 / 16);
  padding: 11px 10px;
  color: #407bff;
  border: 1px solid blue;
  border-radius: 6px;
  width: 100%;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: blue;
  }
  &:not(:placeholder-shown):invalid {
    color: red;
    border-color: red;
  }
`;
