import { createServer } from './gql';
import { createDriver } from './neo4j';

createServer(createDriver()).then((server) => {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
});
