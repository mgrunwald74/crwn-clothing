import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const googleSignInClickHandler = () => dispatch(googleSignInStart());
  const emailSignInHandler = (email, password) =>
    dispatch(emailSignInStart({ email, password }));

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInHandler(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email an password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          handleChange={handleChange}
          value={password}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInClickHandler}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
