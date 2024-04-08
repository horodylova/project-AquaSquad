import { useState } from 'react';
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
import { selectDayWater } from '../../../redux/Calendar/calendarSelectors';

import Modal from 'react-modal';
import EditModal from '../../AllModals/EditModal/EditModal';

Modal.setAppElement('#root');

const plusIcon = `${sprite}#icon-plus-blue`;

export const TodayList = () => {
  const todayList = useSelector(selectDayWater.takingWater);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [waterId, setWaterId] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditbutton = (id) => {
    setWaterId(id);
    setIsEditModalOpen(true);
  };

  return (
    <TodayListContainer>
      <TodayTitle>Today</TodayTitle>
      <WaterList>
        {todayList &&
          todayList.map((item) => (
            <TodayItem
              key={item._id}
              water={item.value}
              // date={new Date(item.date)}
              time={item.time}
              id={item._id}
              onEditButtonClick={handleEditbutton}
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

      {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          onRequestClose={() => setIsEditModalOpen(false)}
          waterId={waterId}
        />
      )}
    </TodayListContainer>
  );
};
