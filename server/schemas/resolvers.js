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
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user with this email found!')
            }

            const correctPw = await User.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!')
            }

            const token = signToken(user);
            res.json({ token, user });
        },

        addUser: async (parent, { username, email, password }) => {

        },

        saveBook: async (parent, { newBook }, context) => {

        },

        removeBook: async (parent, { bookId }, context) => {

        },
    },
};

module.exports = resolvers;
