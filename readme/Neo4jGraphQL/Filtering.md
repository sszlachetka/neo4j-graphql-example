# Filtering

```
query Movies($where: MovieWhere) {
  movies(where: $where) {
    title
    released
    actors {
      name
      born
    }
    director {
      name
      born
    }
  }
}
```

Variables

```
{
  "where": {
    "released_LTE": 1990,
    "actors_ALL": {
      "born_LTE": 1961
    },
    "director": {
      "born_GTE": 1950
    }
  }
}
```
