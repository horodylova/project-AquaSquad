import React from 'react';
// import { Title } from 'CommonStyle/Title/Title.styled';
// import { TitlePart } from '../DailyNorma/DailyNorma.styled';
import close from "../../../Icons/close-cross.svg";
import download from "../../../Icons/arrow-download.svg";
import { ContainerSettings,UserPic,UploadContainer,UploadIcon, CloseBtn, Title, TitlePart, UploadWrapper,AvatarContainer,UploadText,UploadBox } from './SettingModal.styled';

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
        
          <svg width="24" height="24">
            <use href={close + '#icon-close-cross'}></use>
          </svg>
        
          </CloseBtn>
          
          <Title>Setting</Title>
          <TitlePart>Your photo</TitlePart>
      
          <UploadWrapper>
              
         <AvatarContainer>
        
            <UserPic>
              <img src={'https://avatar.iran.liara.run/public/6'} alt=""  />
            </UserPic>
          
              </AvatarContainer> 
              
         <UploadBox>
                  <label htmlFor="fileInput">
                      
            <UploadContainer>
              <UploadIcon>
                <svg  width="16" height="16">
            <use href={download + '#icon-arrow-up'}></use>
          </svg>
              </UploadIcon>
              <UploadText>Upload a photo</UploadText>
                      </UploadContainer>
                      
          </label>

          {/* <input
            id="fileInput"
            className={`${css.modal_list_input} ${css.modal_list_upload_input}`}
            type="file"
            name="photo"
            accept="image/jpeg,image/png,image/jpg"
            onChange={handleFileChange}
          /> */}
        </UploadBox> 
      </UploadWrapper>
      {/* <ModalForm />  */}
    </ContainerSettings>
  );
};

