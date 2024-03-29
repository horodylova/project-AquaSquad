import Container from '../Container/Container';
import { HeaderContainer, Navigation } from './Header.styled';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { UserAuth } from '../UserAuth/UserAuth';

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <HeaderLogo />
          <UserAuth />
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};
