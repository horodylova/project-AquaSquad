import wheel from '../../../../Icons/settings.svg';
import logout from '../../../../Icons/arrow-logout.svg';
import {
  LogoModalMenu,
  ModalMenuIcon,
  ModalMenuBtn,
} from '../.././HeaderModals/UserLogoModal/UserLogoModal.styled';

export const UserLogoModal = () => {
  return (
    <LogoModalMenu>
      <ModalMenuBtn>
        <ModalMenuIcon>
          <use href={wheel + '#icon-settings'}></use>
        </ModalMenuIcon>
        Setting
      </ModalMenuBtn>

      <ModalMenuBtn>
        <ModalMenuIcon>
          <use href={logout + '#icon-arrow-logout'}></use>
        </ModalMenuIcon>
        Log out
      </ModalMenuBtn>
    </LogoModalMenu>
  );
};
