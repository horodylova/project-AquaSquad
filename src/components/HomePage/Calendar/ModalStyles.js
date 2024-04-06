import styled from 'styled-components';

export const ModalWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(64, 123, 255, 0.30);
`;

export const ModalContent = styled.div`
  display: inline-flex;
  padding: 24px 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  @media (min-width: 767px) {
    padding: 24px 16px;
  }
`;

export const DailyNormaLabel = styled.span`
  width: 90px;
  color: var(--primary-txt-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: var(--regular);
  font-weight: 400;
  line-height: 1.25;
`;

export const DailyNormaValue = styled.span`
  width: 50px;
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: 1.33;
`;

export const SelectedDayInfo = styled.p`
  width: 204px;
  color: var(--primary-color);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: var(--regular);
  line-height: 1.25;
`;

export const FulfillmentLabel = styled.span`
`;

export const FulfillmentValue = styled.span`
`;


