import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from 'react-modal';
import {
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
import CalendarModal from './CalendarModal';
import { actions } from '../../../redux/water/reducers';
import { getMonthWater } from '../../../redux/Calendar/calendarOperations';
import { selectMonthWater } from '../../../redux/Calendar/calendarSelectors';
import { currentDaySlice } from '../../../redux/water/actions';

Modal.setAppElement('#root');

export const Calendar = ({
  dailyNorma,
  fulfillmentPercentage,
  waterConsumed,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subObj, setSubObj] = useState({});

  const dispatch = useDispatch();
  const userPercent = useSelector(selectMonthWater);
  const waterTime = useSelector(currentDaySlice);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    newDate.setDate(1);
    const tempData = newDate.toISOString();

    dispatch(actions.selectDayAction(tempData));
    const [year, month] = tempData.split('-');
    dispatch(getMonthWater({ year, month }));
    setCurrentDate(newDate);
  };



  const goToNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(1);

    const newYear = String(newDate.getFullYear());
    const newMonth = String(newDate.getMonth() + 1).padStart(2, '0'); // Add 1 because months are 0-indexed
    const newDay = String(newDate.getDate()).padStart(2, '0');

    const tempData = `${newYear}-${newMonth}-${newDay}`;

    dispatch(actions.selectDayAction(tempData));
    dispatch(getMonthWater({ year: newYear, month: newMonth }));
    setCurrentDate(newDate);
  };

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentDate(new Date()), 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDayClick = (day, subObj) => {
    try {
      setSelectedDay(day);
      setIsModalOpen(true);
      setSubObj(subObj);
      console.log('selectedDay', selectedDay);
    } catch (error) {
      console.log(error);
    }
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleString('en', { month: 'long' });
  const year = currentDate.getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const here = waterTime.selectedDate.split('-')[1];
  const there = String(currentMonth).padStart(2, '0');

  return (
    <div>
      <MonthContent>
        <MonthText>Month</MonthText>
        <MonthNavigation>
          <Button onClick={goToPreviousMonth}>
            <ArrowRight />
          </Button>
          <MonthAndYear>{`${monthName}, ${year}`}</MonthAndYear>
          <Button disabled={there === here} onClick={goToNextMonth}>
            <ArrowLeft />
          </Button>
        </MonthNavigation>
      </MonthContent>
      <CalendarDays>
        {Array.from({ length: daysInMonth }, (_, index) => index + 1).map(
          (day) => {
            const subObj = userPercent[day];
            const percentInADay = subObj ? subObj.percent : 0;
            return (
              <Day key={day} onClick={() => handleDayClick(day, subObj)}>
                <DayNumber $percent={percentInADay}>{day}</DayNumber>
                <DayPercentage>{percentInADay}%</DayPercentage>
              </Day>
            );
          }
        )}
      </CalendarDays>

      <CalendarModal
        obj={subObj}
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        currentDate={currentDate}
        selectedDay={selectedDay}
        dailyNorma={dailyNorma}
        fulfillmentPercentage={fulfillmentPercentage}
        waterConsumed={waterConsumed}
      />
    </div>
  );
};

export default Calendar;
