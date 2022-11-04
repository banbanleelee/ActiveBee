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
  
  type Query {
    me: User
    getAddedFoodByUserId(userId: ID!): [Food]
  }

  type Mutation {
    login(userName: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    addFood(
      foodName: String!,
      quantity: String,
      unit: String,
      calories: String!,
      category: ID!,
      addedBy: ID!
    ): Food
    addFoodCategory(
      categoryName: String!,
      icon: String
    ): FoodCategory
  }
`;

module.exports = typeDefs;
