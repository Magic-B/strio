# truncate

Truncates a string to a specified length.



## truncate

### Signature

```typescript
function truncate(str: string, length: number, suffix: string = "..."): string
```

### Parameters

- `str` - The string to truncate
- `length` - Maximum length (including suffix)
- `suffix` - String to append (default: `"..."`)

### Returns

Truncated string with suffix if needed.

### Examples

```typescript
import { truncate } from 'strio'

// Basic usage
truncate('Hello World', 8)
// "Hello..."

truncate('Short', 10)
// "Short" (no truncation needed)

// Custom suffix
truncate('Long text here', 10, '…')
// "Long text…"

// Empty suffix
truncate('Testing', 4, '')
// "Test"
```

## Use Cases

### Preview Text

```typescript
import { truncate } from 'strio'

function createPreview(text: string): string {
  return truncate(text, 100)
}

createPreview('Very long article content...')
// "Very long article content..." (up to 100 chars)
```

### Filename Display

```typescript
import { truncate } from 'strio'

function displayFilename(filename: string): string {
  return truncate(filename, 20)
}

displayFilename('very-long-document-name.pdf')
// "very-long-docume..."
```

## Related Functions

- [truncateWords](/api/truncateWords) - Truncate by word count
- [words](/api/words) - Split into words

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
