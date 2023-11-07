# Decrement Item

## Request

```
PUT /item/{{name}}/decrement/{{amount}}
```


## Success Responses

```
204 No Content
```

```
200 Ok

{
    "action": "Item deleted."
}

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
        "Item.QuantityNegative": [
            "Cannot decrement quantity below 0."
        ],
        "Item.InvalidDecrementAmount": [
            "Decrement amount must be a positive integer."
        ]
    }
}
```
