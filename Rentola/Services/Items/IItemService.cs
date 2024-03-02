using ErrorOr;
using Rentola.Models;
using Rentola.Services.Results.DecrementItemResult;

namespace Rentola.Services.Items;

public interface IItemService
{
    ErrorOr<Created> CreateItem(Item item);
    ErrorOr<Item> GetItem(string name);
    ErrorOr<Item> IncrementItem(string name, int amount);
    ErrorOr<DecrementItemResult> DecrementItem(string name, int amount);
    ErrorOr<Deleted> DeleteItem(string name);
}
