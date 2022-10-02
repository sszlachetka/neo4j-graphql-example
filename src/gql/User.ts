import { gql } from 'apollo-server';
import { createJWT } from '../security/JWT';
import { comparePassword, hashPassword } from '../security/password';
import { ServerContext } from './types';

/**
 * 
 * https://github.com/neo4j/graphql/blob/master/examples/neo-push/server/src/gql/User.ts
 * 
 */

export const typeDefs = gql`
  type User @exclude(operations: [CREATE, UPDATE, DELETE]) {
    id: ID! @id
    email: String!
    passwordHash: String! @private
    passwordSalt: String! @private
    createdAt: DateTime @timestamp(operations: [CREATE])
    updatedAt: DateTime @timestamp(operations: [UPDATE])
  }

  type Mutation {
    signUp(email: String!, password: String!): String # JWT
    signIn(email: String!, password: String!): String # JWT
  }
`;

export const resolvers = {
  Mutation: {
    signUp,
    signIn,
  },
};

async function signUp(
  _root: any,
  args: { email: string; password: string },
  context: ServerContext
) {
  console.log('signUp')

  const User = context.ogm.model('User');

  const [existing] = await User.find({
    where: { email: args.email },
    context: { ...context, adminOverride: true },
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

  console.log(passwordHash, passwordSalt);

  return createJWT({ sub: user.id });
}

async function signIn(
  _root: any,
  args: { email: string; password: string },
  context: ServerContext
) {
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
