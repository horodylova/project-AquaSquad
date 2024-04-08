import {
  LogoutModal,
  HeadingOfLogOutModal,
  DivOfHeadingOfLogOutModal,
  ParagraphOfExit,
  BtnOfExit,
  BtnOfCancelModalLogOut,
  DivOfBtns,
  HoverCloseBtn,
  CloseBtn,
} from './UserLogoutModal.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations';
import { setModalType, setOpenModal } from '../../../redux/modals/modalSlice';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();

  const handleModalOpen = (typeOfModal) => {
    dispatch(setModalType(typeOfModal));
    dispatch(setOpenModal(false));
  };

  return (
    <LogoutModal>
      <DivOfHeadingOfLogOutModal>
        <HeadingOfLogOutModal>Log out</HeadingOfLogOutModal>
        <CloseBtn onClick={() => handleModalOpen('')}>
          <HoverCloseBtn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#407BFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </HoverCloseBtn>
        </CloseBtn>
      </DivOfHeadingOfLogOutModal>
      <ParagraphOfExit>Do you really want to leave?</ParagraphOfExit>
      <DivOfBtns>
        <BtnOfCancelModalLogOut onClick={() => handleModalOpen('')}>
          Cancel
        </BtnOfCancelModalLogOut>

        <BtnOfExit onClick={() => dispatch(logOut())}>Log out</BtnOfExit>
      </DivOfBtns>
    </LogoutModal>
  );
};
