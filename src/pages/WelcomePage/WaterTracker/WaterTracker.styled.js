import styled from 'styled-components';

export const BenefitsList = styled.ul`
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
 
`;
export const BenefitsItems = styled.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px), screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const Descr = styled.p`
  font-size: 24px;
  line-height: 1.25;
  color: var(--primary-txt-color);
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    line-height: 1.14;
  }
`;
export const Container = styled.div`
  margin-bottom: 40px;

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 26px;
    margin-right: 81px;
    margin-bottom: 0;
  }
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  line-height: 1.17;
  color: var(--primary-txt-color);

  margin-bottom: 16px;

  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 1.14;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  line-height: 1.11;
  margin-bottom: 12px;
  color: var(--primary-txt-color);
`;

export const Icon = styled.svg`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  fill: none;
  @media screen and (min-width: 768px) {
  width: 40px;
  height: 40px;

  }
`;

export const Button = styled.button`
  padding-right: 100px;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: var(--primary-color);
  width: 100%;
  border-radius: 10px;
  border: none;
  max-width: 280px;
  padding: 8px 30px;
  color: var(--white-color);
  cursor: pointer;
  box-shadow: 0px 4px 8px 0px #407bff;
  transition: box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px #407bff;
  
  }
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    min-width: 336px;
    line-height: 24px;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;