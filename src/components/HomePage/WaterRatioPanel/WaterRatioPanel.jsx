import { useState, useEffect } from 'react';
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
import AddWaterModal from '../../AllModals/AddWaterModal/AddWaterModal';

export const WaterRatioPanel = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {}, [sliderValue]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

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
          onChange={handleSliderChange}
        ></StyledRangeInput>
        <PercentageDiv>
          <PercentageOfRange>0%</PercentageOfRange>
          <PercentageOfRange>
            <BoldPercentageOfRange>{sliderValue}%</BoldPercentageOfRange>
          </PercentageOfRange>
          <PercentageOfRange>100%</PercentageOfRange>
        </PercentageDiv>
      </RangeDiv>
      <ButtonAddWater onClick={handleOpenModal}>
        <SvgButton>
          <use href={iconSprite + '#icon-plus-button'} />
        </SvgButton>
        Add Water
      </ButtonAddWater>
      <AddWaterModal onRequestClose={handleCloseModal} isOpen={isModalOpen} />
    </RangeAndAddWater>
  );
};
