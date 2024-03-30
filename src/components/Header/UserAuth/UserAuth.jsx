import { RouterLink, HeaderIcon } from './UserAuth.styled';
import user from '../../../Icons/user_outline.svg';

export const UserAuth = () => (
  <RouterLink to="/signin">
    Sign in
    <HeaderIcon>
      <use href={user + '#icon-outline'}></use>
    </HeaderIcon>
  </RouterLink>
);
