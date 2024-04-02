import styled from 'styled-components';

export const WhyDrinkContainer = styled.div`
  background-color: var(--second-background-color);
  padding: 24px 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding: 32px 24px;
    width: 446px;
  }
  @media screen and (min-width: 1440px) {
    padding: 32px 24px;
    margin-top: 34px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  line-height: 1.11;

  margin-bottom: 12px;
  color: #2F2F2F;
`;

export const InfoItems = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  line-height: 20px;

  &::before {
    content: '';
    border-color: var(--primary-color);
    border-style: solid;
    border-width: 0 8px 8px 0;
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;