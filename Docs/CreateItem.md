# Create Item

## Request

```
POST /item

{
    "name": string,
    "qty": int
}
```


## Success Response

```
201 Created

{
    "id": string
}
```


## Error Responses

```
409 Conflict

{
    "errors": {
        "Item.NameTaken": [
            "Item of this name already exists."
        ]
    }
}
```

```
400 Bad Request

{
    "errors": {
        "Item.QuantityNotPositive": [
            "Quantity must be positive."
        ],
        "Item.QuantityTooLarge": [
            "Quantity must not exceed 10,000."
        ]
        "Item.NameTooShort": [
            "Item name length must be at least 3 characters."
        ],
        "Item.NameTooLong": [
            "Item name length must be at most 25 characters."
        ]
    }
}
```