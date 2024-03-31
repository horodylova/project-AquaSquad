import React from 'react';
// import { Title } from 'CommonStyle/Title/Title.styled';
// import { TitlePart } from '../DailyNorma/DailyNorma.styled';
import close from "../../../Icons/close-cross.svg";
import download from "../../../Icons/arrow-download.svg";
import {
  CloseBtn,
  ContainerAvatar,
  ContainerSettings,
    WrapperUpload,
    Title,
  TitlePart
} from './SettingModal.styled';
// import Icons from '../../../img/sprite.svg';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectorUserProfile } from 'redux/auth/selectors';
// import { updateAvatarThunk } from 'redux/auth/thunk';
// import FormaUpdateUserProfile from './FormaUpdateUserProfile';
// import { ModalContext } from 'components/ModalContext';
// import { HoverCloseBtn } from 'CommonStyle/Buttons/Button.styled';

export const SettingModal = () => {
  

  return (
      <ContainerSettings>
          
      <CloseBtn>
        {/* <HoverCloseBtn> */}
          <svg width="24" height="24">
            <use href={close + '#icon-close-cross'}></use>
          </svg>
        {/* </HoverCloseBtn> */}
          </CloseBtn>
          

      <Title>Setting</Title>
          <TitlePart $marginBottom="8px">Your photo</TitlePart>
          
      <WrapperUpload>
        <ContainerAvatar>
          
            <img src={"../../../Images/userPic.png"} alt="avatar" width={80} />
          
        </ContainerAvatar>

        <label>
          <input
            className="visually-hidden"
            // ref={filePecker}
            type="file"
            accept=".jpg"
                  />
                  
          <button type="button">
            <svg width="16" height="16">
              <use href={download + '#arrow-up'}></use>
            </svg>
            <span>Upload a photo</span>
                  </button>
                  
              </label>
              
          </WrapperUpload>
          
          {/* <FormaUpdateUserProfile /> */}
          
    </ContainerSettings>
  );
};

