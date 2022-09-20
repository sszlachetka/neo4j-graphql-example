import { describe, expect, test, beforeAll, afterAll } from '@jest/globals';
import { ApolloServer } from 'apollo-server';
import { Driver } from 'neo4j-driver';
import createDriver from '../../src/createDriver';
import createServer from '../../src/createServer';

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

  const BOOKS = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      title: 'Beloved',
      author: 'Toni Morrison',
    },
  ];

  test('createBooks', async () => {
    const result = await server.executeOperation({
      query: `
      mutation($createBooksInput: [BookCreateInput!]!) {
        createBooks(input: $createBooksInput) {
          books {
            title,
            author
          }
        }
      }`,
      variables: { createBooksInput: BOOKS },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.createBooks).toEqual({ books: BOOKS });
  });
});
