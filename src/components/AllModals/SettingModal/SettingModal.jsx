import { useRef } from 'react';
import download from '../../../Icons/arrow-download.svg';
import Modal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../../Icons/close.svg';
import {
  ContainerAvatar,
  ContainerSettings,
  WrapperUpload,
  Title,
  TitlePart,
  SettingTitleWrp,
  HoverCloseBtn,
} from './SettingModal.styled';
import { FormaUpdateUserProfile } from './FormaSettingModal/FormaSettingmodal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUserProfile } from '../../../redux/auth/authSelectors';
import { updateAvatar } from '../../../redux/auth/authOperations';

export const SettingModal = ({ isOpen, onRequestClose }) => {
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

  const dispatch = useDispatch();
  const userProfile = useSelector(selectUserProfile);
  const filePecker = useRef(null);
  const userAvatar = userProfile.avatarURL;
  const defaultUserImage = 'https://avatar.iran.liara.run/public/6';
  const avatarURLUser = `https://water-tracker-backend-ob6w.onrender.com/${userAvatar}`;

  const handleChange = (e) => {
    const formaData = new FormData();

    formaData.append('avatar', e.target.files[0]);
    if (e.target.files[0]) {
      dispatch(updateAvatar(formaData));
    }
  };

  const handleClick = () => {
    filePecker.current.click();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={ModalStyle}>
      <ContainerSettings>
        <SettingTitleWrp>
          <button onClick={onRequestClose}>
            <HoverCloseBtn>
              <CloseIcon width="24" height="24" />
            </HoverCloseBtn>
          </button>

          <Title>Setting</Title>
        </SettingTitleWrp>
        <TitlePart>Your photo</TitlePart>

        <WrapperUpload>
          <ContainerAvatar>
            <img
              src={userAvatar ? avatarURLUser : defaultUserImage}
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
    </Modal>
  );
};
