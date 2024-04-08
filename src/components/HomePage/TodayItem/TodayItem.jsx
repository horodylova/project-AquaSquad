// import React from 'react';

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

export const TodayItem = ({
  id,
  water,
  time,
  onEditButtonClick,
  handleDeletebutton,
}) => {
  // const time = `${date.getHours()}:${date
  //   .getMinutes()
  //   .toString()
  //   .padStart(2, '0')}`;

  return (
    <WaterItem>
      <CupIcon>
        <use href={glassIcon}></use>
      </CupIcon>
      <WaterText>{`${water} ml`}</WaterText>
      <TimeText>{time}</TimeText>

      <ConfigIcons>
        <ButtonPen onClick={() => onEditButtonClick(id)}>
          <SvgPen>
            <use href={editIcon}></use>
          </SvgPen>
        </ButtonPen>
        <ButtonTrash onClick={() => handleDeletebutton(id)}>
          <SvgTrash>
            <use href={delIcon}></use>
          </SvgTrash>
        </ButtonTrash>
      </ConfigIcons>
    </WaterItem>
  );
};
