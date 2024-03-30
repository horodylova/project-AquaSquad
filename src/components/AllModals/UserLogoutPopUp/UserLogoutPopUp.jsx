import React from 'react';
// import cross from '../../../Icons/close-cross.svg';
import {
  LogoutModal,
  HeadingOfLogOutModal,
  DivOfHeadingOfLogOutModal,
  BtnOfCloseOfLogOutModal,
  ParagraphOfExit,
  BtnOfExit,
  BtnOfCancelModalLogOut,
  DivOfBtns,
} from './UserLogoutPopUp.styled';
// import { useModal } from 'context/modalContext';
// import { useNavigate } from 'react-router-dom';

export const UserLogoutPopUp = () => {
  // const { closeModal } = useModal();
  // const navigate = useNavigate();

  // const handleLogout = () => {
    // Удаление токена из локального хранилища
    // localStorage.removeItem('token'); // Замените 'your_token_key' на ваш ключ токена
    // Дополнительно, вы можете выполнить другие действия, связанные с выходом пользователя

    // Перенаправление пользователя на страницу входа или другую страницу
  //   navigate('/signin'); // Замените '/login' на путь к вашей странице входа
  //   closeModal();
  // };

  return (
    <LogoutModal>
      <DivOfHeadingOfLogOutModal>
        <HeadingOfLogOutModal>Log out</HeadingOfLogOutModal>
        {/* <BtnOfCloseOfLogOutModal onClick={closeModal}> */}
        <BtnOfCloseOfLogOutModal>
          {/* <svg>
            <use href={cross + '#icon-close-cross'}></use>
          </svg> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#407BFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BtnOfCloseOfLogOutModal>
      </DivOfHeadingOfLogOutModal>
      <ParagraphOfExit>Do you really want to leave?</ParagraphOfExit>
      <DivOfBtns>
        <BtnOfCancelModalLogOut>
          {/* <BtnOfCancelModalLogOut onClick={closeModal}> */}
          Cancel
        </BtnOfCancelModalLogOut>
        {/* <BtnOfExit onClick={handleLogout}>Log out</BtnOfExit> */}
        <BtnOfExit>Log out</BtnOfExit>
      </DivOfBtns>
    </LogoutModal>
  );
};




// // import ReactModal from 'react-modal';

// import {
//   LogOutBtns,
//   LogOutClose,
//   LogOutHeader,
//   LogOutText,
//     LogOutWindow,
//     HoverCloseBtn,
//   Button
// } from './UserLogoutPopUp.styled';
// // import sprite from '../../../img/sprite.svg';
// // import { HoverCloseBtn } from 'CommonStyle/Buttons/Button.styled';
// // import Button from 'CommonStyle/Button';

// // ReactModal.setAppElement('#root');

// export const UserLogoutModal = () => {
  
  

//   return (
//     <LogOutWindow>
//       <LogOutHeader>
//         <p>Log out</p>
//         <LogOutClose >
//           <HoverCloseBtn>
//             <svg>
//               <use href={cross + '#icon-close-cross'}></use>
//             </svg>
//           </HoverCloseBtn>
//         </LogOutClose>
//       </LogOutHeader>
//       <LogOutText>
//         <p>Do you really want to leave?</p>
//       </LogOutText>
//       <LogOutBtns>
//         <Button >
//           Cancel
//         </Button>
//         <Button >
//           Log out
//         </Button>
//       </LogOutBtns>
//     </LogOutWindow>
//   );
// };


