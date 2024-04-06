import Container from '../../components/Container/Container';


import { DailyNorma } from '../../components/HomePage/DailyNorma/DailyNorma';
import { WaterRatioPanel } from '../../components/HomePage/WaterRatioPanel/WaterRatioPanel';
import { Calendar } from '../../components/HomePage/Calendar/Calendar';
import { TodayList } from '../../components/HomePage/TodayList/TodayList';

import { BackGroundContainer } from './HomePage.styled';


const HomePage = () => {
  
 

  return (
    <>
    <BackGroundContainer>
      <Container>
            <DailyNorma />
            <WaterRatioPanel />
            <TodayList />
            <Calendar/>
       
      </Container>
      </BackGroundContainer>
    </>
  );
};

export default HomePage;