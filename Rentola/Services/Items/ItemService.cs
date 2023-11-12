using ErrorOr;
using Rentola.Models;
using Rentola.ServiceErrors;

namespace Rentola.Services.Items;

public class ItemService : IItemService
{
    private static readonly Dictionary<string, Item> _items = new();

    public ErrorOr<Created> CreateItem(Item item)
    {
        if (_items.ContainsKey(item.Name))
        {
            return Error.Conflict();
        }

        _items.Add(item.Name, item);

        return Result.Created;
    }

    public ErrorOr<Item> GetItem(string name)
    {
        if (_items.TryGetValue(name, out var item))
        {
            return item;
        }
        return Error.NotFound();
    }

    public ErrorOr<Item> IncrementItem(string name, int amount)
    {
        if (_items.TryGetValue(name, out var item))
        {
            if (item.Qty + amount <= 10_000)
            {
                item.Qty += amount;
                return item;
            }

            // Qty Max error
            return Errors.Item.QuantityTooLarge;
        }

        // Not Found error
        return Error.NotFound();
    }

    public ErrorOr<Item> DecrementItem(string name, int amount)
    {
        if (_items.TryGetValue(name, out var item))
        {
            if (item.Qty - amount >= 0)
            {
                item.Qty -= amount;
                return item;
            }

            // Qty <0 error
            return Errors.Item.QuantityNotPositive;
        }

        // Not Found error
        return Error.NotFound();
    }
}
