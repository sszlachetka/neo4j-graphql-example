import { createJWT } from '../../security/JWT';
import { hashPassword } from '../../security/Password';
import { ServerContext } from '../types';

/**
 *
 * https://github.com/neo4j/graphql/blob/master/examples/neo-push/server/src/gql/User.ts
 *
 */
export async function signUp(
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
