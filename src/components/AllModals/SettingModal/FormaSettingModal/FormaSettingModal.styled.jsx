
import styled from 'styled-components';
import { Input } from '../Input.styled';




export const WrapperForma = styled.div`
  display: flex;
  flex-direction: column;
  
  `;

export const WrapperFormaMain = styled.div`

  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
export const WrapperFormaLeft = styled.div`
  display: flex;
  flex-direction: column;
//   gap: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
  `;
  
  export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 24px;
  width: 100%;
  `;
  
  export const WrapperFormaRight = styled.div`
  display: flex;
  flex-direction: column;
//   gap: 12px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 392px;
  }
  `;
  
  export const EyeSvg = styled.svg`
  position: absolute;
  right: 10px;
  top: -40px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  /* background-color: red; */
`;
  
  export const InputSettingEdit = styled(Input)`
  
  opacity: 0.6;
  color: #D7E3FF;
  
  &:focus,
  &:active {
    color: #407BFF;
    opacity: 1;
  }
  `;
  export const WrapperRadio = styled.div`
  display: flex;
  gap: 24px;
margin-bottom: 24px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 52px;
  }
  `;
  export const FormLabelRadio = styled.label`
display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: #2F2F2F;

  div {
       width: 14px;
    height: 14px;
    background-color: transparent;
    border-radius: 100%;
    border: 1px solid blue;
    cursor: pointer;

    transition: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  }
  input:checked + div {
    background-color: blue;
    box-shadow: inset 0 0 0 3px white;
  }
  span {
    cursor: pointer;
}
`;


  export const TitlePart = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
 margin-bottom: 12px;
  `;
  

  // export const InputError = styled.p`
  // //   font-size: 14px;
// //   line-height: calc(18 / 14);
// //   color: #ef5050;
// // `;

export const FormLabel = styled.label`
font-size: 18px;;
  font-weight: 500;
  line-height: 20px;
  color: #2f2f2f;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
  
  label:not(:last-child) {
margin-bottom: 24px;
  }

`;
