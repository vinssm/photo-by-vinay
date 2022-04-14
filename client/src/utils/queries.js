import { gql } from '@apollo/client';

export const GET_ALL_Comments = gql`
query getAllComments{
    comment{
      name
      by
    }
  }
  `;

  export const GET_MY_PROFILE = gql`
  query getMyProfile{
    user:myprofile{
      firstName
      lastName
      email
      comments{
        name
      }
    }
  }
  `;