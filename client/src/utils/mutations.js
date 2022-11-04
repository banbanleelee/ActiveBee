import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userName: String!, $email: String!, $password: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FOOD_CATEGORY = gql`
  mutation AddFoodCategory($categoryName: String!) {
    addFoodCategory(categoryName: $categoryName) {
      _id
      categoryName
      icon
    }
  }
`;

export const ADD_FOOD = gql`
  mutation AddFood($foodName: String!, $calories: String!, $category: ID!, $addedBy: ID!, $quantity: String, $unit: String) {
    addFood(foodName: $foodName, calories: $calories, category: $category, addedBy: $addedBy, quantity: $quantity, unit: $unit) {
      _id
      foodName
      quantity
      unit
      calories
      category {
        _id
      }
      addedBy {
        _id
      }
      addedOn
    }
  }
`;