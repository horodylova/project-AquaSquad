import { useRef } from 'react';
import close from '../../../Icons/close-cross.svg';
import download from '../../../Icons/arrow-download.svg';
import axios from 'axios';

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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

import { setModalType, setOpenModal } from '../../../redux/modals/modalSlice';
import { selectUserProfile } from '../../../redux/auth/authSelectors';
import { updateAvatar } from '../../../redux/auth/authOperations';

export const SettingModal = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);
  const filePecker = useRef(null);
  const userAvatar = userProfile.avatar;
  const defaultUserImage = 'https://avatar.iran.liara.run/public/6';
  const avatarURL = `https://water-tracker-backend-ob6w.onrender.com/${userAvatar}`;

 
  
  
  // const handleChange = async (img) => {
    
  //   const data = new FormData();
  //   data.append("avatar", img);
    // data.append("upload_preset", "rem39mcp");
    // data.append("cloud_name", "ddreudt2q");
    
    // const response = await fetch(
    //   "  https://api.cloudinary.com/v1_1/ddreudt2q/image/upload/",
    //   {
    //     method: "post",
    //     body: data,
        
    //   }
      

    // );
    // const dataOfImg = await response.json();
    

      // dispatch(updateAvatar(data));
  
    
  // };
 

  
  const handleChange = async (e) => {
    const formaData = new FormData();
    console.log(e.target.files[0]);
    formaData.append('avatar', e.target.files[0]);
    if (e.target.files[0]) {
      dispatch(updateAvatar(formaData));
      console.log(formaData);
    };

    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "rem39mcp");
    data.append("cloud_name", "ddreudt2q");
    
    const response = await fetch(
      "  https://api.cloudinary.com/v1_1/ddreudt2q/image/upload/",
      {
        method: "post",
        body: data,
        
      }
      

    );
    const {url} = await response.json();
    
  
    console.log(url);
    
  }
  

  
  
  
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
             src={avatarURL ? avatarURL : defaultUserImage}
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
            accept="image/png, image/jpeg"
            onChange={handleChange}
            
          />
          <button
            type="button"
            style={{ border: 'none' }}
            onClick={handleClick}
          >
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
