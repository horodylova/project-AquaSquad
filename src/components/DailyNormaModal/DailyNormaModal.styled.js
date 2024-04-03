import ReactModal from 'react-modal';
import styled from 'styled-components';

export const StyledReactModal = styled(ReactModal)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: auto;
max-height: 90vh;
overflow-y: auto;
background-color: var(--primaryWhite);
color: var(--primary-txt-color);
padding: 24px 12px;
border-radius: 10px;
font-size: 16px;
line-height: 1.2;
box-sizing: border-box;

@media (min-width: 1440px) {
    width: 592px;
    padding: 32px 24px;
  }

@media (min-width: 768px) and (max-width: 1439px){
    width: 704px;
    padding: 32px 24px;
  }
@media (min-width: 320px) and (max-width: 767px){
    width: 280px;
  }
`;

export const WrapHeader = styled.div`
display: flex;
justify-content: space-between;
`;

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledRadioLabel = styled.label`
  position: relative;
  cursor: pointer;
  margin-right: 24px;
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const StyledRadioCircle = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #007BFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleColor = styled.div`
  background-color: ${(props) => (props.checked ? '#007BFF' : '#fff')};
  width: 6px;
  height: 6px;
  border-radius: 50%;
`;

export const StyledRadioText = styled.span`
  margin-left: 22px;
`;

export const TitleText = styled.div`
font-size: 26px;
line-height: 1.2;
margin-bottom: 24px;
`;

export const WrapFormulaText = styled.div`
display: flex;
gap: 16px;
flex-direction: column;
margin-bottom: 12px;

@media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const FormulaText = styled.span`
color: var(--primary-color);
font-size: 18px;
line-height: 1.2;
`;

export const WrapFormula = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--light-grey-color);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 24px;
`;

export const AboutFormula = styled.p`
color: #8F8F8F;
font-size: 12px;
line-height: 1.35;
box-sizing: border-box;
`;

export const AboutFormulaColor = styled.span`
color: var(--primary-color);
`;

export const Text = styled.h2`
font-size: 18px;
line-height: 1.1;
margin-bottom: 16px;
`;
export const TextInfo = styled.p`
margin-bottom: 8px;
margin-top: 16px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--light-grey-color);
  border-radius: 8px;
  padding: 10px;
  outline: none;
  color: #407BFF;
  font-size: 16px;
  &::placeholder {
    color: var(--primary-color);
    opacity: 1;
  }
  ${({ $hasError }) =>
    $hasError &&
    `
      border-color: var(--red-color) !important;
      color: var(--red-color);
    `}
`;

export const AmountText = styled.div`
display: flex;
margin-top: 16px;
margin-bottom: 24px;
align-items: center;
`;

export const AmountTextInfo = styled.p`
width: 190px;
@media (min-width: 768px){
  width: 328px;
  }
`;

export const AmountNumberInfo = styled.span`
margin-left: 6px;
color: var(--primary-color);
font-size: 18px;
line-height: 1.3;
`;

export const Button = styled.button`
margin-top: 24px;
background-color: var(--primary-color);
border: none;
width: 100%;
height: 36px;
color: var(--white-color);
font-size: 16px;
line-height: 1.3;
border-radius: 10px;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

&:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54)
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }

@media (min-width: 768px) {
    display: block;
    width: 160px;
    height: 44px;
    margin-left: auto;
    font-size: 18px;
  }
`;

export const MessageError = styled.div`
  color: var(--secondaryRed);
  margin-top: 4px;
  font-size: 14px;
`;