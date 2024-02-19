import { ApolloServer } from 'apollo-server';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { OGM } from '@neo4j/graphql-ogm';
import * as ActedIn from './ActedIn';
import * as Movie from './Movie';
import * as Person from './Person';
import * as User from './User';
import * as config from '../config';
import { Driver } from 'neo4j-driver';
import { ModelMap } from './ogm-types';
import { decodeJWT } from '../security/JWT';
import { ServerContext } from './types';

export const typeDefs = [
  ActedIn.typeDefs,
  Movie.typeDefs,
  Person.typeDefs,
  User.typeDefs,
];

const resolvers = {
  ...Person.resolvers,
  ...User.resolvers,
};

export async function createServer(driver: Driver): Promise<ApolloServer> {
  const ogm = new OGM<ModelMap>({
    typeDefs,
    driver,
  });

  const neoSchema = new Neo4jGraphQL({
    driver,
    typeDefs,
    resolvers,
    features: {
      authorization: {
        key: config.NEO4J_GRAPHQL_JWT_SECRET,
      },
    },
  });

  const schema = await neoSchema.getSchema();
  await ogm.init();

  const server: ApolloServer = new ApolloServer({
    schema,
    context: async ({ req }): Promise<ServerContext> => {
      const authorizationHeader = req?.headers?.authorization;
      let jwt;
      if (authorizationHeader) {
        jwt = decodeJWT(authorizationHeader.split(' ')[1]);
      }

      return {
        ogm,
        token: authorizationHeader,
        jwt,
      };
    },
  });

  return server;
}
