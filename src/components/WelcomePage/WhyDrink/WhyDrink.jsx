import {
  InfoItems,
  WhyDrinkContainer,
  SubTitle,
} from './WhyDrink.styled';

export const WhyDrink = () => {
  return (
    <>
      <div>
        <WhyDrinkContainer>
          <SubTitle>Why drink water</SubTitle>
          <ul>
            <InfoItems>Supply of nutrients to all organs</InfoItems>
            <InfoItems>Providing oxygen to the lungs</InfoItems>
            <InfoItems>Maintaining the work of the heart</InfoItems>
            <InfoItems>Release of processed substances</InfoItems>
            <InfoItems>
              Ensuring the stabiInfoItemsty of the internal environment
            </InfoItems>
            <InfoItems>Maintaining within the normal temperature</InfoItems>
            <InfoItems>
              Maintaining an immune system capable of resisting disease
            </InfoItems>
          </ul>
        </WhyDrinkContainer>
      </div>
    </>
  );
};