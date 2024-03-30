import { useNavigate } from 'react-router-dom';

import {
  BenefitsList,
  BenefitsItems,
  Descr,
  Container,
  Icon,
  MainTitle,
  SubTitle,
  Button,
} from './WaterTracker.styled';
// import iconSprite from '../../../Icons';

export const WaterTracker = () => {
  const navigate = useNavigate();
  // function TryClick() {
  //   navigate('/signup');
  // }
  // return (
  //   <Container>
  //     <MainTitle>Water consumption tracker</MainTitle>
  //     <Descr>Record daily water intake and track</Descr>
  //     <SubTitle>Tracker Benefits</SubTitle>
  //     <BenefitsList>
  //       <BenefitsItems>
  //         <Icon>
  //           <use href={iconSprite + '#icon-calendar-days'} />
  //         </Icon>
  //         Habit drive
  //       </BenefitsItems>
  //       <BenefitsItems>
  //         <Icon>
  //           <use href={iconSprite + '#icon-presantation-chart-bar'} />
  //         </Icon>
  //         View statistics
  //       </BenefitsItems>
  //       <BenefitsItems>
  //         <Icon>
  //           <use href={iconSprite + '#icon-wrench-screendriver'} />
  //         </Icon>
  //         Personal rate setting
  //       </BenefitsItems>
  //     </BenefitsList>

  //     <Button type="button" onClick={TryClick}>
  //       Try tracker
  //     </Button>
  //   </Container>
  // );
};