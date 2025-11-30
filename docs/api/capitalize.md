# capitalize

Capitalizes the first letter of a string and lowercases the rest.



## capitalize

### Signature

```typescript
function capitalize(str: string): string
```

### Parameters

- `str` - The string to capitalize

### Returns

String with first character uppercase and remaining characters lowercase.

### Examples

```typescript
import { capitalize } from 'strio'

// Basic usage
capitalize('hello world')
// "Hello world"

capitalize('HELLO WORLD')
// "Hello world"

capitalize('hELLo WoRLd')
// "Hello world"

// Empty strings
capitalize('')
// ""

// Single character
capitalize('h')
// "H"

// With special characters
capitalize('!hello')
// "!hello"

// Non-Latin characters
capitalize('привет мир')
// "Привет мир"

// Null/undefined safety
capitalize(null)      // ""
capitalize(undefined) // ""
```

## Use Cases

### Format User Input

```typescript
import { capitalize, trim } from 'strio'

function formatName(name: string): string {
  return capitalize(trim(name))
}

formatName('  JOHN DOE  ')
// "John doe"
```

### Sentence Formatting

```typescript
import { capitalize } from 'strio'

function formatSentence(text: string): string {
  return capitalize(text.toLowerCase())
}

formatSentence('HELLO EVERYONE!')
// "Hello everyone!"
```

### Form Field Normalization

```typescript
import { capitalize } from 'strio'

const cityInput = document.getElementById('city')
cityInput.addEventListener('blur', (e) => {
  e.target.value = capitalize(e.target.value)
})
// User types "NEW YORK" → converts to "New york"
```

## Related Functions

- [capitalizeWords](/api/capitalizeWords) - Capitalize each word
- [titleCase](/api/humanize) - Grammar-aware title case
- [humanize](/api/humanize) - Make readable from code

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [Humanize Functions](/api/humanize)
