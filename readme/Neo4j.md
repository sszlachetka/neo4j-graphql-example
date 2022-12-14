# Neo4j

Neo4j is an open-source, NoSQL, native graph database that provides an ACID-compliant transactional backend for applications. In Neo4j, information is organized as nodes, relationships, and properties.

It turns out that "relational" databases handle relationships poorly. In a graph database, there are no JOINs or lookups. Relationships are stored natively alongside the data elements (the nodes) in a much more flexible format.

## Cypher

Cypher is Neo4j’s graph query language that allows to store and retrieve data from the graph database.

Terminology:
- Node - data entity
- Node label - allow to specify certain types of entities to look for or create
- Relationship - directed connection between two nodes
- Relationship type - categorize and add meaning to a relationship, similar to how labels group nodes
- Property - key-value pair property can be stored on both nodes and relationships

[Node or relationship properties](https://neo4j.com/docs/getting-started/current/cypher-intro/#cypher-properties)

### Patterns in Cypher 

```
match pattern=()-[]-() return pattern
```

Majority of examples below come from [Movies Sandbox](https://neo4j.com/sandbox/).

1. Introduction to Neo4j Browser
1. What is related and how
    ```
    CALL db.schema.visualization()
    ```
1. Return all kinds of nodes (limiting to 20 items)
    ```
    MATCH (n) RETURN n limit 20
    ```
1. Return only Person Nodes (limiting to 20 items)
    ```
    MATCH (p:Person) RETURN p limit 20
    ```
1. Return all Person nodes who directed a movie along with the movie
    ```
    MATCH (p:Person)-[d:DIRECTED]->(m:Movie) RETURN p,d,m
    ```
1. Return specific properties of a node
    ```
    MATCH (m:Movie) RETURN m.title, m.released
    ```
1. Return nodes exactly matching provided pattern
    ```
    Match (p:Person {name: 'Tom Hanks'}) RETURN p
    ```
1. Return nodes filtered by provided criteria
    ```
    MATCH (m:Movie) where m.released > 2010 and m.released < 2015 RETURN m
    ```
1. Create new node
    ```
    CREATE (p:Person {name: 'John Doe'}) RETURN p
    ```
1. Create relationship
    ```
    MATCH (p:Person), (m:Movie)
    WHERE p.name = "Tom Hanks" and m.title = "Cloud Atlas"
    CREATE (p)-[w:WATCHED]->(m)
    RETURN type(w)
    ```
1. Create or update node
    ```
    MERGE (m:Movie {title: 'Greyhound'})
    ON MATCH SET m.lastUpdatedAt = timestamp()
    ON CREATE SET m.released = 2020, m.createdAt = timestamp()
    RETURN m
    ```
1. Create multiple nodes and relationship
    ```
    CREATE (p:Person {name: 'Jan Kowalski'})
    CREATE (m:Movie {title: 'Chłopaki nie płaczą', released: 2000})
    CREATE (p)-[w:WATCHED]->(m)
    RETURN type(w)
    ```
1. Update node
    ```
    MATCH (p:Person {name: 'Jan Kowalski'})
    SET p+={city: "Warszawa", countryCode: "PL"}
    RETURN p
    ```
1. Delete node
    ```
    MATCH (p:Person {name: 'Jan Kowalski'}), (m:Movie {title: 'Chłopaki nie płaczą'})
    DETACH DELETE p, m
    ```
1. Finding all people who have co-acted with Tom Hanks in any movie
    ```
    MATCH (tom:Person {name: "Tom Hanks"})-[:ACTED_IN]->(:Movie)<-[:ACTED_IN]-(p:Person) RETURN p.name
    ```
1. Finding Movies and Actors that are 3 hops away from Kevin Bacon
    ```
    MATCH (p:Person {name: 'Kevin Bacon'})-[*1..3]-(hollywood) RETURN DISTINCT p, hollywood
    ```

## Useful links
[Neo4j AuraDB](https://neo4j.com/cloud/aura-free/)
[Example Datasets](https://neo4j.com/developer/example-data/)