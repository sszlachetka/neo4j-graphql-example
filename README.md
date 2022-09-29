## Neo4j

Neo4j is an open-source, NoSQL, native graph database that provides an ACID-compliant transactional backend for applications. In Neo4j, information is organized as nodes, relationships, and properties.

It turns out that "relational" databases handle relationships poorly. In a graph database, there are no JOINs or lookups. Relationships are stored natively alongside the data elements (the nodes) in a much more flexible format.

### Cypher

Cypher is Neo4j’s graph query language that allows to store and retrieve data from the graph database.

Vocabulary:
- Node - data entity
- Node label - allow to specify certain types of entities to look for or create
- Relationship - directed connection between two nodes
- Relationship type - categorize and add meaning to a relationship, similar to how labels group nodes
- Property - key-value pair property can be stored on both nodes and relationships

[Node or relationship properties](https://neo4j.com/docs/getting-started/current/cypher-intro/#cypher-properties)

Sally likes Graphs
```
(p:Person {name: "Sally"})-[rel:LIKES]->(g:Technology {type: "Graphs"})
```

[source](https://neo4j.com/docs/getting-started/current/)

### Examples

[Movies Sandbox](https://neo4j.com/sandbox/)

Update & Delete statements (not included in Movies Sandbox)

Generate test data
```
create (p:Person {name: 'Jan Kowalski'})
create (m:Movie {title: 'Chlopaki nie placza'})
create (p)-[w:WATCHED]->(m)
return type(w)
```

Update
```
match (p:Person {name: 'Jan Kowalski'})
set p+={age: 21, gender: 'male'}
return p
```

Delete
```
match (p:Person {name: 'Jan Kowalski'}), (m:Movie {title: 'Chlopaki nie placza'})
detach delete p, m
```

[Neo4j AuraDB](https://neo4j.com/cloud/aura-free/)


```
npm run dev
```

Navigate to [http://localhost:4000](http://localhost:4000)


## Useful links
Quick-start: https://neo4j.com/developer/graphql/
Neo4j GraphQL Library features: https://neo4j.com/product/graphql-library/
Neo4j GraphQL Library docs: https://neo4j.com/docs/graphql-manual/current/
https://neo4j.com/developer-blog/create-a-typescript-apollo-server-and-live-database-with-unit-tests/
https://www.apollographql.com/docs/apollo-server/testing/testing/

## TODO
1. Why import hints doesn't work in test/
2. Use absolute import paths?