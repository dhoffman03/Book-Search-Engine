const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async(parent, args, context) => {
            
            if (context.user) {
                return User.findOne({ _id: context.user._id })
                .select('-__v -password')
            }
            throw new AuthenticationError('You need to be lohhed in!');
        }
    },

    Mutation: {

    },
};

module.exports = resolvers;
