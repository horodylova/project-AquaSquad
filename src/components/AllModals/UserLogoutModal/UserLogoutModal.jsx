import React from 'react';
import cross from '../../../Icons/close-cross.svg';

// import ReactModal from 'react-modal';

import {
  LogOutBtns,
  LogOutClose,
  LogOutHeader,
  LogOutText,
    LogOutWindow,
    HoverCloseBtn,
  Button
} from './UserLogoutModal.styled';
// import sprite from '../../../img/sprite.svg';
// import { HoverCloseBtn } from 'CommonStyle/Buttons/Button.styled';
// import Button from 'CommonStyle/Button';

// ReactModal.setAppElement('#root');

export const UserLogoutModal = () => {
  
  

  return (
    <LogOutWindow>
      <LogOutHeader>
        <p>Log out</p>
        <LogOutClose >
          <HoverCloseBtn>
            <svg>
              <use href={cross + '#icon-close-cross'}></use>
            </svg>
          </HoverCloseBtn>
        </LogOutClose>
      </LogOutHeader>
      <LogOutText>
        <p>Do you really want to leave?</p>
      </LogOutText>
      <LogOutBtns>
        <Button >
          Cancel
        </Button>
        <Button >
          Log out
        </Button>
      </LogOutBtns>
    </LogOutWindow>
  );
};


