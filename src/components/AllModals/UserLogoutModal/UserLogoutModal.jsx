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
import Modal from 'react-modal';

export const UserLogoutModal = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const ModalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.80)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      padding: '0',
      position: 'initial',
      borderRadius: '10px',
      background: 'var(--white-color)',
      boxShadow: '0px 4px 4px 0px rgba(64, 123, 255, 0.30)',
      maxHeight: '95vh',
      overflowY: 'auto',
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={ModalStyle}>
      <LogoutModal>
        <DivOfHeadingOfLogOutModal>
          <HeadingOfLogOutModal>Log out</HeadingOfLogOutModal>
          <CloseBtn onClick={onRequestClose}>
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
          <BtnOfCancelModalLogOut onClick={onRequestClose}>
            Cancel
          </BtnOfCancelModalLogOut>

          <BtnOfExit onClick={() => dispatch(logOut())}>Log out</BtnOfExit>
        </DivOfBtns>
      </LogoutModal>
    </Modal>
  );
};
