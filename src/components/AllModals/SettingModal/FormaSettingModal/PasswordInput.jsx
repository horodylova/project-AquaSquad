// import { useState } from 'react';

import { Input } from '../Input.styled';
import { PasswordInputStyled } from './PasswordInput.styled';

// import sprite from '../../../img/sprite.svg';

const PasswordInput = () => {
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
                  <use href={sprite +  '#eye'}></use>
                  {/* <use href={sprite + (showPassword ? '#eye' : '#eye-slash')}></use> */}
        </svg>
      </button>
    </PasswordInputStyled>
  );
};

export default PasswordInput;