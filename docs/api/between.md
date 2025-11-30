# between

Extracts text between two substrings (first occurrence only).



## between

### Signature

```typescript
function between(str: string, start: string, end: string): string
```

### Parameters

- `str` - The input string
- `start` - The starting delimiter
- `end` - The ending delimiter

### Returns

String containing text between the delimiters, or empty string if not found.

### Examples

```typescript
import { between } from 'strio'

// Basic usage
between('Hello [world]', '[', ']')
// "world"

between('<div>content</div>', '<div>', '</div>')
// "content"

// Not found
between('no brackets', '[', ']')
// ""

// Multiple occurrences - returns first only
between('[first] and [second]', '[', ']')
// "first"
```

## Use Cases

### Parse Markdown Links

```typescript
import { between } from 'strio'

function extractLinkText(markdown: string): string {
  return between(markdown, '[', ']')
}

extractLinkText('[Click here](https://example.com)')
// "Click here"
```

### Extract Template Variables

```typescript
import { between } from 'strio'

function getFirstVariable(template: string): string {
  return between(template, '{{', '}}')
}

getFirstVariable('Hello {{name}}, welcome!')
// "name"
```

## Related Functions

- [betweenAll](/api/betweenAll) - Extract all occurrences
- [contains](/api/contains) - Check if substring exists

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
