using Microsoft.AspNetCore.Mvc;
using Rentola.Contracts.Item;
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

        return Ok();
    }
}
