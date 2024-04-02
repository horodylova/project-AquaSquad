// import { useState } from 'react';

import { PasswordInputStyled } from './PasswordInput.styled';
import { Input } from '../Input.styled';
import eye from "../../../../Icons/eye-crossed.svg";
// import sprite from '../../../img/sprite.svg';

export const PasswordInput = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

  return (
    <PasswordInputStyled>
          {/* <Input type={showPassword ? 'text' : 'password'} {...fields} /> */}
              {/* <button onClick={togglePassword} type="button"></button> */}
            {/* <use href={sprite + (showPassword ? '#eye' : '#eye-slash')}></use> */}
          <Input  type='text'/>
          <button  type="button">
        <svg>
                  <use href={eye +  '#icon-eye-crossed'}></use>
         </svg> 
      </button>
    </PasswordInputStyled>
  );
};

