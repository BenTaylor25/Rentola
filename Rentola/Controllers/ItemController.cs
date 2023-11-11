using Microsoft.AspNetCore.Mvc;
using ErrorOr;
using Rentola.Models;
using Rentola.Contracts.Item;
using Rentola.Services.Items;
using Rentola.Constracts.Item;

namespace Rentola.Controllers;

public class RentolaController : RentolaControllerBase
{
    private readonly IItemService _itemService;

    public RentolaController(IItemService itemService)
    {
        _itemService = itemService;
    }

    [HttpPost("/item")]
    public IActionResult CreateItem(CreateItemRequest request)
    {
        ErrorOr<Item> requestToItemResult = Item.From(request);

        if (requestToItemResult.IsError)
        {
            return Problem(requestToItemResult.Errors);
        }
        Item item = requestToItemResult.Value;

        ErrorOr<Created> createItemResult = _itemService.CreateItem(item);

        if (createItemResult.IsError)
        {
            return Problem(createItemResult.Errors);
        }
        return CreatedAtAction(
            actionName: nameof(CreateItem),   // replace with GetIitem
            routeValues: new { name = item.Name },
            value: item
        );
    }

    [HttpGet("/item/{name}")]
    public IActionResult GetItem(string name)
    {
        ErrorOr<Item> getItemResponse = _itemService.GetItem(name);

        if (getItemResponse.IsError)
        {
            return Problem(getItemResponse.Errors);
        }
        return Ok(new ItemResponse(
            getItemResponse.Value.Name,
            getItemResponse.Value.Qty
        ));
    }
}
