// import Container from '../Container/Container';
import {
  HeaderContainer,
  Navigation,
  NavigationWrapper,
} from './Header.styled';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { UserAuth } from './UserAuth/UserAuth';
import { UserLogo } from './UserLogo/UserLogo';
import { SettingModal } from '../AllModals/SettingModal/SettingModal';

export const Header = ({ isAuthenticated }) => {
  return (
    // <Container>
    <HeaderContainer>
      <NavigationWrapper>
        <Navigation>
          <HeaderLogo isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <UserLogo /> : <UserAuth />}
          <UserLogo/>
        </Navigation>
      </NavigationWrapper>
      <SettingModal/>
    </HeaderContainer>
    // </Container>
  );
};
