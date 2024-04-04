import React, { useEffect } from 'react';
import { PasswordInput } from './PasswordInput';
import { ButtonSettingsForma } from './ButtonSettingsForma.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserProfile } from '../../../../redux/auth/authSelectors';
// import { updateUserProfileSchema } from '../validationSchema';
import { updateUserProfileInfo } from '../../../../redux/auth/authOperations';
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
  EyeSvg
} from './FormaSettingModal.styled';
import { Form } from 'react-router-dom';

const emailPatern = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
const showPassword = true;

export const FormaUpdateUserProfile = () => {
  const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

              <FormLabel>
                Your name
                <InputSettingEdit {...register('name')} type="text"
                    placeholder="Your name"/>
          
               
              </FormLabel>

              <FormLabel>
              
                E-mail
                <InputSettingEdit {...register('email', {
                    pattern: {
                      value: emailPatern,
                      message: 'Enter a correct email, example@gmail.com',
                    },
                  })}
                  type="text"
                  placeholder="Your name"/>
              </FormLabel>

              <div
                style={{
                  position: 'relative',
                  left: '350px',
                  top: '15px',
                }}
              >
                {errors.email && (
                  <p
                    style={{
                      color: 'red',
                      position: 'absolute',
                      top: '-15px',
                      marginBottom: 0,
                    }}
                  >
                    {errors.email.message || 'Error!'}
                  </p>
                )}
              </div>
            </ContainerForm>
          </WrapperFormaLeft>
          <WrapperFormaRight>
            <TitlePart>Password</TitlePart>

           <FormLabel> 
              Oudated password
             <InputSettingEdit  {...register('oldPassword')}
                type="text"
                placeholder="Your name"/>
                <div style={{position: 'relative'}}>
                {/* onClick={() => togglePasswordVisibility('password') */}
                {/* showPassword['password'] */}
                  {showPassword ? (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOn`} />
                    </EyeSvg>
                  ) : (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOff`} />
                    </EyeSvg>
                  )}
                </div>
            </FormLabel>
            <FormLabel>
            
              New Password
              <InputSettingEdit {...register('newPassword')}
                type="text"
                placeholder="Your name"/>
              <div style={{position: 'relative'}}>
                {/* onClick={() => togglePasswordVisibility('password') */}
                {/* showPassword['password'] */}
                  {showPassword ? (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOn`} />
                    </EyeSvg>
                  ) : (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOff`} />
                    </EyeSvg>
                  )}
                </div>
            </FormLabel>
            <FormLabel>
            
              Repeat new password
              <InputSettingEdit {...register('repeatPassword')}
                type="text"
                placeholder="Your name"/>
              <div style={{position: 'relative'}}>
                {/* onClick={() => togglePasswordVisibility('password') */}
                {/* showPassword['password'] */}
                  {showPassword ? (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOn`} />
                    </EyeSvg>
                  ) : (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOff`} />
                    </EyeSvg>
                  )}
                </div>
            </FormLabel>
          </WrapperFormaRight>
        </WrapperFormaMain>
        <ButtonSettingsForma type="submit" disabled={isSubmitting}>
        Save
          </ButtonSettingsForma>
      </WrapperForma>
    </form>
  );

  // return
  // <form onSubmit={handleSubmit}>

  //   <WrapperForma>
  //     <WrapperFormaMain>
  //       <WrapperFormaLeft>
  //         <TitlePart>
  //           {/* <TitlePart $marginBottom="0px" $marginTop="0px"> */}
  //           Your gender identity
  //          </TitlePart>

  //         <ContainerForm>
  //           <WrapperRadio>
  //             {/* <WrapperRadio $marginBottom="28px"> */}
  //             <FormLabelRadio>
  //               <input
  //                 style={{
  //                   position: 'absolute',
  //                   width: '1px',
  //                   height: '1px',
  //                   margin: '-1px',
  //                   border: '0',
  //                   padding: '0',
  //                   whiteSpace: 'nowrap',
  //                   clipPath: 'inset(100%)',
  //                   clip: 'rect(0 0 0 0)',
  //                   overflow: 'hidden',
  //                 }}
  //                 type="radio"
  //                 name="gender"
  //                 value="female"
  //                 onChange={handleChange}
  //                 checked={values.gender === 'female'}
  //               />
  //               <div></div>
  //               <span>Woman</span>
  //             </FormLabelRadio>

  //             <FormLabelRadio>
  //                <input
  //                 style={{
  //                   position: 'absolute',
  //                   width: '1px',
  //                   height: '1px',
  //                   margin: '-1px',
  //                   border: '0',
  //                   padding: '0',
  //                   whiteSpace: 'nowrap',
  //                   clipPath: 'inset(100%)',
  //                   clip: 'rect(0 0 0 0)',
  //                   overflow: 'hidden',
  //                 }}
  //                 type="radio"
  //                 name="gender"
  //                 value="male"
  //                 onChange={handleChange}
  //                 // checked="checked"
  //                  checked={values.gender === 'male'}
  //               />
  //               <div></div>
  //               <span>Man</span>
  //              </FormLabelRadio>
  //            </WrapperRadio>

  //           <FormLabel>

  //             Your name
  //             <InputSettingEdit
  //               type="text"
  //               name="name"
  //               placeholder={userProfile.username ?? 'User Name'}
  //               value={values.name}
  //               onChange={handleChange}
  //               onBlur={handleBlur}
  //               //   $error={touched.name && errors.name}
  //             />
  //             {/* {touched.name && errors.name && (
  //               <InputError>{errors.name}</InputError> }
  //             ) */}
  //           </FormLabel>

  //           <FormLabel   >
  //             {/* <FormLabel $fontSize="18px" $fontWeight="500"> */}
  //            E-mail
  //             <InputSettingEdit
  //               type="text"
  //         placeholder={userProfile.email ? userProfile.email : "updateYourEmail@gmail.com"}
  //         id="email"
  //         name="email"
  //         onBlur={handleBlur}
  //         onChange={handleChange}
  //         value={values.email}
  //               //  $error={touched.email && errors.email}
  //              />
  //               {/* {touched.email && errors.email && (
  //                 <InputError>{errors.email}</InputError>
  //              )}  */}
  //           </FormLabel>
  //         </ContainerForm>
  //       </WrapperFormaLeft>

  //       <WrapperFormaRight>
  //         <TitlePart>Password</TitlePart>

  //         <FormLabel>
  //           Outdated password:
  //           <PasswordInput
  //             name="oldPassword"
  //             value={values.oldPassword || ''}
  //             onChange={handlePasswordChange}
  //             placeholder="Password"
  //             id="oldPassword"
  //             onBlur={handleBlur}
  //           />
  //           {/* {touched.oldPassword && errors.oldPassword && (
  //             <InputError>{errors.oldPassword}</InputError>
  //           )} */}
  //         </FormLabel>

  //         <FormLabel>
  //           New Password:
  //           {/* <PasswordInputWrapper> */}
  //           <PasswordInput
  //             autoComplete="off"
  //               name="newPassword"
  //               value={values.newPassword}
  //               onChange={handlePasswordChange}
  //               onBlur={handleBlur}
  //               placeholder="New password"
  //             // $error={touched.newPassword && errors.newPassword}
  //           />
  //           {/* {values.newPassword && (
  //               <PasswordToolTip
  //                 score={values.strengthScore}
  //                 password={values.newPassword}
  //               />
  //             )} */}
  //            {/* </PasswordInputWrapper>  */}
  //           {/* {values.newPassword && (
  //             <PasswordMeter $score={values.strengthScore} />
  //           )}
  //           {errors.newPassword && (
  //             <InputError>{errors.newPassword}</InputError>
  //           )} */}
  //         </FormLabel>

  //         <FormLabel>
  //           Repeat new password:
  //           <PasswordInput
  //             autoComplete="off"
  //             name="repeatPassword"
  //             value={values.repeatPassword}
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //             placeholder="Repeat password"
  //             // $error={touched.repeatPassword && errors.repeatPassword}
  //           />
  //           {/* {touched.repeatPassword && errors.repeatPassword && (
  //             <InputError>{errors.repeatPassword}</InputError>
  //           )} */}
  //         </FormLabel>
  //       </WrapperFormaRight>
  //     </WrapperFormaMain>

  //     <ButtonSettingsForma type="submit" onSubmit={handleSubmit}>Save</ButtonSettingsForma>

  //   </WrapperForma>
  // </form>
};
