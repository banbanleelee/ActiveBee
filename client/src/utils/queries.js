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

export const GET_FOOD_BY_KEYWORD = gql`
  query getFoodByKeyword($keyword: String!) {
    getFoodByKeyword(keyword: $keyword) {
      foodClass
      description
      foodNutrients {
        type
        id
        nutrient {
          id
          number
          name
          rank
          unitName
        }
        amount
      }
      foodAttributes {
        id
        number
        value
        foodAttributeType {
          id
          name
          description
        }
      }
      foodCode
      startDate
      endDate
      wweiaFoodCategory {
        wweiaFoodCategoryCode
        wweiaFoodCategoryDescription
      }
      foodPortions {
        id
        measureUnit {
          id
          name
          abbreviation
        }
        modifier
        gramWeight
        sequenceNumber
        portionDescription
      }
      publicationDate
      inputFoods {
        id
        unit
        portionDescription
        portionCode
        foodDescription
        sequenceNumber
        ingredientDescription
        ingredientWeight
        amount
        ingredientCode
      }
      fdcId
      dataType
    }
  }
`;