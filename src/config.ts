import * as dotenv from 'dotenv';

dotenv.config();

export const NEO4J_USER = env('NEO4J_USER');
export const NEO4J_PASSWORD = env('NEO4J_PASSWORD');
export const NEO4J_URI = env('NEO4J_URI');
export const NEO4J_GRAPHQL_JWT_SECRET = env('NEO4J_GRAPHQL_JWT_SECRET');

function env(key: string): string {
  const value = process.env[key];
  if (value) return value;

  throw new Error(`Environment variable ${key} was not found`);
}
