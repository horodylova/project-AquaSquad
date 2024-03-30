import Container from '../Container/Container';
import { HeaderContainer, Navigation } from './Header.styled';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { UserAuth } from './UserAuth/UserAuth';
import {UserLogo} from './UserLogo/UserLogo';
// import { UserLogoModal } from '../Modals/HeaderModals/UserLogoModal/UserLogoModal';
import { UserLogoutModal } from '../AllModals/UserLogoutModal/UserLogoutModal';





export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <HeaderLogo />
          <UserAuth />
          <UserLogo />
          {/* <UserLogoModal/> */}
          <UserLogoutModal/>
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};
