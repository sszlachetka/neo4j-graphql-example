import { Driver } from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
`;

export default async function createServer(
  driver: Driver
): Promise<ApolloServer> {
  const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
  const schema = await neoSchema.getSchema();

  return new ApolloServer({ schema });
}
