using ErrorOr;

namespace Rentola.ServiceErrors;

public static class Errors
{
    public static class Item
    {
        public static Error QuantityNotPositive => Error.Validation(
            code: "Item.QuantityNotPositive",
            description: $"Item quantity must be greater than 0."
        );

        public static Error QuantityTooLarge => Error.Validation(
            code: "Item.QuantityTooLarge",
            description: $"Item quantity may not exceed {Models.Item.MAX_QTY.ToString("N0")}."
        );

        public static Error NameTooShort => Error.Validation(
            code: "Item.NameTooShort",
            description: $"Item name length must be at least {Models.Item.MIN_NAME_LEN} character."
        );

        public static Error NameTooLong => Error.Validation(
            code: "Item.NameTooLong",
            description: $"Item name length must be at least {Models.Item.MAX_NAME_LEN} character."
        );
    }
}
