import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User @exclude(operations: [CREATE, UPDATE, DELETE]) {
    username: String!
    email: String!
    password: String! @private
  }
`;
