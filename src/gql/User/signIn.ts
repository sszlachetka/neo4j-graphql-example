import { createJWT } from '../../security/JWT';
import { comparePassword } from '../../security/password';
import { ServerContext } from '../types';

/**
 *
 * https://github.com/neo4j/graphql/blob/master/examples/neo-push/server/src/gql/User.ts
 *
 */
export async function signIn( 
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
