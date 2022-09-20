import createDriver from './createDriver';
import createServer from './createServer';

createServer(createDriver()).then((server) => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
