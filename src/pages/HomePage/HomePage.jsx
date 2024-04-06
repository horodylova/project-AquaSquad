import Container from '../../components/Container/Container';
import { DailyNorma } from '../../components/HomePage/DailyNorma/DailyNorma';
import { WaterRatioPanel } from '../../components/HomePage/WaterRatioPanel/WaterRatioPanel';
import { Calendar } from '../../components/HomePage/Calendar/Calendar';
import { TodayList } from '../../components/HomePage/TodayList/TodayList';

import {
  BackGroundContainer,
  ContentWrapper,
  LeftSideContainer,
  RightSideContainer,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <>
      <BackGroundContainer>
        <Container>
          <ContentWrapper>
            <LeftSideContainer>
              <DailyNorma />
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
