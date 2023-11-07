using Microsoft.AspNetCore.Mvc;
using Rentola.Contracts.Item;

namespace Rentola.Controllers;

public class RentolaController : ApiController
{
    [HttpPost("/item")]
    public void CreateItem(CreateItemRequest request)
    {
        Console.WriteLine("Hello, World!");
    }
}
