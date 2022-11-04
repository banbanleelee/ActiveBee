const { AuthenticationError } = require('apollo-server-express');
const { User, Food } = require('../models');
const FoodCategory = require('../models/FoodCategory');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },

    getAddedFoodByUserId: async(parent, {userId}) => {
      return await Food.find({ addedBy: userId}).populate('category').populate('addedBy');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName: userName });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials - No user found');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials - Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },

    addFood: async (parent, args) => {
      return await Food.create(args);
    },

    addFoodCategory: async (parent, args) => {
      return await FoodCategory.create(args);
    }
  },
};

module.exports = resolvers;
