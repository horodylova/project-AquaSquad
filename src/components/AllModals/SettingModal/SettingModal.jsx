import React from 'react';
import close from "../../../Icons/close-cross.svg";
import download from "../../../Icons/arrow-download.svg";
import {
  CloseBtn,
  ContainerAvatar,
  ContainerSettings,
  WrapperUpload,
  Title,
  TitlePart,
  HoverCloseBtn
} from './SettingModal.styled';
import { FormaUpdateUserProfile } from "./FormaSettingModal/FormaSettingmodal";

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
        {/* <CloseBtn
        onClick={() => {
          onClose();
        }}
      > */}
        <HoverCloseBtn>
          <svg width="24" height="24">
            <use href={close + '#icon-close-cross'}></use>
          </svg>
        </HoverCloseBtn>
      </CloseBtn>

      <Title>Setting</Title>
      <TitlePart >Your photo</TitlePart> 

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
          
            <img src={'https://avatar.iran.liara.run/public/6'} alt="avatar" width="80" />
          
        </ContainerAvatar>

        <label>
          <input
            style={{position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  whiteSpace: 'nowrap',
  clipPath: 'inset(100%)',
  clip: 'rect(0 0 0 0)',
              overflow: 'hidden',
            display: "none"}}
            // className="visually-hidden"
            // ref={filePecker}
            type="file"
            accept=".jpg"
            
            // onChange={handelChange}
          />
<button type="button" style={{border: "none"}}>
          {/* <button type="button" onClick={handlerClick}> */}

            <svg width="16" height="16">
              <use href={download + '#icon-arrow-up'}></use>
            </svg>

            <span style={{color: "#407BFF"}}>Upload a photo</span>

          </button>

        </label>
      </WrapperUpload>


      <FormaUpdateUserProfile/>
      {/* <FormaUpdateUserProfile
        onClose={() => {
          onClose();
        }}
      /> */}
    </ContainerSettings>


    
    
    //   <ContainerSettings>
    //   <CloseBtn>
        
    //       <svg width="24" height="24">
    //         <use href={close + '#icon-close-cross'}></use>
    //       </svg>
        
    //       </CloseBtn>
          
    //       <Title>Setting</Title>
    //       <TitlePart>Your photo</TitlePart>
      
    //       <UploadWrapper>
              
    //      <AvatarContainer>
        
    //         <UserPic>
    //           <img src={'https://avatar.iran.liara.run/public/6'} alt=""  />
    //         </UserPic>
          
    //           </AvatarContainer> 
              
    //      <UploadBox>
    //               <label htmlFor="fileInput">
                      
    //         <UploadContainer>
    //           <UploadIcon>
    //             <svg  width="16" height="16">
    //         <use href={download + '#icon-arrow-up'}></use>
    //       </svg>
    //           </UploadIcon>
    //           <UploadText>Upload a photo</UploadText>
    //                   </UploadContainer>
                      
    //       </label>

    //       <input
    //         id="fileInput"
    //         // className={`${css.modal_list_input} ${css.modal_list_upload_input}`}
    //         type="file"
    //         name="photo"
    //         accept="image/jpeg,image/png,image/jpg"
    //         // onChange={handleFileChange}
    //       />
    //     </UploadBox> 
    //   </UploadWrapper>
    //   {/* <ModalForm />  */}
    // </ContainerSettings>
  );
};

