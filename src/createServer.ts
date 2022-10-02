import { Driver } from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

export default async function createServer(
  driver: Driver
): Promise<ApolloServer> {
  const neoSchema = new Neo4jGraphQL({ typeDefs, driver, resolvers });
  const schema = await neoSchema.getSchema();

  return new ApolloServer({ schema });
}
