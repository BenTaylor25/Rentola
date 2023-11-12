using ErrorOr;

namespace Rentola.ServiceErrors;

public static class Errors
{
    public static class Item
    {
        public static Error QuantityTooLarge => Error.Validation(
            code: "Item.QuantityTooLarge",
            description: $"Item quantity may not exceed {Models.Item.MAX_QTY.ToString("N0")}."
        );
    }
}
