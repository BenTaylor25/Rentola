
using ErrorOr;
using Rentola.Models;

namespace Rentola.Services.Items;

public interface IItemService
{
    ErrorOr<Created> CreateItem(Item item);
    ErrorOr<Item> GetItem(string name);
}
