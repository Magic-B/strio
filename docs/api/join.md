# join

Smart array joining with inline separator configuration.



## join

### Signature

```typescript
function join(...args: (string | number | { separator?: string } | undefined | null)[]): string
```

### Parameters

- `...args` - Variable number of arguments including:
  - Strings to join
  - Numbers (converted to strings)
  - Objects with `separator` property to change separator
  - `null` or `undefined` (filtered out)

### Returns

Joined string with empty values filtered out.

### Examples

```typescript
import { join } from 'strio'

// Basic usage (default separator: ", ")
join("a", "b", "c")
// "a, b, c"

// Custom separator
join("a", { separator: " - " }, "b", "c")
// "a - b - c"

// Filters empty values
join("a", null, "", "b", undefined, "c")
// "a, b, c"

// No separator
join("hello", { separator: "" }, "world")
// "helloworld"

// With numbers
join("Item", 1, "of", 10)
// "Item, 1, of, 10"

// Single value
join("alone")
// "alone"

// Empty result
join("", null, undefined)
// ""

// Dash separator
join("2024", { separator: "-" }, "01", { separator: "-" }, "15")
// "2024-01-15"
```

### Use Cases

#### Build Full Names

```typescript
import { join } from 'strio'

function formatName(first: string, middle?: string, last?: string): string {
  return join(first, middle, last)
}

formatName("John", "", "Doe")
// "John, Doe"

formatName("John", "Paul", "Doe")
// "John, Paul, Doe"
```

#### Format Addresses

```typescript
import { join } from 'strio'

function formatAddress(street: string, city?: string, state?: string, zip?: string): string {
  return join(
    street,
    { separator: ", " },
    city,
    state,
    zip
  )
}

formatAddress("123 Main St", "Springfield", "", "12345")
// "123 Main St, Springfield, 12345"
```

#### Build File Paths

```typescript
import { join } from 'strio'

function buildPath(...parts: string[]): string {
  return join(...parts.flatMap(p => [{ separator: "/" }, p])).slice(1)
}

buildPath("home", "user", "documents")
// "home/user/documents"
```

#### Create Breadcrumbs

```typescript
import { join } from 'strio'

function createBreadcrumbs(items: string[]): string {
  const args: any[] = []
  items.forEach((item, i) => {
    if (i > 0) args.push({ separator: " > " })
    args.push(item)
  })
  return join(...args)
}

createBreadcrumbs(["Home", "Products", "Laptops"])
// "Home > Products > Laptops"
```

#### Build URLs with Query Parameters

```typescript
import { join } from 'strio'

function buildUrl(base: string, ...params: Array<[string, string] | undefined>): string {
  const query = params
    .filter(p => p !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")
  
  return query ? `${base}?${query}` : base
}

buildUrl("api.com", ["page", "1"], ["limit", "10"])
// "api.com?page=1&limit=10"
```

#### Format Lists

```typescript
import { join } from 'strio'

function formatList(items: string[], useAnd: boolean = false): string {
  if (items.length === 0) return ""
  if (items.length === 1) return items[0]
  if (items.length === 2) {
    return join(items[0], { separator: useAnd ? " and " : ", " }, items[1])
  }
  
  const lastItem = items[items.length - 1]
  const rest = items.slice(0, -1)
  
  return join(...rest, { separator: ", " }, { separator: useAnd ? ", and " : ", " }, lastItem)
}

formatList(["apples", "oranges", "bananas"], true)
// "apples, oranges, and bananas"
```

## Default Behavior

- **Default separator**: `", "` (comma + space)
- **Empty filtering**: Automatically removes `null`, `undefined`, and empty strings
- **Whitespace**: Trims whitespace from values before checking if empty

```typescript
import { join } from 'strio'

// Default comma-space separator
join("a", "b", "c")
// "a, b, c"

// Filters empties
join("a", "", " ", "b")
// "a, b"

// null and undefined filtered
join("a", null, undefined, "b")
// "a, b"
```

## Separator Configuration

Separator can be changed mid-array:

```typescript
import { join } from 'strio'

join("a", "b", { separator: " | " }, "c", "d")
// "a, b | c | d"
// First separator is default ", "
// Then changes to " | "
```

## Related Functions

- [split](/guide/string-manipulation) - Split strings into arrays
- [template](/api/template) - String templates
- [contains](/api/contains) - Check for substrings

## See Also

- [String Formatting Guide](/guide/string-formatting)
- [Array Manipulation](/guide/string-manipulation)

