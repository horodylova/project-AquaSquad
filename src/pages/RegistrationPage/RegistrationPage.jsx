// import React from 'react';
import { useForm } from 'react-hook-form';
import Container from '../../components/Container/Container';
// import { registerUser } from 'components/Api/Api';
import {
  Input,
  Label,
  Form,
  InputFild,
  RegisterContainer,
  MainTitle,
  SignInLin,
  BottleImg,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      // await registerUser(data);
      console.log(JSON.stringify(data));
      alert(
        'Check your email inbox, we send an email link to complete your registration'
      );
    } catch (error) {
      console.log(error);
      alert('register error');
    }

    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <Container>
      <RegisterContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <MainTitle>Sign Up</MainTitle>
          {/* Email */}
          <Label id="email" $err={errors.email}>
            Enter your email
            <InputFild
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
          <div>
            {errors.email && (
              <p style={{ color: 'red', marginBottom: 0 }}>
                {errors.email.message || 'Error!'}
              </p>
            )}
          </div>
          {/* Password*/}
          <Label>
            Enter your password
            <InputFild
              placeholder="Password"
              id="password"
              type="password"
              {...register('password', {
                required: 'This field is required!',
                minLength: {
                  value: 3,
                  message: 'To short!',
                },
              })}
              $errors={errors.password}
            />
          </Label>
          <div>
            {errors.password && (
              <p style={{ color: 'red' }}>
                {errors.password.message || 'Error!'}
              </p>
            )}
          </div>

          {/* Password repeat*/}
          <Label>
            Repeat password
            <InputFild
              id="passwordRepeat"
              type="password"
              placeholder="Repeat password"
              {...register('passwordRepeat', {
                required: 'This field is required!',
                minLength: {
                  value: 3,
                  message: 'To short!',
                },
              })}
              $errors={errors.passwordRepeat}
            />
          </Label>
          <div>
            {errors.passwordRepeat && (
              <p style={{ color: 'red' }}>
                {errors.passwordRepeat.message || 'Error!'}
              </p>
            )}
          </div>
          <Input type="submit" disabled={!isValid} value="Sign Up" />
          <SignInLin href="#">Sign in</SignInLin>
        </Form>
        {/* <BottleImg backgroundImage="C:\GoIT\project-AquaSquad\src\Images\signIn-signUp\bottle\mobile\bottle_mobile@1x.png"></BottleImg> */}
        <BottleImg></BottleImg>
      </RegisterContainer>
    </Container>
  );
};

export default RegistrationPage;
