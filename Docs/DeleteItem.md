# Delete Item

## Request

```
DELTE /item/{{name}}
```


## Success Response

```
204 No Content
```


## Error Response

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
