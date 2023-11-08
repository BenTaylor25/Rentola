using Microsoft.AspNetCore.Mvc;
using ErrorOr;
using Rentola.Contracts.Item;
using Rentola.Models;
using Rentola.Services.Items;

namespace Rentola.Controllers;

public class RentolaController : ApiController
{
    private readonly IItemService _itemService;

    public RentolaController(IItemService itemService)
    {
        _itemService = itemService;
    }

    [HttpPost("/item")]
    public IActionResult CreateItem(CreateItemRequest request)
    {
        Console.WriteLine("Hello, World!");

        ErrorOr<Item> requestToItemResult = Item.From(request);

        if (requestToItemResult.IsError)
        {
            // return Problem(requestToItemResult.Errors);
            return Problem();
        }
        Item item = requestToItemResult.Value;

        ErrorOr<Created> createItemResult = _itemService.CreateItem(item);

        if (createItemResult.IsError)
        {
            // return Problem(createItemResult.Errors);
            return Problem();
        }
        return Ok();
    }
}
