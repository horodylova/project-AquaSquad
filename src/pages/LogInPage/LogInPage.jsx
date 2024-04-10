import {
  PageLink,
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
  FormWrapper,
  MessageError,
  Backdrop,
} from '../RegistrationPage/RegistrationPage.styled';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { login, refreshUser } from '../../../src/redux/auth/authOperations';
import { useState } from 'react';
import sprite from '../../../src/Icons/signIn-signUp/sprite.svg';
import Loader from '../../components/Loader/Loader';
import { selectLoading } from '../../redux/auth/authSelectors.js';

const emailPatern = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

const LogInPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
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
      await dispatch(refreshUser()).unwrap();
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
                  Enter your email
                </Label>
                <InputField
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  {...register('email', {
                    required: 'This field is required',
                    minLength: {
                      value: 3,
                      message: 'Too short!',
                    },
                    maxLength: {
                      value: 64,
                      message: 'Too long!',
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
                    <MessageError>
                      {errors.email.message || 'Error!'}
                    </MessageError>
                  )}
                </div>
              </LabelWrapper>
              <LabelWrapper>
                <Label id="password" $errors={errors.password}>
                  Enter your password{' '}
                </Label>
                <InputContainer>
                  <InputField
                    placeholder="Password"
                    id="password"
                    type={showPassword['password'] ? 'text' : 'password'}
                    {...register('password', {
                      required: 'This field is required!',
                      minLength: {
                        value: 3,
                        message: 'Too short!',
                      },
                      maxLength: {
                        value: 64,
                        message: 'Too long!',
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

                <div>
                  {errors.password && (
                    <MessageError>
                      {errors.password.message || 'Error!'}
                    </MessageError>
                  )}
                </div>
              </LabelWrapper>
              <SignInLin type="submit" disabled={!isValid}>
                Sign In
              </SignInLin>
              <PageLink to="/register">Sign Up</PageLink>
            </Form>
          </FormWrapper>
        </BottleImg>
      </RegisterContainer>
      {isLoading && (
        <Backdrop>
          <Loader />
        </Backdrop>
      )}
    </SectionAuth>
  );
};
export default LogInPage;
