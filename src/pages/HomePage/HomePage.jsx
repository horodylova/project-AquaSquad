// import Container from '../../components/Container/Container';

// const HomePage = () => {
//   return (
//     <>
//       <Container>
//         <h1>Home page</h1>
//       </Container>
//     </>
//   );
// };

// export default HomePage;

import { DailyNorma } from '../../components/Homepage/DailyNorma';
import { ImageOfBottle } from '../../components/Homepage/ImageOfBottle';
import { TodayAndMonthLayout } from '../../components/TodayAndMonthLayout/TodayAndMonthLayout';
import { WaterRatioPanel } from '../../components/Homepage/WaterRatioPanel';
import { LeftSideDiv, AllSidesDiv, StyledBackground } from './HomePage.styled';

const HomePage = () => {
  return (
    <StyledBackground className='static-background'>
      <div className="container">
        <AllSidesDiv>
          <LeftSideDiv>
            <DailyNorma />
            <ImageOfBottle />
            <WaterRatioPanel />
          </LeftSideDiv>
          <TodayAndMonthLayout />
        </AllSidesDiv>
      </div>
    </StyledBackground>
  );
};
export default HomePage;