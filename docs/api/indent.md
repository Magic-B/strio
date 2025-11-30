# indent

Adds indentation to each line of a string.



## indent

### Signature

```typescript
function indent(str: string, spaces: number | string = 2): string
```

### Parameters

- `str` - The string to indent
- `spaces` - Number of spaces (number) or indentation string (default: 2)

### Returns

String with added indentation.

### Examples

```typescript
import { indent } from 'strio'

// Basic usage
indent('line 1\nline 2')
// "  line 1\n  line 2"

// Custom indent size
indent('code', 4)
// "    code"

// Tab indentation
indent('function()', 1, '\t')
// "\tfunction()"

// Multiple lines
indent('{\n  value: 42\n}', 2)
// "  {\n    value: 42\n  }"
```

## Use Cases

### Format Code

```typescript
import { indent } from 'strio'

function formatJSON(obj: any, level: number = 0): string {
  const json = JSON.stringify(obj, null, 2)
  return indent(json, level * 2)
}
```

### Add Quote Markers

```typescript
import { indent } from 'strio'

function formatQuote(text: string): string {
  return indent(text, 2, '> ')
}

formatQuote('Hello\nWorld')
// "> > Hello\n> > World"
```

## Related Functions

- [dedent](/api/dedent) - Remove indentation
- [padLeft](/api/padLeft) - Pad left side

## See Also

- [String Formatting Guide](/guide/string-formatting)
