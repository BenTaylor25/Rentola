using ErrorOr;

namespace Rentola.Models;

public class Item
{
    public const int MIN_NAME_LEN = 3;
    public const int MAX_NAME_LEN = 25;
    public const int MAX_QTY = 10_000;

    public string Name { get; }
    public int Qty { get; }

    private Item(
        string name,
        int qty
    )
    {
        Name = name;
        Qty = qty;
    }

    public static ErrorOr<Item> Create(
        string name,
        int qty
    )
    {
        List<Error> errors = new();

        if (qty < 0)
        {
            // errors.Add(Errors.Item.QuantityNotPositive);
        }
        else if (qty > MAX_QTY)
        {
            // errors.Add(Errors.Item.QuantityTooLarge);
        }

        if (name.Length < MIN_NAME_LEN)
        {
            // errors.Add(Errors.Item.NameTooShort);
        }
        else if (name.Length > MAX_NAME_LEN)
        {
            // errors.Add(Errors.Item.NameTooLong);
        }

        if (errors.Any())
        {
            return errors;
        }

        return new Item(name, qty);
    }
}
