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

export const GET_ADDED_FOOD_BY_USER_ID = gql`
    query getAddedFoodByUserId($userId: ID!) {
        getAddedFoodByUserId(userId: $userId) {
        _id
        foodName
        quantity
        unit
        calories
        category {
            _id
            categoryName
            icon
        }
        addedBy {
            _id
            userName
            email
        }
        addedOn
        }
    }
`;