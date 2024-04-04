import { useState, useEffect } from 'react';
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
  DayPercentage  
} from './Calendar.styled';

import { ReactComponent as ArrowLeft } from '/src/Icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from '/src/Icons/arrow-right.svg';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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

  const daysInMonth = getDaysInMonth(currentDate);
  const monthName = currentDate.toLocaleString('en', { month: 'long' });
  const year = currentDate.getFullYear();

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <Day key={i}>
          <DayNumber>{i}</DayNumber>
          <DayPercentage>{0}%</DayPercentage>
        </Day>
      );
    }
    return days;
  };

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
          <CalendarDays>{renderCalendarDays()}</CalendarDays>
        </CalendarContainer>
   
  );
};

export default Calendar;
