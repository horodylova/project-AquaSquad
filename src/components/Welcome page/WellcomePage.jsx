import { Tracker, WellcomeLayout } from './WellcomePage.styled';
import { WaterTracker } from './WaterTracker/WaterTracker';
import { WhyDrink } from './WhyDrink/WhyDrink';

const WellcomePage = () => {
  return (
    <WellcomeLayout className="static-background">
      <Tracker className="container">
        <WaterTracker />
        <WhyDrink />
      </Tracker>
    </WellcomeLayout>
  );
};

export default WellcomePage;