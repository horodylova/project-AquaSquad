import { RouterLink, HeaderIcon } from './UserAuth.styled';
import user from '../../../Icons/user_outline.svg';

export const UserAuth = () => (
<<<<<<< HEAD
  <RouterLink to="/login">
=======
  <RouterLink to="/signin">
>>>>>>> 82f1802a8bd39448028afaef264b4e6fb1228ac8
    Sign in
    <HeaderIcon>
      <svg>
        <use href={user + '#icon-outline'}></use>
      </svg>
    </HeaderIcon>
  </RouterLink>
  // <RouterLink to="/login">
  //   Sign in
  //   <HeaderIcon>
  //     <use href={user + '#icon-outline'}></use>
  //   </HeaderIcon>
  // </RouterLink>
);
