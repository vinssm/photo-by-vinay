import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
    mutation createUser($userNew:UserInput!){
      user:signupUser(userNew:$userNew) {
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
    mutation SigninUser($userSignin:UserSigninInput!){
      user:signinUser(userSignin:$userSignin) {
        token
      }
    }
`;

export const CREATE_COMMENT = gql`
  mutation createComment{
    quote:createComment(name:"This is a new Quote from the user login")
  }
`;




