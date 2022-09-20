import { createNeo4jDriver, createServer } from './createServer';

createServer(createNeo4jDriver()).then((server) => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
