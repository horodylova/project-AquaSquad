// import { useState } from 'react';

import { Input } from '../Input.styled';
import { PasswordInputStyled } from './PasswordInput.styled';
import eye from "../../../../Icons/eye-crossed.svg";
// import sprite from '../../../img/sprite.svg';

export const PasswordInput = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

  return (
    <PasswordInputStyled>
          <Input  type='text'/>
          {/* <Input type={showPassword ? 'text' : 'password'} {...fields} /> */}
          <button  type="button">
              {/* <button onClick={togglePassword} type="button"></button> */}
        <svg>
                  <use href={eye +  '#icon-eye-crossed'}></use>
                  {/* <use href={sprite + (showPassword ? '#eye' : '#eye-slash')}></use> */}
        </svg>
      </button>
    </PasswordInputStyled>
  );
};

