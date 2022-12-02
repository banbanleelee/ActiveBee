const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    userName: String!
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Food {
    _id: ID!
    foodName: String!
    quantity: String
    unit: String
    calories: String!
    category: FoodCategory
    addedBy: User
    addedOn: String
  }

  type FoodCategory {
    _id: ID!
    categoryName: String!
    icon: String
  }

  type Nutrient {
    id: Int
    number: Int
    name: String
    rank: Int
    unitName: String
  }

  type FoodNutrients {
    type: String
    id: Int
    nutrient: Nutrient
    amount: Float
  }

  type FoodAttributeType {
    id: Int
    name: String
    description: String
  }

  type FoodAttributes {
    id: Int
    number: String
    value: String
    foodAttributeType: FoodAttributeType
  }
  
  type WweiaFoodCategory {
    wweiaFoodCategoryCode: Int
    wweiaFoodCategoryDescription: String
  }

  type MeasureUnit {
    id: Int
    name: String
    abbreviation: String
  }

  type FoodPortions {
    id: Int
    measureUnit: MeasureUnit
    modifier: String
    gramWeight: Float
    sequenceNumber: Int
    portionDescription: String
  }

  type InputFoods {
    id: Int
    unit: String
    portionDescription: String
    portionCode: String
    foodDescription: String
    sequenceNumber: Int
    ingredientDescription: String
    ingredientWeight: Float
    amount: Float
    ingredientCode: Int
  }

  type FoodDatabase {
    foodClass: String
    description: String
    foodNutrients: [FoodNutrients]
    foodAttributes: [FoodAttributes]
    foodCode: Int
    startDate: String
    endDate: String
    wweiaFoodCategory: WweiaFoodCategory
    foodPortions: [FoodPortions]
    publicationDate: String
    inputFoods: [InputFoods]
    fdcId: Int
    dataType: String
  }

  type Query {
    me: User
    getAddedFoodByUserId(userId: ID!): [Food]
    getFoodByKeyword(keyword: String!): [FoodDatabase]
  }

  type Mutation {
    login(userName: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    addFood(
      foodName: String!
      quantity: String
      unit: String
      calories: String!
      category: ID!
      addedBy: ID!
    ): Food
    addFoodCategory(
      categoryName: String!
      icon: String
    ): FoodCategory
  }
`;

module.exports = typeDefs;
