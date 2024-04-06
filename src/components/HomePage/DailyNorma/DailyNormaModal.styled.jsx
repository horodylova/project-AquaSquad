import styled from 'styled-components';

export const DailyWrapper = styled.div`
    padding: 32px 24px;
    border: 1px solid red; 
    width: 592px;
    height: 712px;
    margin: 0 auto;
    border-radius: 10px;
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
    font-size: 16px;
    line-height: 24px;
  
`;
export const DailyPrg = styled.p`
    color: var(--primary-txt-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 12px;
`;

export const DailyNormaWrp = styled.div`
    display: flex;
    gap: 24px
`;
export const DailyDescrWrp = styled.div`
    display: flex;  
    max-width: 524px;
    min-height: 48px;   
    border-radius: 10px;
    padding: 10px;
    border: 1px solid var(--light-grey-color); 
    margin-bottom: 24px;
`;
export const DailyDescr = styled.p`
    display: flex;
    color: #8F8F8F;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
`;
export const DailyForm = styled.form`
    display: flex; 
    flex-direction: column; 
    row-gap: 16px;
    position: relative;
`;

export const DailyRadioWrp = styled.form`
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
    width: 544px;
    margin-top: 8px;
    color: var(--primary-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
}
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &::placeholder {
        color: var(--primary-color);
  }
`;
export const DailyInputPrg = styled.p`
    color: var(--primary-txt-color);
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 8px;
`;
export const DailyButton = styled.button`
    margin-left: auto;
    width: 160px;
    padding: 10px 30px;
    color: var(--white-color);
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 8px;
    border: none;
    border-radius: 10px;
    background: var(--primary-color);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;
