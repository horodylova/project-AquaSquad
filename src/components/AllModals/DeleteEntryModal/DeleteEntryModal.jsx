import Modal from 'react-modal';
import { useState } from 'react';
import {
  DeleteModalContainer,
  DeleteModalTitle,
  DelBtn,
  CancelBtn,
  TitleSvgContainer,
  DeleteModalText,
  BtnContainer,
} from './DeleteEntryModal.styled';

import sprite from '../../../Icons/signIn-signUp/sprite.svg';

import css from './DeleteEntryModal.module.css';

const DeleteEntryModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  Modal.setAppElement('#root');

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal
        isOpen={isModalOpen}
        overlayClassName={css.Overlay}
        className={css.Modal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <DeleteModalContainer>
          <TitleSvgContainer>
            <DeleteModalTitle>Delete entry</DeleteModalTitle>
            <svg onClick={closeModal} width="24" height="24" cursor="pointer">
              <use href={`${sprite}#icon-close-cross`} />
            </svg>
          </TitleSvgContainer>

          <DeleteModalText>
            Are you sure you want to delete the entry?
          </DeleteModalText>
          <BtnContainer>
            <DelBtn onClick={closeModal}>Delete</DelBtn>
            <CancelBtn onClick={closeModal}>Cancel</CancelBtn>
          </BtnContainer>
        </DeleteModalContainer>
      </Modal>
    </>
  );
};

export default DeleteEntryModal;
