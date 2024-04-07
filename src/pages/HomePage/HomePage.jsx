import Container from '../../components/Container/Container';
import { DailyNorma } from '../../components/HomePage/DailyNorma/DailyNorma';
import { WaterRatioPanel } from '../../components/HomePage/WaterRatioPanel/WaterRatioPanel';
import { Calendar } from '../../components/HomePage/Calendar/Calendar';
import { TodayList } from '../../components/HomePage/TodayList/TodayList';
import { ImageOfBottle } from '../../components/HomePage/ImageBottleOnHome/ImageBottleOnHomePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

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

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDayWater());
    dispatch(getMonthWater());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BackGroundContainer>
        <Container>
          <ContentWrapper>
            <LeftSideContainer>
              <DailyNorma />
                <ImageOfBottle/>
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
