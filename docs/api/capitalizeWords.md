# capitalizeWords

Capitalizes the first letter of each word in a string.



## capitalizeWords

### Signature

```typescript
function capitalizeWords(str: string): string
```

### Parameters

- `str` - The string to capitalize

### Returns

String with first character of each word capitalized.

### Examples

```typescript
import { capitalizeWords } from 'strio'

// Basic usage
capitalizeWords('hello world')
// "Hello World"

capitalizeWords('the quick brown fox')
// "The Quick Brown Fox"

// Already capitalized
capitalizeWords('Hello World')
// "Hello World"

// All caps
capitalizeWords('HELLO WORLD')
// "HELLO WORLD" (keeps existing caps)

// Mixed case
capitalizeWords('hELLo WoRLd')
// "HELLo WoRLd" (only capitalizes first letter)

// With punctuation
capitalizeWords('hello, world! how are you?')
// "Hello, World! How Are You?"

// With numbers
capitalizeWords('top 10 tips')
// "Top 10 Tips"

// Multiple spaces
capitalizeWords('hello    world')
// "Hello    World"

// Empty string
capitalizeWords('')
// ""
```

## Use Cases

### Format Titles

```typescript
import { capitalizeWords } from 'strio'

function formatTitle(title: string): string {
  return capitalizeWords(title.toLowerCase())
}

formatTitle('the lord of the rings')
// "The Lord Of The Rings"
```

### Display Names

```typescript
import { capitalizeWords } from 'strio'

function formatFullName(firstName: string, lastName: string): string {
  return capitalizeWords(`${firstName} ${lastName}`.toLowerCase())
}

formatFullName('JOHN', 'DOE')
// "John Doe"
```

### Address Formatting

```typescript
import { capitalizeWords } from 'strio'

function formatAddress(street: string, city: string): string {
  return `${capitalizeWords(street)}, ${capitalizeWords(city)}`
}

formatAddress('main street', 'new york')
// "Main Street, New York"
```

### Menu Items

```typescript
import { capitalizeWords } from 'strio'

const menuItems = [
  'home',
  'about us',
  'contact',
  'pricing'
]

const formatted = menuItems.map(item => capitalizeWords(item))
// ["Home", "About Us", "Contact", "Pricing"]
```

## Related Functions

- [capitalize](/api/capitalize) - Capitalize first letter only
- [titleCase](/api/humanize) - Grammar-aware title case
- [humanize](/api/humanize) - Make readable from code

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [Humanize Functions](/api/humanize)

