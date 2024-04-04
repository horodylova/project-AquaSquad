import React, { useEffect } from 'react';
import iconSprite from '../../../Images/welcome-page/iconSprite.svg';
import {
  RangeAndAddWater,
  RangeDiv,
  RangeTitle,
  StyledRangeInput,
  PercentageDiv,
  PercentageOfRange,
  BoldPercentageOfRange,
  ButtonAddWater,
  SvgButton,
} from './WaterRatioPanel.styled';

export const WaterRatioPanel = () => {
  useEffect(() => {
  const progress = (sliderValue / 100) * 100;

  const sliderStyle = {
    background: `linear-gradient(to right, #9EBBFF ${progress}%, #D7E3FF ${progress}%)`,
  };

  return (
    <RangeAndAddWater>
      <RangeDiv>
        <RangeTitle>Today</RangeTitle>
        <StyledRangeInput
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          style={sliderStyle}
          readOnly={true}
        ></StyledRangeInput>
        <PercentageDiv>
          <PercentageOfRange>0%</PercentageOfRange>
          <PercentageOfRange>
            <BoldPercentageOfRange>50%</BoldPercentageOfRange>
          </PercentageOfRange>
          <PercentageOfRange>100%</PercentageOfRange>
        </PercentageDiv>
      </RangeDiv>
      <ButtonAddWater onClick={openModal}>
        <SvgButton>
          <use href={iconSprite + '#icon-plus-circle'} />
        </SvgButton>
        Add Water
      </ButtonAddWater>
    </RangeAndAddWater>
  );
  };

