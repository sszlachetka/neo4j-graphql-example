import { OGM } from '@neo4j/graphql-ogm';
import { Driver } from 'neo4j-driver';

export type ServerContext = {
  ogm: OGM;
  driver: Driver;
};
