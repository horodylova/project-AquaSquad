import styled from 'styled-components';

export const DailyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  margin: 0 auto;
  border-radius: 10px;
  padding: 24px 12px;

  @media (min-width: 768px) {
    min-width: 704px;
    padding: 32px 24px;
    overflowy: 'auto';
  }

  @media (min-width: 1440px) {
    min-width: 592px;
  }
`;
export const DailyTitleWrp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  button {
    padding: 6px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }
`;

export const DailyTitle = styled.h2`
  color: var(--primary-txt-color);
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 24px;
`;

export const DailySpan = styled.span`
  color: var(--primary-color);
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
export const DailyDescrSpan = styled.span`
  color: var(--primary-color);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const DailyPrg = styled.p`
  color: var(--primary-txt-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

export const DailyNormaWrp = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;
export const DailyDescrWrp = styled.div`
  display: flex;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid var(--light-grey-color);
  margin-bottom: 24px;
`;
export const DailyDescr = styled.p`
  color: #8f8f8f;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
export const DailyForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: relative;
  margin-bottom: 24px;
`;

export const DailyRadioWrp = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 24px;
`;
export const DailyFormTitle = styled.h3`
  color: var(--primary-txt-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;
export const DailyLabel = styled.label`
  color: var(--primary-txt-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;
export const DailyRadioInput = styled.input`
  margin-right: 8px;
`;
export const DailyTextInput = styled.input`
  border-radius: 6px;
  border: 1px solid var(--light-grey-color);
  padding: 12px 10px;
  display: flex;
  width: 100%;
  margin-top: 8px;
  color: var(--primary-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    color: var(--primary-color);
  }
`;
export const DailyStrong = styled.strong`
  color: var(--primary-color);
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
`;

export const DailyIntakeWrp = styled.div`
  display: flex;
  align-items: baseline;
`;

export const DailyInputPrg = styled.p`
  display: flex;
  color: var(--primary-txt-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 8px;
  max-width: 190px;

  @media (min-width: 768px) {
    max-width: 100%;

    margin-right: 6px;
  }
`;
export const DailyIntakeLabel = styled.label`
  color: var(--primary-txt-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const DailyButton = styled.button`
  margin-left: auto;
  width: 100%;
  padding: 8px 30px;
  color: var(--white-color);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  // margin-top: 8px;
  border: none;
  border-radius: 10px;
  background: var(--primary-color);

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
`;
