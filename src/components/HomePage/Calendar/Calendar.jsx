import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createAction } from '@reduxjs/toolkit';
import Modal from 'react-modal';
import {
  CalendarContainer,
  MonthNavigation,
  CalendarDays,
  MonthContent,
  MonthText,
  Button,
  MonthAndYear,
  Day,
  DayNumber,
  DayPercentage,
} from './Calendar.styled';

import { ReactComponent as ArrowLeft } from '/src/Icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '/src/Icons/arrow-right.svg';

Modal.setAppElement('#root');

// const setSelectedDate = createAction('SET_SELECTED_DATE');

export const Calendar = ({ dailyNorma, fulfillmentPercentage, waterConsumed }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const dispatch = useDispatch();

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prevDate) => {
      return new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
    });
  };

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      return new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleString('en', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <CalendarContainer>
      <MonthContent>
        <MonthText>Month</MonthText>
        <MonthNavigation>
          <Button onClick={goToPreviousMonth}>
            <ArrowRight />
          </Button>
          <MonthAndYear>{`${monthName}, ${year}`}</MonthAndYear>
          <Button onClick={goToNextMonth}>
            <ArrowLeft />
          </Button>
        </MonthNavigation>
      </MonthContent>
      <CalendarDays>
        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(
          (day) => (
            <Day key={day} onClick={() => handleDayClick(day)}>
              <DayNumber>{day}</DayNumber>
              <DayPercentage>{0}%</DayPercentage>
            </Day>
          )
        )}
      </CalendarDays>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Day Details"
      >
        <p>
          {selectedDay
            ? `${selectedDay}, ${currentDate.toLocaleString('en', {
                month: 'long',
              })}`
            : ''}
        </p>
        <p>Daily norma: {dailyNorma || '1.5'} L</p>
        <p>Fulfillment of the daily norm: {fulfillmentPercentage || '0'}%</p>
        <p>Water consumed: {waterConsumed || '0'}</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </CalendarContainer>
  );
};

export default Calendar;
