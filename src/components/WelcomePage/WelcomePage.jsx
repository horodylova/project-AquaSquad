import { Container, WelcomeLayout } from './WelcomePage.styled';
import { WaterTracker } from './WaterTracker/WaterTracker';
import { WhyDrink } from './WhyDrink/WhyDrink';

const WelcomePage = () => {
  return (
    <WelcomeLayout>
      <Container>
        <WaterTracker />
        <WhyDrink />
      </Container>
    </WelcomeLayout>
  );
};

export default WelcomePage;