import { newServer } from './newServer';

newServer().then((server) => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
