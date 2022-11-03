import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query getMe($userName: String!) {
    getMe(userName: $userName) {
      _id
      userName
      email
      password
    }
  }
`;