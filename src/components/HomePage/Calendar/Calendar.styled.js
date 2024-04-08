import styled from 'styled-components';

export const MonthText = styled.div`
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  color: var(--primary-txt-color);
  line-height: 1.25;

  @media (min-width: 767px) {
    font-size: 24px;
  }
`;

export const MonthContent = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  gap: auto;
`;

export const MonthNavigation = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  list-style: none;
  gap: 12px;
`;

export const MonthAndYear = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: var(--regular);
  font-family: Roboto;
  line-height: 1.25;
  color: var(--primary-color);
`;

export const CalendarDays = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 26px;
  position: relative;

  @media screen and (min-width: 768px) {
    row-gap: 20px;
    column-gap: 34px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 20px;
    column-gap: 22px;
  }
`;

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  cursor: pointer;
`;

export const Day = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export const DayNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  min-width: 32px;
  height: 32px;
  border: 1px solid orange;
  border-radius: 20px;
  background-color: var(--white-color);
  border: 1px solid var(--orange-color);
  margin-bottom: 4px;

  &:hover,
  &:focus {
    background-color: var(--light-blue-color);
    outline: inherit;
  }
  ${(props) => (props.$percent >= 100 ? `border: none;` : '')}
`;

export const DayPercentage = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--light-blue-color);
  margin-top: 4px;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 767px) {
    font-size: 10px;
    line-height: 1.6;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    gap: 34px;
  }
`;
