import { gql } from 'apollo-server';
import { createJWT } from '../security/JWT';
import { comparePassword, hashPassword } from '../security/password';
import { ServerContext } from './types';

export const typeDefs = gql`
  interface Rated @relationshipProperties {
    rating: Int!
  }

  type User @exclude(operations: [CREATE, UPDATE, DELETE]) {
    id: ID! @id
    email: String!
    passwordHash: String! @private
    passwordSalt: String! @private
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
    ratedMovies: [Movie!]!
      @relationship(type: "RATED", properties: "Rated", direction: OUT)
  }

  extend type User @auth(rules: [{ where: { id: "$jwt.sub" } }])

  type Mutation {
    signUp(email: String!, password: String!): String! # JWT
    signIn(email: String!, password: String!): String! # JWT
    rate(movieTitle: String!, rating: Int!): ID! # User id
  }
`;

export const resolvers = {
  Mutation: {
    signUp,
    signIn,
    rate
  },
};

/**
 * 
 * https://github.com/neo4j/graphql/blob/master/examples/neo-push/server/src/gql/User.ts
 *
 */
async function signUp(
  _root: any,
  args: { email: string; password: string },
  context: ServerContext
): Promise<string> {
  const User = context.ogm.model('User');

  const [existing] = await User.find({
    where: { email: args.email },
    context: { ...context },
  });
  if (existing) {
    throw new Error('user with that email already exists');
  }

  const { passwordHash, passwordSalt } = hashPassword(args.password);

  const [user] = (
    await User.create({
      input: [
        {
          email: args.email,
          passwordHash,
          passwordSalt,
        },
      ],
    })
  ).users;

  return createJWT({ sub: user.id });
}

/**
 * 
 * https://github.com/neo4j/graphql/blob/master/examples/neo-push/server/src/gql/User.ts
 *
 */
async function signIn(
  _root: any,
  args: { email: string; password: string },
  context: ServerContext
): Promise<string> {
  const User = context.ogm.model('User');

  const [existing] = await User.find({
    where: { email: args.email },
    context: { ...context },
  });
  if (!existing) {
    throw new Error('user not found');
  }

  const equal = comparePassword(
    args.password,
    existing.passwordHash,
    existing.passwordSalt
  );
  if (!equal) {
    throw new Error('Unauthorized');
  }

  return createJWT({ sub: existing.id });
}

async function rate(
  _root: any,
  args: { movieTitle: string; rating: number },
  context: ServerContext
): Promise<string> {
  const User = context.ogm.model('User');

  const jwt = context.auth.jwt;
  if (!jwt) {
    throw new Error('Unauthorized');
  }

  const userId =  jwt.sub;

  await User.update({
    where: {
      id: userId,
    },
    connect: {
      ratedMovies: [
        {
          where: {
            node: {
              title: args.movieTitle,
            },
          },
          edge: {
            rating: args.rating,
          },
        },
      ],
    },
  });

  return userId;
}
