import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Person {
    name: String!
    born: Int
    age: Int @computed(from: ["born"])
    actedInMovies: [Movie!]!
      @relationship(type: "ACTED_IN", properties: "ActedIn", direction: OUT)
    directedMovies: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
  }
`;

export const resolvers = {
  Person: {
    age(source: any) {
      const { born } = source;

      if (!born) return;

      return new Date().getUTCFullYear() - born;
    },
  },
};
