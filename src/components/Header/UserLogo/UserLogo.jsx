// import Avatar, { genConfig } from 'react-nice-avatar';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserProfile } from '../../../redux/auth/authSelectors';
import {
  UserName,
  UserLogoBtn,
  UserLogoIcon,
  UserLogoContainer,
  UserAvatar,
} from './UserLogo.styled';
import arrow from '../../../Icons/solid.svg';
import arrowup from '../../../Icons/arrow-up.svg';
import { UserLogoPopUp } from '../../AllModals/UserLogoModal/UserLogoPopUp';

// const config = genConfig();

export const UserLogo = () => {
  const userProfile = useSelector(selectUserProfile);
  const name = userProfile.username;
  const email = userProfile.email;
  const userAvatar = userProfile.avatarURL;
  const enteredUserEmail = emailUsername(email);
  const avatarURL = `https://water-tracker-backend-ob6w.onrender.com/${userAvatar}`;
  const defaultUserImage = 'https://avatar.iran.liara.run/public/6';
  const [isModalOpen, setIsModalOpen] = useState(false);

  function emailUsername(emailAddress) {
    return emailAddress.split('@')[0];
  }

  const makeUserName = () => {
    if (name) {
      return name;
    }
    if (!name && email) {
      return enteredUserEmail || '';
    } else {
      return 'User Name';
    }
  };

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <UserLogoContainer>
      <UserLogoBtn onClick={toggleMenu} aria-label="User Logo">
        <UserName>
          {userProfile.name ? userProfile.name : makeUserName()}
        </UserName>

        {/* {userAvatar ? 
          <UserAvatar src={avatarURL} />
        : 
          <Avatar
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              marginRight: '4px',
            }}
            {...config}
          />
        } */}

        <UserAvatar src={userAvatar ? avatarURL : defaultUserImage} />

        <UserLogoIcon>
          {isModalOpen ? (
            <use href={arrowup + '#icon-arrow-up'}></use>
          ) : (
            <use href={arrow + '#icon-arrow-down'}></use>
          )}
        </UserLogoIcon>
      </UserLogoBtn>

      {isModalOpen && <UserLogoPopUp />}
    </UserLogoContainer>
  );
};
