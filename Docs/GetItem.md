# Get Item

## Request

```
GET /item/{{name}}
```


## Sucess Response

```
200 Ok

{
    "name": string,
    "qty": int
}
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
