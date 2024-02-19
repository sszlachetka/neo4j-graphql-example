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
import { JWTPayload, decodeJWT } from '../security/JWT';
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
      const authHeader = req?.headers?.authorization;

      const token = typeof authHeader === 'string' ? authHeader : null;
      const jwtPayload = token ? parseJWT(token) : null;

      return {
        ogm,
        token,
        jwtPayload,
      };
    },
  });

  return server;
}

function parseJWT(authHeader: string): JWTPayload | null {
  const [authSchema, jwtToken] = authHeader.split(' ');
  if (authSchema === 'Bearer' && typeof jwtToken === 'string') {
    return decodeJWT(jwtToken);
  }

  return null;
}
