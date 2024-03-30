import Container from '../Container/Container';
import { HeaderContainer, Navigation } from './Header.styled';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { UserAuth } from './UserAuth/UserAuth';
import {UserLogo} from './UserLogo/UserLogo';
// import { UserLogoModal } from '../Modals/HeaderModals/UserLogoModal/UserLogoModal';
import { UserLogoutPopUp } from '../AllModals/UserLogoutPopUp/UserLogoutPopUp';





export const Header = ({ isAuthenticated }) => {
  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <HeaderLogo isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <UserLogo /> : <UserAuth />}
          <UserLogoutPopUp/>
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};
