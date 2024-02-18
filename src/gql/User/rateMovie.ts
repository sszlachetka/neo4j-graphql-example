import { ServerContext } from '../types';

export async function rateMovie(
  _root: any,
  args: { movieTitle: string; rating: number },
  context: ServerContext
): Promise<string> {
  const { jwtPayload } = context;
  if (!jwtPayload) {
    throw new Error('Unauthorized');
  }

  const userId = jwtPayload.sub;

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
