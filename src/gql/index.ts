import { ApolloServer } from 'apollo-server';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { OGM } from '@neo4j/graphql-ogm';
import { Neo4jGraphQLAuthJWTPlugin } from '@neo4j/graphql-plugin-auth';
import * as ActedIn from './ActedIn';
import * as Movie from './Movie';
import * as Person from './Person';
import * as User from './User';
import * as config from '../config';
import { Driver } from 'neo4j-driver';
import { ServerContext } from './types';

const typeDefs = [
  ActedIn.typeDefs,
  Movie.typeDefs,
  Person.typeDefs,
  User.typeDefs,
];

const resolvers = {
  ...Person.resolvers, ...User.resolvers
};

export async function createServer(driver: Driver): Promise<ApolloServer> {
  const ogm = new OGM({
    typeDefs,
    driver,
  });
  await ogm.init();

  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    resolvers,
    plugins: {
      auth: new Neo4jGraphQLAuthJWTPlugin({
        secret: config.NEO4J_GRAPHQL_JWT_SECRET,
      }),
    },
  });

  const schema = await neoSchema.getSchema();
  const serverContext: ServerContext = { ogm, driver };

  const server: ApolloServer = new ApolloServer({
    schema,
    context: () => serverContext,
  });

  return server;
}
