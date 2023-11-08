using ErrorOr;
using Rentola.Models;

namespace Rentola.Services.Items;

public class ItemService : IItemService
{
    private Dictionary<string, Item> _items = new();

    public ErrorOr<Created> CreateItem(Item item)
    {
        if (_items.ContainsKey(item.Name))
        {
            return Error.Conflict();
        }

        _items.Add(item.Name, item);

        return Result.Created;
    }
}
