import React, {useEffect} from 'react';
import { PasswordInput } from './PasswordInput';
import { ButtonSettingsForma } from './ButtonSettingsForma.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector} from 'react-redux';
import { selectUserProfile } from "../../../../redux/auth/authSelectors";
// import { updateUserProfileSchema } from '../validationSchema';
import { updateUserProfileInfo } from '../../../../redux/auth/authOperations';
import { useForm } from 'react-hook-form';
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

    
  
} from './FormaSettingModal.styled';


export const FormaUpdateUserProfile = () => {

   const userProfile = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Your gender identity</h3>
      <label>
        Woman
        <input {...register("gender")} type="radio"></input>
      </label>
      <label>
        Man
        <input {...register("gender")} type="radio"></input>
      </label>
      <label>
        Your name
        <input {...register("name")} type="text" placeholder='Your name'></input>
      </label>
      <label>
        E-mail
        <input  {...register("email")} type="text" placeholder='Your name'></input>
      </label>
      <h3>Password</h3>
      <label>
        Oudated password
        <input {...register("oldPassword")} type="text" placeholder='Your name'></input>
      </label>
      <label>
        New Password
        <input {...register("newPassword")} type="text" placeholder='Your name'></input>
      </label>
      <label>
        Repeat new password
        <input {...register("repeatPassword")} type="text" placeholder='Your name'></input>
      </label>
      <button type="submit"> save</button>
  </form>
  )
  // const onSubmit = values => {
  //   const { gender, name, email, oldPassword, newPassword } = values;
  //   const updatedValues = {
  //     // Проверяем каждое поле и добавляем только непустые значения в объект
  //     ...(gender && { gender }),
  //     ...(name && { username: name }),
  //     ...(email && { email: email }),
  //     ...(oldPassword && { outdatedPassword: oldPassword }),
  //     ...(newPassword && { newPassword }),
  //     id,
  //   };

  //   dispatch(updateUserProfileInfo(updatedValues))
  //     .unwrap()
  //     .then(() => {
  //       resetForm();
  //       // closeModal();
  //     });
  // };

  // const {
  //   values,
  //   touched,
  //   errors,
  //   handleSubmit,
  //   handleChange,
  //   handleBlur,
  //   resetForm,
  //   setFieldValue,
  // } = useFormik({
  //   initialValues: {
  //     gender: '',
  //     name: '',
  //     email: '',
  //     oldPassword: '',
  //     newPassword: '',
  //     repeatPassword: '',
  //     newColor: '',
  //     oldColor: '',
  //     repeatColor: '',
  //   },

  //   onSubmit,
  // });

  // У меня не работает валидация полей ввода пароля через YUP  FORMIK, почему?

  // useEffect(() => {
  //   // Проверяем значение gender из Redux и устанавливаем соответствующий радиобаттон
  //   if (userProfile.gender === 'female' || userProfile.gender === 'male') {
  //     setFieldValue('gender', userProfile.gender);
  //   }
  // }, [setFieldValue, userProfile.gender]);

  // const handlePasswordChange = e => {
  //   const password = e.target.value;

  //   const input = e.target.name;
  //   // const { color: newColor } = checkPasswordStrength(password);
  //   if (input === 'oldPassword') {
  //     setFieldValue('oldColor', newColor);
  //     setFieldValue('oldPassword', password);
  //   }
  //   if (input === 'newPassword') {
  //     setFieldValue('newColor', newColor);

  //     setFieldValue('newPassword', password);
  //   }
  //   if (input === 'repeatPassword') {
  //     setFieldValue('repeatColor', newColor);

  //     setFieldValue('repeatPassword', password);
  //   }
  // };



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
