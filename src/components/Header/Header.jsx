
import Container from '../Container/Container';
import { HeaderContainer, Navigation } from './Header.styled';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { UserAuth } from './UserAuth/UserAuth';
import { UserLogo } from './UserLogo/UserLogo';
import { SettingModal } from '../AllModals/SettingModal/SettingModal';







export const Header = ({ isAuthenticated }) => {
  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <HeaderLogo isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <UserLogo /> : <UserAuth />}
        </Navigation>
        <SettingModal/>
      </HeaderContainer>
    </Container>
  );
};
