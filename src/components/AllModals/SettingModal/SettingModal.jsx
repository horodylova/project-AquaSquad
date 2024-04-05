import React, { useRef }from 'react';
import close from '../../../Icons/close-cross.svg';
import download from '../../../Icons/arrow-download.svg';

import {
  CloseBtn,
  ContainerAvatar,
  ContainerSettings,
  WrapperUpload,
  Title,
  TitlePart,
  HoverCloseBtn,
} from './SettingModal.styled';
import { FormaUpdateUserProfile } from './FormaSettingModal/FormaSettingmodal';
import { useDispatch, useSelector } from 'react-redux';
import { setModalType, setOpenModal } from '../../../redux/modals/modalSlice';
import {
  selectIsOpenModal,
  selectIsModalType,
} from '../../../redux/modals/modalSelectors';
import { selectUserProfile } from "../../../redux/auth/authSelectors";
// import { updateUserAvatar } from '../../../redux/auth/authOperations';


export const SettingModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(selectIsOpenModal);
  const typeOfModal = useSelector(selectIsModalType);
  const userProfile = useSelector(selectUserProfile);
   const filePecker = useRef(null);
  // const avatar = userProfile.avatar;

  const defaultUserImage = 'https://avatar.iran.liara.run/public/6';

  // const handleChange = e => {
  //   const formaData = new FormData();
  //   formaData.append('avatar', e.target.files[0]);
  //   if (e.target.files[0]) {
  //     dispatch(updateUserAvatar(formaData));
  //   }
  // };

  const handleChange = event => {
    const newUserAvatar = event.target.value;
   dispatch()
  }

  const handleClick = () => {
    filePecker.current.click();
  };

  const handleModalOpen = (typeOfModal) => {
    dispatch(setModalType(typeOfModal));
    dispatch(setOpenModal(false));
  };

  return (
    <ContainerSettings>
      <CloseBtn onClick={() => handleModalOpen('')}>
  
        <HoverCloseBtn>
          <svg width="24" height="24">
            <use href={close + '#icon-close-cross'}></use>
          </svg>
        </HoverCloseBtn>
      </CloseBtn>

      <Title>Setting</Title>
      <TitlePart>Your photo</TitlePart>

      <WrapperUpload>
        <ContainerAvatar>
          
          <img
            src={userProfile.avatar ? userProfile.avatar : defaultUserImage}
            alt="avatar"
            width="80"
          />
        </ContainerAvatar>

        <label>
          <input
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              margin: '-1px',
              border: '0',
              padding: '0',
              whiteSpace: 'nowrap',
              clipPath: 'inset(100%)',
              clip: 'rect(0 0 0 0)',
              overflow: 'hidden',
              display: 'none',
            }}
            ref={filePecker}
            type="file"
            accept=".jpg"
            onChange={handleChange}/// need to write logic
          />
          <button type="button" style={{ border: 'none' }} onClick={handleClick}>
      

            <svg width="16" height="16">
              <use href={download + '#icon-arrow-up'}></use>
            </svg>

            <span style={{ color: '#407BFF' }}>Upload a photo</span>
          </button>
        </label>
      </WrapperUpload>

      <FormaUpdateUserProfile/>
    </ContainerSettings>
  );
};
