import neo4j, { Driver } from 'neo4j-driver';
import env from './env';

export default function createDriver(): Driver {
  return neo4j.driver(
    env('NEO4J_URI'),
    neo4j.auth.basic(env('NEO4J_USER'), env('NEO4J_PASSWORD'))
  );
}
