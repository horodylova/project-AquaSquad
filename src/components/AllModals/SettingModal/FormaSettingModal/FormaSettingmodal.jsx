import React from 'react';
import { WrapperForma,WrapperFormaMain,WrapperFormaLeft,TitlePart,ContainerForm,WrapperRadio,FormLabelRadio,FormLabel,InputSettingEdit } from './FormaSettingModal.styled';

export const FormaUpdateUserProfile = () => {
  
  

  return (
      <form >
            {/* <form onSubmit={handleSubmit}></form> */}
      <WrapperForma>
              <WrapperFormaMain>
                  
                  <WrapperFormaLeft>
                      
                      <TitlePart >
                          {/* <TitlePart $marginBottom="0px" $marginTop="0px"> */}
              Your gender identity
                      </TitlePart>
                      
            <ContainerForm>
                          <WrapperRadio >
                              {/* <WrapperRadio $marginBottom="28px"> */}
                <FormLabelRadio>
                                  <input
style={{position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  whiteSpace: 'nowrap',
  clipPath: 'inset(100%)',
  clip: 'rect(0 0 0 0)',
  overflow: 'hidden'}}
                    // className="visually-hidden"
                    type="radio"
                    name="gender"
                    value="female"
                    // onChange={handleChange}
                    // checked={values.gender === 'female'}
                    // defaultChecked="true"
                  />
                  <div></div>
                  <span>Girl</span>
                              </FormLabelRadio>
                              
                <FormLabelRadio>
                                  <input
                                      style={{position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: '0',
  padding: '0',
  whiteSpace: 'nowrap',
  clipPath: 'inset(100%)',
  clip: 'rect(0 0 0 0)',
  overflow: 'hidden'}}
                    // className="visually-hidden"
                    type="radio"
                    name="gender"
                    value="male"
                    // onChange={handleChange}
                    // checked={values.gender === 'male'}
                  />
                  <div></div>
                  <span>Man</span>
                </FormLabelRadio>
                          </WrapperRadio>
                          


                          <FormLabel>
                              {/* <FormLabel $fontSize="18px" $fontWeight="500"> */}
                Your name
                <InputSettingEdit
                  type="text"
                  name="name"
                //   value={values.name}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                //   $error={touched.name && errors.name}
                />
                 {/* {touched.name && errors.name && (
                  <InputError>{errors.name}</InputError> }
                ) */}
                          </FormLabel>
                          

                          <FormLabel >
                              {/* <FormLabel $fontSize="18px" $fontWeight="500"> */}
                E-mail
                <InputSettingEdit
                  autoComplete="off"
                  type="email"
                  name="email"/>
                {/* //   value={values.email}
                //   onChange={handleChange}
                //   onBlur={handleBlur}
                //   $error={touched.email && errors.email}
                // /> */}
                {/* // {touched.email && errors.email && ( */}
                {/* //   <InputError>{errors.email}</InputError>
                // )} */}
                          </FormLabel>
                          
            </ContainerForm>
                  </WrapperFormaLeft>
                  



          {/* <WrapperFormaRight>
            <TitlePart $marginBottom="0px" $marginTop="0px">
              Password
            </TitlePart>

            <FormLabel>
              Outdated password:
              <PasswordInput
                autoComplete="new-password"
                id="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Old password"
              />
              {touched.oldPassword && errors.oldPassword && (
                <InputError>{errors.oldPassword}</InputError>
              )}
            </FormLabel>
            <FormLabel>
              New Password:
              <PasswordInputWrapper>
                <PasswordInput
                  autoComplete="off"
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handlePasswordChange}
                  onBlur={handleBlur}
                  placeholder="New password"
                  // $error={touched.newPassword && errors.newPassword}
                />
                {values.newPassword && (
                  <PasswordToolTip
                    score={values.strengthScore}
                    password={values.newPassword}
                  />
                )}
              </PasswordInputWrapper>
              {values.newPassword && (
                <PasswordMeter $score={values.strengthScore} />
              )}
              {errors.newPassword && (
                <InputError>{errors.newPassword}</InputError>
              )}
            </FormLabel>
            <FormLabel>
              Repeat new password:
              <PasswordInput
                autoComplete="off"
                name="repeatPassword"
                value={values.repeatPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Repeat password"
                $error={touched.repeatPassword && errors.repeatPassword}
              />
              {touched.repeatPassword && errors.repeatPassword && (
                <InputError>{errors.repeatPassword}</InputError>
              )}
            </FormLabel>
          </WrapperFormaRight> */}
        </WrapperFormaMain>
        {/* // <Button $width="160px" $marginLeft="auto" type="submit">
        //   Save
        // </Button>  */}
      </WrapperForma>
    </form>
  );
};

