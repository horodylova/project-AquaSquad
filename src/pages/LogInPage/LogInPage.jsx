import {
  Input,
  Label,
  LabelWrapper,
  Form,
  InputContainer,
  InputField,
  RegisterContainer,
  MainTitle,
  SignInLin,
  BottleImg,
  EyeSvg,
  SectionAuth,
  FormWrapper
} from '../RegistrationPage/RegistrationPage.styled';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '../../../src/redux/auth/authOperations';
import { useState } from 'react';
import sprite from '../../../src/Icons/signIn-signUp/sprite.svg';

const emailPatern = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

const LogInPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
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
      await dispatch(login({ email, password })).unwrap();
      toast.success('Login successful. Welcome aboard!');
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
              <MainTitle>Sign In</MainTitle>
              <LabelWrapper>
              <Label id="email" $err={errors.email}>
                Enter your email</Label>
                <InputField
                  className={errors.email ? 'error' : ''}
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  {...register('email', {
                    required: 'This field is required!',
                    minLength: {
                      value: 3,
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
              <div>
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
              <LabelWrapper>
              <Label id="password" $errors={errors.password}>
                Enter your password </Label>
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
                  // style={{ position: 'relative' }}
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
    
              <div >
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
              <Input type="submit" disabled={!isValid} value="Sign In" />
              <SignInLin to="/register">Sign Up</SignInLin>
            </Form>
            </FormWrapper>
            </BottleImg>
          </RegisterContainer>
      </SectionAuth>
  );
};
export default LogInPage;
