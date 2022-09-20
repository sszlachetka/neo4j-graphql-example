import {describe, expect, test, beforeAll, afterAll} from '@jest/globals';
import { createNeo4jDriver, createServer } from '../../src/createServer';
import { ApolloServer } from 'apollo-server';

import {
  CREATE_BOOKS_OUTPUT,
  CREATE_BOOKS_PARAMS,
  CREATE_BOOKS_MUTATION,
} from '../data/createBooks';


describe('createBooks', () => {
  let server: ApolloServer;
  let driver: any;

  beforeAll(async () => {
    driver = createNeo4jDriver();
    server = await createServer(driver);
  });

  afterAll(async () => {
    await driver?.close();
    await server?.stop();
  });

  test('createBooks', async () => {
    let result: any;
    try {
      result = await server.executeOperation({
        query: CREATE_BOOKS_MUTATION,
        variables: CREATE_BOOKS_PARAMS,
      });
    } catch (error) {
      console.log(error);
    }

    expect(result.errors).toBeUndefined();
    expect(result.data.createBooks).toEqual(CREATE_BOOKS_OUTPUT);
  });
});
