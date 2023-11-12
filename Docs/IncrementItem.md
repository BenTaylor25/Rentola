# Increment Item

## Request

```
PUT /item/{{name}}/increment/{{amount}}
```


## Success Response

```
204 No Content
```


## Error Responses

```
404 Not Found

{
    "errors": {
        "Item.NotFound": [
            "Item not found."
        ]
    }
}
```

```
400 Bad Request

{
    "errors": {
        "Item.QuantityTooLarge": [
            "Cannot increment quantity past 10,000."
        ],
        "Item.InvalidIncrementAmount": [
            "Increment amount must be a positive integer."
        ]
    }
}
```
