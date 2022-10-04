# GraphQL

> GraphQL is a query language for APIs. Gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

[graphql.org](https://graphql.org)

> Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client.

[Apollo Server](https://www.apollographql.com/docs/apollo-server)

## Query

```
query Movies {
  movies {
    title
    released
    actors {
      name
      age
    }
    director {
      name
      age
    }
  }
}
```

## Mutation

```
mutation UpdateMovies($update: MovieUpdateInput, $where: MovieWhere) {
  updateMovies(update: $update, where: $where) {
    movies {
      title
      released
    }
  }
}
```

Variables
```
{
  "update": {
    "title": "Jaws",
    "released": 1975
  },
  "where": {
    "title": "Stand By Me"
  }
}
```