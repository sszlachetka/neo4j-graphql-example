require('dotenv').config();
const neo4j = require('neo4j-driver');
import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloServer } from 'apollo-server';
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
`;

export function createNeo4jDriver() {
  return neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
  );
}

export async function createServer(driver: any): Promise<ApolloServer> {
  const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
  const schema = await neoSchema.getSchema();

  return new ApolloServer({ schema });
}
