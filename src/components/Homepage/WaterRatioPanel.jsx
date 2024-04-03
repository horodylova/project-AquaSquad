import React, { useEffect } from 'react';
import iconSprite from '../../Images/welcome-page/iconSprite.svg';
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
} from '../../pages/HomePage/HomePage.styled';
import { TodayListModal } from '../TodayListModal/TodayListModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectModalAdd, selectNewCompleted } from '../../redux/selectors';
import { openModalAdd, closeModalAdd } from '../../redux/modal/modalSlice';

export const WaterRatioPanel = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectModalAdd);
  const sliderValue = useSelector(selectNewCompleted);

  useEffect(() => {
        const body = document.body;
        if (modalIsOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => {
            body.style.overflow = 'auto';
        };
    }, [modalIsOpen]);

  const progress = (sliderValue / 100) * 100;

  const sliderStyle = {
    background: `linear-gradient(to right, #9EBBFF ${progress}%, #D7E3FF ${progress}%)`,
  };

  const openModal = () => {
    dispatch(openModalAdd());
  };

  const closeModal = () => {
    dispatch(closeModalAdd());
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
          <use href={iconSprite + '#icon-plus'} />
        </SvgButton>
        Add Water
      </ButtonAddWater>
      <TodayListModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </RangeAndAddWater>
  );
};