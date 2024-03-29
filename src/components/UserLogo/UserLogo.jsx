import {
  UserName,
  UserLogoBtn,
  UserLogoIcon,
  UserLogoContainer,
  HeaderIcon,
} from './UserLogo.styled';

import arrow from '../../Icons/solid.svg';
import user from '../../Icons/user_outline.svg';

export const UserLogo = () => {
  return (
    <UserLogoContainer>
      <UserLogoBtn>
        <UserName>User name</UserName>
        <HeaderIcon>
          <use href={user + '#icon-outline'}></use>
        </HeaderIcon>
        <UserLogoIcon>
          <use href={arrow + '#icon-arrow-down'}></use>
        </UserLogoIcon>
      </UserLogoBtn>
    </UserLogoContainer>
  );
};


