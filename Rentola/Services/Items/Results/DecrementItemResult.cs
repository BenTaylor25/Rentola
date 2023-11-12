using Rentola.Models;

namespace Rentola.Services.Results.DecrementItemResult;

public record struct DecrementItemResult (
    bool WasDeleted,
    Item? Item = null
);
