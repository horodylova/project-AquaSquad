import  { useState } from 'react';
import { ButtonSettingsForma } from './ButtonSettingsForma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../../../redux/auth/authSelectors';
import { useForm } from 'react-hook-form';
import sprite from '../../../../Icons/signIn-signUp/sprite.svg';
import {
  WrapperForma,
  WrapperFormaMain,
  WrapperFormaLeft,
  WrapperFormaRight,
  TitlePart,
  ContainerForm,
  WrapperRadio,
  FormLabelRadio,
  FormLabel,
  InputSettingEdit,
  EyeSvg,
  PasswordLabel
} from './FormaSettingModal.styled';
import { updateUserProfileData } from '../../../../redux/auth/authOperations';

// const emailPatern = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

export const FormaUpdateUserProfile = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const userData = useSelector(selectUserProfile);
  const userCurrentGender = userData.gender;
 

  const togglePasswordVisibility = (inputId) => {
    setShowPassword((prevPasswords) => ({
      ...prevPasswords,
      [inputId]: !prevPasswords[inputId],
    }));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors},
  } = useForm({
    defaultValues: {
      gender: userCurrentGender ? userCurrentGender : 'woman',
      email: userData.email ? userData.email : 'user_email@gmail.com',
      name: userData.name ? userData.name : 'User Name'
    },
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    const { name, gender, email, newPassword, oldPassword } = data;
    dispatch(
      updateUserProfileData({ name, gender, email, newPassword, oldPassword })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WrapperForma>
        <WrapperFormaMain>
          <WrapperFormaLeft>
            <TitlePart>Your gender identity</TitlePart>
            <ContainerForm>
              <WrapperRadio>
                <FormLabelRadio>
                  <input
                    {...register('gender')}
                    type="radio"
                    value="woman"
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
                    }}
                  ></input>
                  <div></div>
                  <span>Woman</span>
                </FormLabelRadio>
                <FormLabelRadio>
                  <input
                    {...register('gender')}
                    type="radio"
                    value="man"
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
                    }}
                  ></input>
                  <div></div>
                  <span>Man</span>
                </FormLabelRadio>
              </WrapperRadio>

              <FormLabel style={{marginBottom: "24px"}}>
                Your name
                <InputSettingEdit style={{marginTop: "8px"}}
                  {...register('name')}
                  type="text"
                  placeholder= 'User Name'
                />
              </FormLabel >

              <FormLabel >
                
                E-mail
                <InputSettingEdit style={{marginTop: "8px"}}
                  {...register('email')}
                  
                  type="text"
                  placeholder='user_email@gmail.com'
                  
                />
                
              </FormLabel>
            </ContainerForm>
          </WrapperFormaLeft>
          <WrapperFormaRight>
            <TitlePart>Password</TitlePart>

            <PasswordLabel $errors={errors.oldPassword} > 
              Outdated password:
              <InputSettingEdit style={{marginTop: "8px"}}
                id="oldPassword"
                {...register('oldPassword', {
                    
                    validate: (val) => {
                      if (watch('newPassword') != val) {
                        return 'Enter your old password';
                      }
                    },
                  })}
                type={showPassword['oldPassword'] ? 'text' : 'password'}
                placeholder="Password"
                $errors={errors.oldPassword}
                
              />
              <div
                style={{ position: 'relative' }}
                onClick={() => togglePasswordVisibility('oldPassword')}
              >
                {showPassword['oldPassword'] ? (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#icon-outlineOn`} />
                  </EyeSvg>
                ) : (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#icon-outlineOff`} />
                  </EyeSvg>
                )}
              </div>
              <div
                style={{
                  position: 'relative',
                }}
              >
                {errors.oldPassword && (
                  <p
                    style={{
                      color: '#EF5050',
                      position: 'absolute',
                      marginBottom: 0,
                      top: '-10px',
                    }}
                  >
                    {errors.oldPassword.message || 'Error!'}
                  </p>
                )}
              </div>
            </PasswordLabel>
            <PasswordLabel id="new" style={{marginTop: "12px"}}>
              New Password:
              <InputSettingEdit style={{marginTop: "8px"}}
                id="newPassword"
                {...register('newPassword', {
                    validate: () => {
                  
                    },
                  }
                )}
                type={showPassword['newPassword'] ? 'text' : 'password'}
                placeholder="Password"
      
              />
              <div
                style={{ position: 'relative' }}
                onClick={() => togglePasswordVisibility('newPassword')}
              >
                {showPassword['newPassword'] ? (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#icon-outlineOn`} />
                  </EyeSvg>
                ) : (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#icon-outlineOff`} />
                  </EyeSvg>
                )}
              </div>
              
            </PasswordLabel>
            <PasswordLabel id="repeat"$errors={errors.repeatPassword} style={{marginTop: "12px"}}>
              
              Repeat new password:
              <InputSettingEdit style={{marginTop: "8px"}}
                id="repeatPassword"
                {...register('repeatPassword', {
                    
                    validate: (val) => {
                      if (watch('newPassword') != val) {
                        return 'Your passwords do no match';
                      }
                    },
                  })}
                $errors={errors.repeatPassword}
                type={showPassword['repeatPassword'] ? 'text' : 'password'}
                placeholder="Password"
              />
              <div
                style={{ position: 'relative' }}
                onClick={() => togglePasswordVisibility('repeatPassword')}
              >
                
                {showPassword['repeatPassword'] ? (
                  <EyeSvg width="16" height="16" >
                    <use href={`${sprite}#icon-outlineOn`} />
                  </EyeSvg>
                ) : (
                  <EyeSvg width="16" height="16">
                    <use href={`${sprite}#icon-outlineOff`} />
                  </EyeSvg>
                )}
              </div>
              <div
                style={{
                  position: 'relative',
                }}
              >
                {errors.repeatPassword && (
                  <p
                    style={{
                      color: '#EF5050',
                      position: 'absolute',
                      marginBottom: 0,
                      top: '-10px',
                    }}
                  >
                    {errors.repeatPassword.message || 'Error!'}
                  </p>
                )}
              </div>
            </PasswordLabel>
          </WrapperFormaRight>
        </WrapperFormaMain>
        <ButtonSettingsForma type="submit" >
          {/* disabled={!isValid} */}
          Save
        </ButtonSettingsForma>
      </WrapperForma>
    </form>
  );
};
