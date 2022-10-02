import { gql } from 'apollo-server';

const typeDefs = gql`
  type Person {
    name: String!
    born: Int
    age: Int @computed(from: ["born"])
    actedInMovies: [Movie!]! @relationship(type: "ACTED_IN", properties: "ActedIn", direction: OUT)
    directedMovies: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
  }

  type Movie {
    title: String!
    released: Int!
    actors: [Person!]! @relationship(type: "ACTED_IN", properties: "ActedIn", direction: IN)
    director: Person! @relationship(type: "DIRECTED", direction: IN)
  }

  interface ActedIn @relationshipProperties {
    roles: [String!]
  }

  type User @exclude(operations: [CREATE, UPDATE, DELETE]) {
    username: String!
    email: String!
    password: String! @private
  }
`;

export default typeDefs;
