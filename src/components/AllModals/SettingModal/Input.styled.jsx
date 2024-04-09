import styled from 'styled-components';

export const Input = styled.input`
  font-family: inherit;
  font-size: 16px;
  line-height: calc(20 / 16);
  padding: 11px 10px;
  color: #407bff;
  border-radius: 6px;
  width: 100%;
// color:  #9EBBFF;
color:
${(props) =>
  props.$errors ? '#EF5050' : '#9EBBFF'};
border: 1px solid rgb(215, 227, 255);
  &:focus,
  &:active {
    color: ${(props) =>
  props.$errors ? '#EF5050' : '#407BFF'};
    // color:  #407BFF;
  }
  &::placeholder {
     color: ${(props) =>
  props.$errors ? '#EF5050' : '#9EBBFF'};
   }
  &:focus {
    outline: none;
  }
 
`;
