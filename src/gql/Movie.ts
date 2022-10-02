import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Movie {
    title: String!
    released: Int!
    actors: [Person!]!
      @relationship(type: "ACTED_IN", properties: "ActedIn", direction: IN)
    director: Person! @relationship(type: "DIRECTED", direction: IN)
  }
`;
