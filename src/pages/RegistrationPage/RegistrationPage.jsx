import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import sprite from '../../../src/Icons/signIn-signUp/sprite.svg';
import { register as registerAction } from '../../../src/redux/auth/authOperations';
import {
  Input,
  Label,
  Form,
  FormWrapper,
  LabelWrapper,
  InputField,
  RegisterContainer,
  InputContainer,
  MainTitle,
  SignInLin,
  BottleImg,
  SectionAuth,
  EyeSvg,
} from './RegistrationPage.styled';

const emailPatern = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  const togglePasswordVisibility = (inputId) => {
    setShowPassword((prevPasswords) => ({
      ...prevPasswords,
      [inputId]: !prevPasswords[inputId],
    }));
  };

  const onSubmit = async ({ email, password }) => {
    try {
      await dispatch(registerAction({ email, password })).unwrap();

      console.log(JSON.stringify({ email, password }));
      toast.success('Registration successful. Welcome aboard!');
      reset();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
       <SectionAuth className="background">
          <RegisterContainer>
              <BottleImg>
              <FormWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <MainTitle>Sign Up</MainTitle>
              <LabelWrapper>
              {/* Email */}
              <Label id="email" $errors={errors.email}>
                Enter your email</Label>
                <InputField
                  className={errors.email ? 'error' : ''}
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  {...register('email', {
                    required: 'This field is required!',
                    minLength: {
                      value: 8,
                      message: 'To short!',
                    },
                    maxLength: {
                      value: 64,
                      message: 'To long!',
                    },
                    pattern: {
                      value: emailPatern,
                      message: 'Enter a correct email, example@gmail.com',
                    },
                  })}
                  $errors={errors.email}
                />
              
              <div style={{ position: 'relative' }}>
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
              </LabelWrapper>
              {/* Password*/}
              <LabelWrapper>
              <Label id="password" $errors={errors.password}>
                Enter your password</Label>
                <InputContainer>
                <InputField
                  placeholder="Password"
                  id="password"
                  type={showPassword['password'] ? 'text' : 'password'}
                  {...register('password', {
                    required: 'This field is required!',
                    minLength: {
                      value: 3,
                      message: 'To short!',
                    },
                    maxLength: {
                      value: 64,
                      message: 'To long!',
                    },
                  })}
                  $errors={errors.password}
                />
                <div
      
                  onClick={() => togglePasswordVisibility('password')}
                >
                  {showPassword['password'] ? (
                    <EyeSvg>
                      <use href={`${sprite}#icon-outlineOn`} />
                    </EyeSvg>
                  ) : (
                    <EyeSvg>
                      <use href={`${sprite}#icon-outlineOff`} />
                    </EyeSvg>
                  )}
                </div>
                </InputContainer>
              <div style={{ position: 'relative' }}>
                {errors.password && (
                  <p
                    style={{
                      color: 'red',
                      position: 'absolute',
                      top: '-15px',
                      marginBottom: 0,
                    }}
                  >
                    {errors.password.message || 'Error!'}
                  </p>
                )}
              </div>
              </LabelWrapper>
              {/* Password repeat*/}
              <LabelWrapper>
              <Label id="email" $errors={errors.passwordRepeat}>
                Repeat password </Label>
                <InputContainer>
                <InputField
                  id="passwordRepeat"
                  type={showPassword['passwordRepeat'] ? 'text' : 'password'}
                  placeholder="Repeat password"
                  {...register('passwordRepeat', {
                    required: 'This field is required!',
                    minLength: {
                      value: 3,
                      message: 'To short!',
                    },
                    maxLength: {
                      value: 64,
                      message: 'To long!',
                    },
                    validate: (val) => {
                      if (watch('password') != val) {
                        return 'Your passwords do no match';
                      }
                    },
                  })}
                  $errors={errors.passwordRepeat}
                />
                <div
                  // style={{ position: 'relative' }}
                  onClick={() => togglePasswordVisibility('passwordRepeat')}
                >
                  {showPassword['passwordRepeat'] ? (
                    <EyeSvg>
                      <use href={`${sprite}#icon-outlineOn`} />
                    </EyeSvg>
                  ) : (
                    <EyeSvg>
                      <use href={`${sprite}#icon-outlineOff`} />
                    </EyeSvg>
                  )}
                </div>
                </InputContainer>
              <div >
                {errors.passwordRepeat && (
                  <p
                    style={{
                      color: 'red',
                      position: 'absolute',
                      top: '-15px',
                      marginBottom: 0,
                    }}
                  >
                    {errors.passwordRepeat.message || 'Error!'}
                  </p>
                )}
              </div>
              </LabelWrapper>
              <Input type="submit" disabled={!isValid} value="Sign Up" />
              <SignInLin to="/login">Sign in</SignInLin>
            </Form>
            </FormWrapper>
            </BottleImg>
          </RegisterContainer>
      </SectionAuth>
  );
};

export default RegistrationPage;
