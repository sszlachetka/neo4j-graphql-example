# Sorting
```
query Movies($options: MovieOptions, $actorsOptions: PersonOptions) {
  movies(options: $options) {
    title
    released
    actors(options: $actorsOptions) {
      name
      born
    }
  }
}
```

Variables

```
{
  "options": {
    "sort": [
      {
        "released": "DESC"
      }
    ]
  },
  "actorsOptions": {
    "sort": [
      {
        "born": "ASC"
      }
    ]
  }
}
```
