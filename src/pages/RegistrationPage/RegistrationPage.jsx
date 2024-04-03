// import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../components/Container/Container';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import sprite from '../../../src/Icons/signIn-signUp/sprite.svg';
import { register as registerAction } from '../../../src/redux/auth/authOperations';
import {
  Input,
  Label,
  Form,
  InputFild,
  RegisterContainer,
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
      if (error.response.status === 409) {
        // Обробка помилки 409
        console.error('Помилка 409: Конфлікт');
        toast.error('Registration failed. Please try again later.');

      } else {
        // Інші типи помилок
        console.error('Помилка:', error);
      }
      console.log(error);
    }

    console.log(JSON.stringify({ email, password }));
  };

  return (
    <main>
      <SectionAuth>
        <Container>
          <RegisterContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <MainTitle>Sign Up</MainTitle>
              {/* Email */}
              <Label id="email" $errors={errors.email}>
                Enter your email
                <InputFild
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
              </Label>
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
              {/* Password*/}
              <Label id="password" $errors={errors.password}>
                Enter your password
                <InputFild
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
                  style={{ position: 'relative' }}
                  onClick={() => togglePasswordVisibility('password')}
                >
                  {showPassword['password'] ? (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOn`} />
                    </EyeSvg>
                  ) : (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOff`} />
                    </EyeSvg>
                  )}
                </div>
              </Label>
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
              {/* Password repeat*/}
              <Label id="email" $errors={errors.passwordRepeat}>
                Repeat password
                <InputFild
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
                  style={{ position: 'relative' }}
                  onClick={() => togglePasswordVisibility('passwordRepeat')}
                >
                  {showPassword['passwordRepeat'] ? (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOn`} />
                    </EyeSvg>
                  ) : (
                    <EyeSvg width="16" height="16">
                      <use href={`${sprite}#icon-outlineOff`} />
                    </EyeSvg>
                  )}
                </div>
              </Label>
              <div style={{ position: 'relative' }}>
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
              <Input type="submit" disabled={!isValid} value="Sign Up" />
              <SignInLin to="/login">Sign in</SignInLin>
            </Form>
            <BottleImg></BottleImg>
          </RegisterContainer>
        </Container>
      </SectionAuth>
    </main>
  );
};

export default RegistrationPage;
