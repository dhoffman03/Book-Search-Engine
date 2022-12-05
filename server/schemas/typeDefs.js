const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {

    }

    type Book {

    }

    input savedBook {

    }

    type Auth {

    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook!): User
        removeBook(bookId: ID!): User
    }
`;

module.exports = typeDefs;
