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

  type Query {
    me: User
  }

  type Mutation {
    login(userName: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
