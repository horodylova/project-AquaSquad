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

const HomePage = () => {
  const dispatch = useDispatch();
  const date = useSelector(currentDaySlice);

  useEffect(() => {
    dispatch(getDayWater());
    dispatch(getMonthWater(date));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <BackGroundContainer className="background">
              <div className="container">
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
          </div>
      </BackGroundContainer>
  );
};

export default HomePage;
