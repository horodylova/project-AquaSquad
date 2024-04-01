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
import iconSprite from '../../../Images/welcome-page/iconSprite.svg';

export const WaterTracker = () => {
  const navigate = useNavigate();
  function TryClick() {
    navigate('/register');
  }
  return (
    <Container>
      <MainTitle>Water consumption tracker</MainTitle>
      <Descr>Record daily water intake and track</Descr>
      <SubTitle>Tracker Benefits</SubTitle>
      <BenefitsList>
        <BenefitsItems>
          <Icon>
            <use href={iconSprite + '#icon-calendar'} />
          </Icon>
          Habit drive
        </BenefitsItems>
        <BenefitsItems>
          <Icon>
            <use href={iconSprite + '#icon-statistics'} />
          </Icon>
          View statistics
        </BenefitsItems>
        <BenefitsItems>
          <Icon>
            <use href={iconSprite + '#icon-setting'} />
          </Icon>
          Personal rate setting
        </BenefitsItems>
      </BenefitsList>

      <Button type="button" onClick={TryClick}>
        Try tracker
      </Button>
    </Container>
  );
};
