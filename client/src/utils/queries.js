import { gql } from '@apollo/client';

export const GET_ALL_Comments = gql`
query getAllComments{
    comment{
      name
      by
    }
  }
  `;

