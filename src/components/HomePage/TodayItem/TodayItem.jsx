import React from 'react';

import {
  WaterItem,
  WaterText,
  TimeText,
  ConfigIcons,
  ButtonPen,
  ButtonTrash,
  SvgPen,
  SvgTrash,
  CupIcon,
} from './TodayItem.styled';
import sprite from '../../../Images/welcome-page/iconSprite.svg';

const editIcon = `${sprite}#icon-pencil`;
const delIcon = `${sprite}#icon-trash`;
const glassIcon = `${sprite}#icon-cup`;

export const TodayItem = ({ id, water, date }) => {

    const time = `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  return (
    <WaterItem>
      <CupIcon>
        <use href={glassIcon}></use>
      </CupIcon>
      <WaterText>{`${water} ml`}</WaterText>
      <TimeText>{time}</TimeText>

      <ConfigIcons>
        <ButtonPen>
          <SvgPen>
            <use href={editIcon}></use>
          </SvgPen>
        </ButtonPen>
        <ButtonTrash>
          <SvgTrash>
            <use href={delIcon}></use>
          </SvgTrash>
        </ButtonTrash>
      </ConfigIcons>
    </WaterItem>
  );
};