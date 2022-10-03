# Queries

```
query Query {
  people {
    name
    born
    actedInMovies {
      title
      released
    }
    directedMovies {
      title
      released
      actors {
        name
      }
    }
  }
}
```