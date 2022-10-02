import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import { ApolloServer } from 'apollo-server';
import { Driver } from 'neo4j-driver';
import { createDriver } from '../../src/neo4j';
import { createServer } from '../../src/gql';

describe('createPeople', () => {
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

  const timestamp = new Date().toISOString();
  const PEOPLE = [
    {
      name: `Integration Test Person 1 - ${timestamp}`,
      born: 1999,
    },
    {
      name: `Integration Test Person 2 - ${timestamp}`,
      born: 2007,
    },
  ];

  test('People are created', async () => {
    const result = await server.executeOperation({
      query: `
      mutation CreatePeople($input: [PersonCreateInput!]!) {
        createPeople(input: $input) {
          people {
            name
            born
          }
        }
      }`,
      variables: { input: PEOPLE },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.createPeople).toEqual({ people: PEOPLE });
  });
});
