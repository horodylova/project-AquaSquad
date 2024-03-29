import Container from '../Container/Container';
import { HeaderContainer, Navigation } from './Header.styled';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { UserAuth } from '../UserAuth/UserAuth';
import {UserLogo} from '../UserLogo/UserLogo';

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <HeaderLogo />
          <UserAuth />
          <UserLogo/>
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};
