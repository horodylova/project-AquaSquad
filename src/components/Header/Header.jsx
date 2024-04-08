import {
  HeaderContainer

  
} from './Header.styled';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { UserAuth } from './UserAuth/UserAuth';
import { UserLogo } from './UserLogo/UserLogo';
// import { SettingModal } from '../AllModals/SettingModal/SettingModal';

export const Header = ({ isAuthenticated }) => {
  return (
    <HeaderContainer className="container">
      
          <HeaderLogo isAuthenticated={isAuthenticated} />
          {isAuthenticated ? <UserLogo /> : <UserAuth />}
  
    </HeaderContainer>
  
  );
};
