using ErrorOr;
using Rentola.Models;
using Rentola.ServiceErrors;
using Rentola.Services.Results.DecrementItemResult;

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
        if (_items.TryGetValue(name, out Item? item))
        {
            return item;
        }
        return Error.NotFound();
    }

    public ErrorOr<Item> IncrementItem(string name, int amount)
    {
        if (_items.TryGetValue(name, out var item))
        {
            if (item.Qty + amount <= Item.MAX_QTY)
            {
                item.Qty += amount;
                return item;
            }

            return Errors.Item.QuantityTooLarge;
        }

        return Error.NotFound();
    }

    public ErrorOr<DecrementItemResult> DecrementItem(string name, int amount)
    {
        if (_items.TryGetValue(name, out Item? item))
        {
            if (item.Qty - amount > 0)
            {
                item.Qty -= amount;

                return new DecrementItemResult(
                    WasDeleted: false,
                    Item: item
                );
            }
            else if (item.Qty - amount == 0)
            {
                ErrorOr<Deleted> deletedItemResponse = DeleteItem(name);

                if (deletedItemResponse.IsError)
                {
                    return deletedItemResponse.Errors;
                }
                return new DecrementItemResult(WasDeleted: true);
            }

            return Errors.Item.QuantityNotPositive;
        }

        return Error.NotFound();
    }

    public ErrorOr<Deleted> DeleteItem(string name)
    {
        bool wasPresent = _items.Remove(name);

        if (wasPresent)
        {
            return Result.Deleted;
        }
        return Error.NotFound();
    }
}
