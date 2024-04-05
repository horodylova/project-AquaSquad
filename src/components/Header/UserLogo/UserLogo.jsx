import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUserProfile } from '../../../redux/auth/authSelectors';
// import { AvatarGenerator } from 'random-avatar-generator';
import Avatar, { genConfig } from 'react-nice-avatar'

import {
  UserName,
  UserLogoBtn,
  UserLogoIcon,
  UserLogoContainer,
  // Avatar,
} from './UserLogo.styled';

import arrow from '../../../Icons/solid.svg';
import arrowup from '../../../Icons/arrow-up.svg';
import { UserLogoPopUp } from '../../AllModals/UserLogoModal/UserLogoPopUp';

function emailUsername(emailAddress) {
  return emailAddress.split('@')[0];
};




export const UserLogo = () => {
  const userProfile = useSelector(selectUserProfile);
  const name = userProfile.username;
  useEffect(() => {
     
     },
    []);
  const email = userProfile.email;
  const avatar = userProfile.avatar;
  const enteredUserEmail = emailUsername(email);
  const [isOpen, setIsOpen] = useState(false);

  // const generator = new AvatarGenerator();
  const config = genConfig();

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
    setIsOpen(!isOpen);
  };

  // const avatarPlaceholder = generator.generateRandomAvatar();

  return (
    <UserLogoContainer>
      <UserLogoBtn onClick={toggleMenu} aria-label="User Logo">
        <UserName>{makeUserName()}</UserName>

        {/* <UserAvatar src={avatar ? avatar : avatarPlaceholder} alt="Avatar" /> */}
        <Avatar style={{width: '28px',
  height: '28px',
  borderRadius: '50%',
  marginRight: '4px'}} />
        {/* <Avatar style={{ width: '8rem', height: '8rem' }} {...config} /> */}

        <UserLogoIcon>
          {isOpen ? (
            <use href={arrowup + '#icon-arrow-up'}></use>
          ) : (
            <use href={arrow + '#icon-arrow-down'}></use>
          )}
        </UserLogoIcon>
      </UserLogoBtn>
      {isOpen && <UserLogoPopUp />}
    </UserLogoContainer>
  );
};
