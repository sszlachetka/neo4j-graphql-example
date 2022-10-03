# Offset-based pagination
```
query People($options: PersonOptions) {
  people(options: $options) {
    name
    born
  }
}
```

Variables
```
{
  "options": {
    "sort": [
      {
        "born": "ASC"
      }
    ],
    "limit": 5,
    "offset": 0
  }
}
```
