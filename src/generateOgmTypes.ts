import { OGM, generate } from '@neo4j/graphql-ogm';
import * as path from 'path';
import { typeDefs } from './gql';
import { createDriver } from './neo4j';

async function generateOgmTypes() {
  const driver = createDriver();
  const ogm = new OGM({
    typeDefs,
    driver,
  });

  await ogm.init();

  const outFile = path.join(__dirname, 'gql/ogm-types.ts');

  await generate({
    ogm,
    outFile,
  });
}

generateOgmTypes()
  .then(() => console.log('OGM types generated successfully'))
  .catch((error) => console.error(`Error generating OGM types ${error}`));
