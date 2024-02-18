# Neo4j - GraphQL Example

## Quick start

1. Use docker to run container with Neo4j Graph Database

    ```bash
    docker run \
        --restart always \
        --publish=7474:7474 --publish=7687:7687 \
        --env NEO4J_AUTH=neo4j/password \
        -e NEO4J_apoc_export_file_enabled=true \
        -e NEO4J_apoc_import_file_enabled=true \
        -e NEO4J_apoc_import_file_use__neo4j__config=true \
        -e NEO4J_PLUGINS=\[\"apoc\"\] \
        neo4j:5.16.0
    ```

    [More about running Neo4j in a docker container](https://neo4j.com/docs/operations-manual/5/docker/introduction/)

1. Navigate to Neo4j’s Browser interface at [http://localhost:7474](http://localhost:7474)

1. Run the following command `:play movie-graph` to start Movie Graph built-in example.

    [More about Neo4j's built-in examples](https://neo4j.com/developer/example-data/#built-in-examples)

1. Move to the second step of the interactive slideshow example and run the included code block to create the movie graph.

1. Create `.env` file in the root directory of the repository

    ```bash
    echo "NEO4J_USER=neo4j" > .env
    echo "NEO4J_PASSWORD=password" >> .env
    echo "NEO4J_URI=neo4j://localhost:7687/neo4j" >> .env
    echo "NEO4J_GRAPHQL_JWT_SECRET=supersecret" >> .env
    ```

1. Install packages & start the server

    ```bash
    npm ci
    ```

    ```bash
    npm start
    ```

1. Open [Apollo Server](http://localhost:4000) in your web browser and click `Query your server` button on Apollo Server welcome page. Run example query.

    ```graphql
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
