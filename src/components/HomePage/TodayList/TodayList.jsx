import React from 'react';
import { useSelector } from 'react-redux';
import {
  TodayTitle,
  AddLink,
  SvgPlus,
  WaterList,
  TodayListContainer,
} from './TodayList.styled';
import sprite from '../../../Images/welcome-page/iconSprite.svg';

const plusIcon = `${sprite}#icon-plus-blue`;

export const TodayList = () => {
  const todayList = useSelector(state => state.todayList);

  return (
    <TodayListContainer>
      <TodayTitle>Today</TodayTitle>
      <WaterList>
        {todayList && todayList.map(item => (
          <div key={item._id}>
            water={item.waterVolume}
            date={new Date(item.date)}
            id={item._id}
          </div>
        ))}
      </WaterList>
      <AddLink>
        <SvgPlus>
          <use xlinkHref={plusIcon}></use>
        </SvgPlus>
        <span>Add water</span>
      </AddLink>
    </TodayListContainer>
  );
};
