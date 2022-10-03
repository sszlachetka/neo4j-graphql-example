import { ServerContext } from '../types';

export async function rateMovie(
  _root: any,
  args: { movieTitle: string; rating: number },
  context: ServerContext
): Promise<string> {
  const jwt = context.auth.jwt;
  if (!jwt) {
    throw new Error('Unauthorized');
  }

  const userId = jwt.sub;

  const User = context.ogm.model('User');
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
