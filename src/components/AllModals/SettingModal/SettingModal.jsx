import React from 'react';
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

export const SettingModal = () => {
  const dispatch = useDispatch();
  const modalState = useSelector(selectIsOpenModal);
  const typeOfModal = useSelector(selectIsModalType);

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
          {/* {!userProfile.avatarURL && (
            <div>
              {userProfile.userName
                ? userProfile.userName.split('')[0].toUpperCase()
                : 'V'}
            </div>
          )} */}
          {/* {userProfile.avatarURL && (
            <img src={userProfile.avatarURL} alt="avatar" width={80} />
          )} */}

          <img
            src={'https://avatar.iran.liara.run/public/6'}
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
            // className="visually-hidden"
            // ref={filePecker}
            type="file"
            accept=".jpg"

            // onChange={handelChange}
          />
          <button type="button" style={{ border: 'none' }}>
            {/* <button type="button" onClick={handlerClick}> */}

            <svg width="16" height="16">
              <use href={download + '#icon-arrow-up'}></use>
            </svg>

            <span style={{ color: '#407BFF' }}>Upload a photo</span>
          </button>
        </label>
      </WrapperUpload>

      <FormaUpdateUserProfile />
    </ContainerSettings>
  );
};
