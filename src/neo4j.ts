import neo4j, { Driver } from 'neo4j-driver';
import * as config from './config';

export function createDriver(): Driver {
  return neo4j.driver(
    config.NEO4J_URI,
    neo4j.auth.basic(config.NEO4J_USER, config.NEO4J_PASSWORD)
  );
}
