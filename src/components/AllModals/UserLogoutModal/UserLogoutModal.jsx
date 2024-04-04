import React from 'react';
import {
  LogoutModal,
  HeadingOfLogOutModal,
  DivOfHeadingOfLogOutModal,
  BtnOfCloseOfLogOutModal,
  ParagraphOfExit,
  BtnOfExit,
  BtnOfCancelModalLogOut,
  DivOfBtns,
  HoverCloseBtn,
  CloseBtn,
} from './UserLogoutModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setModalType, setOpenModal } from '../../../redux/modals/modalSlice';
import {
  selectIsOpenModal,
  selectIsModalType,
} from '../../../redux/modals/modalSelectors';

export const UserLogoutModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(selectIsOpenModal);
  const typeOfModal = useSelector(selectIsModalType);

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
        <BtnOfCancelModalLogOut>Cancel</BtnOfCancelModalLogOut>

        <BtnOfExit>Log out</BtnOfExit>
      </DivOfBtns>
    </LogoutModal>
  );
};
