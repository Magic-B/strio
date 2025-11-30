# pluralize

Pluralizes words based on count with support for English and Russian pluralization rules.


## pluralize

### Signature

```typescript
function pluralize(
  count: number,
  zero: string | null,
  one: string,
  few: string,
  many?: string
): string
```

### Parameters

- `count` - The number to use for pluralization
- `zero` - Form for zero (optional, can be null to skip custom zero form)
- `one` - Form for singular (1)
- `few` - Form for 2-4 in Russian, or plural form in English
- `many` - Form for 5+ in Russian (if provided, uses Russian rules)

### Returns

Formatted string with count and appropriate plural form.

### Examples

#### English Pluralization (3 parameters)

```typescript
import { pluralize } from 'strio'

// Simple plural (no custom zero form)
pluralize(1, null, "item", "items")
// "1 item"

pluralize(5, null, "item", "items")
// "5 items"

pluralize(0, null, "item", "items")
// "0 items"

// With custom zero form
pluralize(0, "no items", "item", "items")
// "no items"

// Other examples
pluralize(1, null, "message", "messages")
// "1 message"

pluralize(10, null, "message", "messages")
// "10 messages"
```

#### Russian Pluralization (4 parameters)

```typescript
import { pluralize } from 'strio'

// Russian: товар, товара, товаров
pluralize(1, null, "товар", "товара", "товаров")
// "1 товар"

pluralize(2, null, "товар", "товара", "товаров")
// "2 товара"

pluralize(5, null, "товар", "товара", "товаров")
// "5 товаров"

pluralize(21, null, "товар", "товара", "товаров")
// "21 товар"

pluralize(22, null, "товар", "товара", "товаров")
// "22 товара"

pluralize(25, null, "товар", "товара", "товаров")
// "25 товаров"

// With custom zero form
pluralize(0, "нет товаров", "товар", "товара", "товаров")
// "нет товаров"
```

## Use Cases

### Notification Counters

```typescript
import { pluralize } from 'strio'

function notificationText(count: number): string {
  return `You have ${pluralize(count, "no notifications", "notification", "notifications")}`
}

notificationText(0)   // "You have no notifications"
notificationText(1)   // "You have 1 notification"
notificationText(5)   // "You have 5 notifications"
```

### Item Counters (Russian)

```typescript
import { pluralize } from 'strio'

function itemCountRu(count: number): string {
  return pluralize(count, "нет элементов", "элемент", "элемента", "элементов")
}

itemCountRu(0)    // "нет элементов"
itemCountRu(1)    // "1 элемент"
itemCountRu(2)    // "2 элемента"
itemCountRu(5)    // "5 элементов"
itemCountRu(21)   // "21 элемент"
```

### Cart Summary

```typescript
import { pluralize } from 'strio'

function cartSummary(itemCount: number, totalPrice: number): string {
  const items = pluralize(itemCount, "empty", "item", "items")
  return `Cart: ${items}${itemCount > 0 ? ` - $${totalPrice}` : ''}`
}

cartSummary(0, 0)        // "Cart: empty"
cartSummary(1, 9.99)     // "Cart: 1 item - $9.99"
cartSummary(5, 49.95)    // "Cart: 5 items - $49.95"
```

### Time Ago (Russian)

```typescript
import { pluralize } from 'strio'

function timeAgoRu(minutes: number): string {
  return `${pluralize(minutes, "только что", "минуту назад", "минуты назад", "минут назад")}`
}

timeAgoRu(0)     // "только что"
timeAgoRu(1)     // "1 минуту назад"
timeAgoRu(2)     // "2 минуты назад"
timeAgoRu(5)     // "5 минут назад"
timeAgoRu(21)    // "21 минуту назад"
```

### File Counter

```typescript
import { pluralize } from 'strio'

function filesUploaded(count: number): string {
  return pluralize(count, "No files uploaded", "file uploaded", "files uploaded")
}

filesUploaded(0)   // "No files uploaded"
filesUploaded(1)   // "1 file uploaded"
filesUploaded(10)  // "10 files uploaded"
```

### Comments Count

```typescript
import { pluralize } from 'strio'

function commentsText(count: number): string {
  if (count === 0) return "Be the first to comment"
  return pluralize(count, null, "comment", "comments")
}

commentsText(0)   // "Be the first to comment"
commentsText(1)   // "1 comment"
commentsText(42)  // "42 comments"
```

## Pluralization Rules

### English (3 parameters: count, zero, one, few)
- Uses `one` for count === 1
- Uses `few` for all other counts (including 0 if zero is null)
- Uses custom `zero` form if provided and count === 0

### Russian (4 parameters: count, zero, one, few, many)
- Uses `one` for numbers ending in 1 (except 11): 1, 21, 31, 101, etc.
- Uses `few` for numbers ending in 2-4 (except 12-14): 2, 3, 4, 22, 23, 24, etc.
- Uses `many` for all other numbers: 0, 5-20, 25-30, 100, etc.
- Uses custom `zero` form if provided and count === 0

## Related Functions

- [ordinalize](/api/ordinalize) - Add ordinal suffixes
- [template](/api/template) - Template literals with conditionals

## See Also

- [String Formatting Guide](/guide/string-formatting)
- [API Reference](/api/overview)

