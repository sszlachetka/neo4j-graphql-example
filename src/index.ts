import { createNeo4jDriver, createServer } from './newServer';

createServer(createNeo4jDriver()).then((server) => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
