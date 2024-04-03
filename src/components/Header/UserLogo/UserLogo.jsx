import React, {useState } from 'react';
// import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserProfile } from '../../../redux/auth/authSelectors';


import {
  UserName,
  UserLogoBtn,
  UserLogoIcon,
  UserLogoContainer,
  HeaderIcon,
  UserAvatar
} from './UserLogo.styled';

import arrow from '../../../Icons/solid.svg';
import user from '../../../Icons/user_outline.svg';
import arrowup from "../../../Icons/arrow-up.svg"
import { UserLogoPopUp } from "../../AllModals/UserLogoModal/UserLogoPopUp";



export const UserLogo = () => {

  const userProfile = useSelector(selectUserProfile);
  const name = userProfile.username;
  const avatar = userProfile.avatar;
  const enteredUserName =  name.split(' ').slice(0, 1);
  // const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  //  const handleButtonClick = e => {
  //   setIsOpen(!isOpen);
  //   e.stopPropagation();
  // };

  // useEffect(() => {
  //   const handleEscapeKey = e => {
  //     if (e.key === 'Escape') {
  //       setIsOpen(false);
  //     }
  //   };
  //   const closeModal = e => {
  //     if (modalRef.current && !modalRef.current.contains(e.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener('keydown', handleEscapeKey);
  //     document.addEventListener('click', closeModal);
  //   }

  //   return () => {
  //     document.removeEventListener('keydown', handleEscapeKey);
  //     document.removeEventListener('click', closeModal);
  //   };
  // }, [isOpen, setIsOpen, modalRef]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserLogoContainer>
      <UserLogoBtn onClick={toggleMenu}
       /* <UserLogoBtn onClick={e => handleButtonClick(e)} */
        /* ref={modalRef} */
        aria-label="User Logo">
        <UserName>{name ? enteredUserName : "User Name"}</UserName>
        {avatar ? (
          <UserAvatar src={avatar} alt="Avatar" />
        ) : (
          <HeaderIcon>
          <use href={user + '#icon-outline'}></use>
        </HeaderIcon>
        )}
        
        <UserLogoIcon >
          {isOpen ? <use href={arrowup + '#icon-arrow-up'}></use> :
            <use href={arrow + '#icon-arrow-down'}></use>
          }
        </UserLogoIcon>
      </UserLogoBtn>
      {isOpen && <UserLogoPopUp />}
       {/* <UserLogoPopUp isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
      
    </UserLogoContainer>
  );
};


