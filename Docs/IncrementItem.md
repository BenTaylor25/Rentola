# Increment Item

## Request

```
PUT /item/{{id}}/increment/{{amount}}
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
        "Item.QuantityMax": [
            "Cannot increment quantity past 10,000"
        ]
    }
}
```
