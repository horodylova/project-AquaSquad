import { ContainerWelcome, WelcomeLayout } from './WelcomePage.styled';
import { WaterTracker } from './WaterTracker/WaterTracker';
import { WhyDrink } from './WhyDrink/WhyDrink';

export const WelcomePage = () => {
  return (
    <WelcomeLayout className="background">
      <ContainerWelcome className="container">
        <WaterTracker />
        <WhyDrink />
      </ContainerWelcome>
    </WelcomeLayout>
  );
};

export default WelcomePage;