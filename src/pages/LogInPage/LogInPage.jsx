import Container from '../../components/Container/Container';
import {
  Input,
  Label,
  Form,
  InputFild,
  RegisterContainer,
  MainTitle,
  SignInLin,
  BottleImg,
  EyeSvg,
  SectionAuth,
} from '../RegistrationPage/RegistrationPage.styled';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '../../../src/redux/auth/authOperations';
import { useState } from 'react';
import sprite from '../../../src/Icons/signIn-signUp/sprite.svg';

const LogInPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
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

      console.log(JSON.stringify({ email, password }));
      toast.success('Login successful. Welcome aboard!');
      reset();
    } catch (error) {
      console.log(error);
      toast.error('Registration failed. Please try again later.');
    }

    console.log(JSON.stringify({ email, password }));
  };

  return (
    <main>
      <SectionAuth>
        <Container>
          <RegisterContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <MainTitle>Sign In</MainTitle>
              {/* Email */}
              <Label id="email" $err={errors.email}>
                Enter your email
                <InputFild
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
              <Input type="submit" disabled={!isValid} value="Sign In" />
              <SignInLin to="/register">Sign Up</SignInLin>
            </Form>
            <BottleImg></BottleImg>
          </RegisterContainer>
        </Container>
      </SectionAuth>
    </main>
  );
};
export default LogInPage;
