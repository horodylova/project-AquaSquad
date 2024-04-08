import Modal from 'react-modal';
import {
  DeleteModalContainer,
  DeleteModalTitle,
  DelBtn,
  CancelBtn,
  TitleSvgContainer,
  DeleteModalText,
  BtnContainer,
} from './DeleteEntryModal.styled';
import { useDispatch } from 'react-redux';

import { deleteWater } from '../../../redux/water/waterOperations';
import sprite from '../../../Icons/signIn-signUp/sprite.svg';

import css from './DeleteEntryModal.module.css';

const DeleteEntryModal = ({ isOpen, onRequestClose, waterId }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteWater(waterId));
    onRequestClose();
  };

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.Overlay}
      className={css.Modal}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
      <DeleteModalContainer>
        <TitleSvgContainer>
          <DeleteModalTitle>Delete entry</DeleteModalTitle>
          <svg onClick={onRequestClose} width="24" height="24" cursor="pointer">
            <use href={`${sprite}#icon-close-cross`} />
          </svg>
        </TitleSvgContainer>

        <DeleteModalText>
          Are you sure you want to delete the entry?
        </DeleteModalText>
        <BtnContainer>
          <DelBtn onClick={handleClick}>Delete</DelBtn>
          <CancelBtn onClick={onRequestClose}>Cancel</CancelBtn>
        </BtnContainer>
      </DeleteModalContainer>
    </Modal>
  );
};

export default DeleteEntryModal;
