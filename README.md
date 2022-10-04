## Quick start

1. Start free Neo4j instance at [Neo4j AuraDB](https://neo4j.com/cloud/aura-free)
    1. You can start with either empty instance or Movies example
    1. Save generated password for later
    1. Detailed instruction can be found [here](https://neo4j.com/developer/graphql/#_using_the_neo4j_graphql_library_with_neo4j_auradb)
1. If you started with empty instance then query your data in Neo4j Browser
    1. Run following command `:play movie-graph` to start Movie Graph built-in example. More details about built-in examples can be found [here](https://neo4j.com/developer/example-data/#built-in-examples).
    2. Move to the second step of the example and run Create data script to create the movie graph.
1. Copy `.env.example` to `.env`. Set NEO4J_USER, NEO4J_PASSWORD and NEO4J_URI variables so that they point to your new Neo4j instance.
1. Install packages & start the server
    ```
    npm install
    ```
    ```
    npm run dev
    ```
1. Open [Apollo Server](http://localhost:4000) in your web browser and click `Query your server` button on Apollo Server welcome page. Run example query.
    ```
    query Movies {
      movies {
        title
        released
        actors {
          name
          born
          age
        }
        director {
          name
          born
          age
        }
      }
    }
    ```

## Agenda

1. [Neo4j](readme/Neo4j.md)
1. [GraphQL](readme/GraphQL.md)
1. [Neo4j GraphQL Library](readme/Neo4jGraphQL/)

## Useful

1. [Neo4j GraphQL quick start](https://neo4j.com/developer/graphql/)
1. [Neo4j GraphQL examples](https://github.com/neo4j/graphql/tree/master/examples)
1. Cypher statement to delete **all records and relationships** 
    ```
    match (n) detach delete n
    ```
