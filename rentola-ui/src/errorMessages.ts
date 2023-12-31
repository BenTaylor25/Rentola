
// Match '{0}', '{1}', ...
const placeholderRegex = /\{\d+\}/g;

export function constInterpolate(fmtString: string, args: string[]): string {
    const placeholderInstances = fmtString.match(placeholderRegex);

    if (!placeholderInstances || args.length !== placeholderInstances.length) {
        throw new Error("Number of arguments supplied to constInterpolate does not match the number of placeholders found.");
    }

    for (let i = 0; i < args.length; i++) {
        const placeholder = new RegExp(`\\{${i}\\}`, 'g');
        fmtString = fmtString.replace(placeholder, args[i]);
    }

    return fmtString;
}

export function matchFmtString(fmtString: string, queryString: string): boolean {
    // Replace placeholder with RegEx for anything.
    const regexPattern = fmtString.replace(placeholderRegex, "(.+?)");
    const regex = new RegExp(`^${regexPattern}$`);

    return regex.test(queryString);
}

// Search Bar Errors.
export const ERR_ITEM_TO_SEARCH_ALREADY_DISPLAYED_FMT = "Item '{0}' has already been displayed.";
export const ERR_ITEM_TO_SEARCH_NOT_FOUND_FMT = "Item '{0}' could not be found.";

// New Item Form Errors.
export const ERR_ITEM_TO_CREATE_ALREADY_EXISTS_FMT = "Cannot create Item '{0}' as it already exists.";
export const ERR_ITEM_TO_CREATE_EXISTS_ON_SERVER_FMT = "Item '{0}' already exists on the server; retreiving.";

// Decrement Alert.
export const ALRT_DECREMENT_TO_DELETION_FMT = "Item '{0}' has been deleted as its quantity reached 0.";

// Increment Error.
export const ERR_INCREMENT_ABOVE_MAX = "Item quantity may not exceed 10,000."
