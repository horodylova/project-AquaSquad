export const RangeAndAddWater = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 24px;
    align-items: center;
  }
  @media (min-width: 1440px) {
    gap: 28px;
    margin-bottom: 0px;
  }
`;

export const RangeDiv = styled.div`
  width: 280px;
  @media (min-width: 768px) {
    width: 356px;
  }
  @media (min-width: 768px) {
    width: 391px;
  }
`;

export const RangeTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 8px;
  color: var(--light-blue-color);
  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const PercentageOfRange = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--light-blue-color);
  left: 4px;
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    width: 1px;
    height: 8px;
    background-color: var(--light-grey-color);
  }
`;
export const BoldPercentageOfRange = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
`;
export const PercentageDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: auto;
`;
export const ButtonAddWater = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  cursor: pointer;
  border: none;
  background-color: var(--primary-color);
  color: var(--white-color);
  box-shadow: 0px 4px 8px 0px #407bff57;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px #407bff;
  }
  transition: all 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98) 0s;
  @media (min-width: 320px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    padding: 8px 90px 8px 90px;
    width: 336px;
    height: 44px;
  }

  @media (min-width: 1440px) {
    width: 182px;
    padding: 10px 29px 10px 29px;
  }
`;
export const SvgButton = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  stroke: var(--white-color);
  stroke-width: 2;
`;