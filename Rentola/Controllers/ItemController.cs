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

    [HttpPut("/item/{name}/increment/{amount}")]
    public IActionResult IncrementItem(string name, int amount)
    {
        ErrorOr<Item> incrementItemResponse = _itemService.IncrementItem(name, amount);
        
        if (incrementItemResponse.IsError)
        {
            return Problem(incrementItemResponse.Errors);
        }
        return Ok(incrementItemResponse.Value);
    }

    [HttpPut("/item/{name}/decrement/{amount}")]
    public IActionResult DecrementItem(string name, int amount)
    {
        ErrorOr<Item> decrementItemResponse = _itemService.DecrementItem(name, amount);

        if (decrementItemResponse.IsError)
        {
            return Problem(decrementItemResponse.Errors);
        }
        return Ok(decrementItemResponse.Value);
    }

    [HttpDelete("/item/{name}")]
    public IActionResult DeleteItem(string name)
    {
        ErrorOr<Deleted> deleteItemResponse = _itemService.DeleteItem(name);

        if (deleteItemResponse.IsError)
        {
            return Problem(deleteItemResponse.Errors);
        }
        return Ok(deleteItemResponse.Value);
    }
}
