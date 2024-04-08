import Container from '../../components/Container/Container';
import { DailyNorma } from '../../components/HomePage/DailyNorma/DailyNorma';
import { WaterRatioPanel } from '../../components/HomePage/WaterRatioPanel/WaterRatioPanel';
import { Calendar } from '../../components/HomePage/Calendar/Calendar';
import { TodayList } from '../../components/HomePage/TodayList/TodayList';
import { ImageOfBottle } from '../../components/HomePage/ImageBottleOnHome/ImageBottleOnHomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  BackGroundContainer,
  ContentWrapper,
  LeftSideContainer,
  RightSideContainer,
} from './HomePage.styled';
import {
  getDayWater,
  getMonthWater,
} from '../../redux/Calendar/calendarOperations';
import { currentDaySlice } from '../../redux/water/actions';
import { selectDate } from '../../redux/water/waterSelectors';

const HomePage = () => {
  const dispatch = useDispatch();
  const date = useSelector(currentDaySlice);
  const select = useSelector(selectDate);

  // eslint-disable-next-line no-unused-vars
  const [year, month, rest] = date.selectedDate.split('-');

  useEffect(() => {
    dispatch(getDayWater());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getMonthWater({ year, month }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  return (
    <>
      <BackGroundContainer>
        <Container>
          <ContentWrapper>
            <LeftSideContainer>
              <DailyNorma />
              <ImageOfBottle />
              <WaterRatioPanel />
            </LeftSideContainer>
            <RightSideContainer>
              <TodayList />
              <Calendar />
            </RightSideContainer>
          </ContentWrapper>
        </Container>
      </BackGroundContainer>
    </>
  );
};

export default HomePage;
