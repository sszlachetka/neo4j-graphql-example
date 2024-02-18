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
  await ogm.init();

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

  const server: ApolloServer = new ApolloServer({
    schema,
    context: async ({ req }) => {
      const jwt = req.headers.authorization;
      let jwtPayload;
      if (jwt) {
        jwtPayload = decodeJWT(jwt.split(' ')[1]);
      }

      return {
        ogm,
        token: jwt,
        jwtPayload,
      };
    },
  });

  return server;
}
