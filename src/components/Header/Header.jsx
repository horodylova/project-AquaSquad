import Container from '../Container/Container';
import { HeaderContainer, Navigation } from './Header.styled';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { UserAuth } from './UserAuth/UserAuth';
import {UserLogo} from './UserLogo/UserLogo';
import { UserLogoModal } from '../AllModals/UserLogoModal/UserLogoModal';






export const Header = ({ isAuthenticated }) => {
  return (
    <Container>
      <HeaderContainer>
        <Navigation>
          <HeaderLogo isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <UserLogo /> : <UserAuth />}
        </Navigation>
        <UserLogoModal/>
      </HeaderContainer>
    </Container>
  );
};
