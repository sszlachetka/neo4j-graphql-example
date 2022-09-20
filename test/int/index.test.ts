import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import { ApolloServer } from 'apollo-server';
import { Driver } from 'neo4j-driver';
import createDriver from '../../src/createDriver';
import createServer from '../../src/createServer';

import {
  CREATE_BOOKS_OUTPUT,
  CREATE_BOOKS_PARAMS,
  CREATE_BOOKS_MUTATION,
} from '../data/createBooks';

describe('createBooks', () => {
  let server: ApolloServer;
  let driver: Driver;

  beforeAll(async () => {
    driver = createDriver();
    server = await createServer(driver);
  });

  afterAll(async () => {
    await driver?.close();
    await server?.stop();
  });

  test('createBooks', async () => {
    const result = await server.executeOperation({
      query: CREATE_BOOKS_MUTATION,
      variables: CREATE_BOOKS_PARAMS,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.createBooks).toEqual(CREATE_BOOKS_OUTPUT);
  });
});
