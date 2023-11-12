using ErrorOr;

namespace Rentola.ServiceErrors;

public static class Errors
{
    public static class Items
    {
        public static Error QuantityMax => Error.Validation(
            code: "Item.QuantityMax",
            description: $"Item quantity may not exceed {Models.Item.MAX_QTY}."
        );
    }
}
