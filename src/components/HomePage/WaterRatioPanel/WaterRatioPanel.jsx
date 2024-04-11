import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectPercent } from '../../../redux/Calendar/calendarSelectors';

export const WaterRatioPanel = React.memo(() => {
  const sliderPercent = useSelector(selectPercent);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const progress = (sliderPercent / 100) * 100;
  const sliderStyle = {
    background: `linear-gradient(to right, #9EBBFF ${progress}%, #D7E3FF ${progress}%)`,
  };
  useEffect(() => {
  }, [sliderPercent]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <RangeAndAddWater>
      <RangeDiv>
        <RangeTitle>Today</RangeTitle>
        <StyledRangeInput
          type="range"
          min="0"
          max="100"
          value={sliderPercent}
          style={sliderStyle}
          readOnly
        />
        <PercentageDiv>
          <PercentageOfRange>0%</PercentageOfRange>
          <PercentageOfRange>
            <BoldPercentageOfRange>
              {Math.ceil(sliderPercent)}%
            </BoldPercentageOfRange>
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
});

WaterRatioPanel.displayName = 'WaterRatioPanel';

export default WaterRatioPanel;
