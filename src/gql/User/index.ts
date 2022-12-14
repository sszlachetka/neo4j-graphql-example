import { gql } from 'apollo-server';
import { rateMovie } from './rateMovie';
import { signIn } from './signIn';
import { signUp } from './signUp';

export const typeDefs = gql`
  interface Rated @relationshipProperties {
    rating: Int!
  }

  type User @exclude(operations: [CREATE, UPDATE, DELETE]) {
    id: ID! @id
    email: String!
    passwordHash: String! @private
    passwordSalt: String! @private
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    ratedMovies: [Movie!]!
      @relationship(type: "RATED", properties: "Rated", direction: OUT)
  }

  extend type User @auth(rules: [{ where: { id: "$jwt.sub" } }])

  type Mutation {
    signUp(email: String!, password: String!): String! # JWT
    signIn(email: String!, password: String!): String! # JWT
    rateMovie(movieTitle: String!, rating: Int!): ID! # User id
  }
`;

export const resolvers = {
  Mutation: {
    signUp,
    signIn,
    rateMovie,
  },
};
