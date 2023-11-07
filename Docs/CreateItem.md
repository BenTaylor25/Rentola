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
```
(Often, you'd probably like to create an object with an ID and return it, but here I want the item `name` to be a unique identifier so it is not needed. With that said, I am not entirely sure if a 201 or 204 is most appropriate here.)


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