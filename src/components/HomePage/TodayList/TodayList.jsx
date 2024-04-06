import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  TodayTitle,
  AddLink,
  SvgPlus,
  WaterList,
  TodayListContainer,
} from './TodayList.styled';
import sprite from '../../../Images/welcome-page/iconSprite.svg';
import { TodayItem } from '../TodayItem/TodayItem';
import AddWaterModal from '../../AllModals/AddWaterModal/AddWaterModal';

const plusIcon = `${sprite}#icon-plus-blue`;

export const TodayList = () => {
  const todayList = useSelector((state) => state.todayList);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log('Hi');
    // setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TodayListContainer>
      <TodayTitle>Today</TodayTitle>
      <WaterList>
        {todayList &&
          todayList.map((item) => (
            <TodayItem
              key={item._id}
              water={item.waterVolume}
              date={new Date(item.date)}
              id={item._id}
            />
          ))}
      </WaterList>
      <AddLink onClick={handleOpenModal}>
        <SvgPlus>
          <use xlinkHref={plusIcon}></use>
        </SvgPlus>
        <span>Add water</span>
      </AddLink>
      <AddWaterModal onRequestClose={handleCloseModal} isOpen={isModalOpen} />
    </TodayListContainer>
  );
};
