import { gql } from 'apollo-server';

export const typeDefs = gql`
  interface ActedIn @relationshipProperties {
    roles: [String!]
  }
`;
