# trim

Remove whitespace from string ends.



## trim

### Signature

```typescript
function trim(str: string, chars?: string): string
```

### Parameters

- `str` - The string to trim
- `chars` - Characters to remove (default: whitespace)

### Returns

String with leading and trailing whitespace removed.

### Examples

```typescript
import { trim } from 'strio'

// Basic usage
trim("  hello  ")
// "hello"

trim("  hello world  ")
// "hello world"

// Tabs and newlines
trim("\t\nhello\n\t")
// "hello"

// Mixed whitespace
trim("  \t  hello  \n  ")
// "hello"

// No whitespace
trim("hello")
// "hello"

// Only whitespace
trim("   ")
// ""

trim("\t\n")
// ""

// Preserves internal whitespace
trim("  hello   world  ")
// "hello   world"

// Empty string
trim("")
// ""
```
// Custom characters
trim("--hello--", "-")
// "hello"

trim("###hello###", "#")
// "hello"

trim("  hello  ", " ")
// "hello"


### Use Cases

#### Clean User Input

```typescript
import { trim } from 'strio'

function cleanInput(input: string): string {
  return trim(input)
}

cleanInput("  john.doe@example.com  ")
// "john.doe@example.com"

cleanInput("\t  My Name  \n")
// "My Name"
```

#### Form Validation

```typescript
import { trim, isEmpty } from 'strio'

function validateRequired(value: string): boolean {
  return !isEmpty(trim(value))
}

validateRequired("  ")
// false

validateRequired("  John  ")
// true
```

#### Normalize Text

```typescript
import { trim } from 'strio'

function normalizeText(text: string): string {
  return trim(text.toLowerCase())
}

normalizeText("  HELLO WORLD  ")
// "hello world"
```

#### Clean Array Values

```typescript
import { trim } from 'strio'

function trimAll(items: string[]): string[] {
  return items.map(item => trim(item))
}

trimAll(["  apple  ", "  banana  ", "  cherry  "])
// ["apple", "banana", "cherry"]
```

#### Parse CSV

```typescript
import { trim } from 'strio'

function parseCSVLine(line: string): string[] {
  return line.split(',').map(trim)
}

parseCSVLine("John  ,  Doe  ,  john@example.com")
// ["John", "Doe", "john@example.com"]
```

#### Clean Multi-line Text

```typescript
import { trim } from 'strio'

function cleanLines(text: string): string {
  return text
    .split('\n')
    .map(line => trim(line))
    .join('\n')
}

cleanLines("  line 1  \n  line 2  \n  line 3  ")
// "line 1\nline 2\nline 3"
```

## Whitespace Types

Removes all standard whitespace characters:

- **Space**: ` ` (U+0020)
- **Tab**: `\t` (U+0009)
- **Newline**: `\n` (U+000A)
- **Carriage return**: `\r` (U+000D)
- **Form feed**: `\f` (U+000C)
- **Vertical tab**: `\v` (U+000B)
- **Non-breaking space**: (U+00A0)
- **Other Unicode spaces**: Various

```typescript
import { trim } from 'strio'

// Various whitespace types
trim(" \t\n\r\f\vhello\t\n\r\f\v ")
// "hello"

// Non-breaking space
trim("\u00A0hello\u00A0")
// "hello"
```

## Internal Whitespace

Only removes from ends, preserves internal whitespace:

```typescript
import { trim } from 'strio'

trim("  hello    world  ")
// "hello    world"
// ✅ Multiple internal spaces preserved

trim("  first\n\nsecond  ")
// "first\n\nsecond"
// ✅ Internal newlines preserved
```

## Performance

- Time Complexity: O(n) in worst case
- Space Complexity: O(n) for result string
- Typically very fast due to native implementation

```typescript
// Very fast
trim("  hello  ")  // ~0.001ms

// Efficient for large strings
const longText = " ".repeat(1000) + "text" + " ".repeat(1000)
trim(longText)  // ~0.01ms
```

## TypeScript

Full type safety:

```typescript
import { trim } from 'strio'

const trimmed: string = trim("  hello  ")

// Type error
// trim(123)
// trim(null)
```

## Tips

### Trim Specific Characters

For trimming specific characters (not just whitespace):

```typescript
function trimChar(str: string, char: string): string {
  const escaped = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const pattern = new RegExp(`^${escaped}+|${escaped}+$`, 'g')
  return str.replace(pattern, '')
}

trimChar("...hello...", ".")
// "hello"

trimChar("///path///", "/")
// "path"
```

### Trim and Collapse Whitespace

```typescript
import { trim, collapseWhitespace } from 'strio'

function normalize(text: string): string {
  return collapseWhitespace(trim(text))
}

normalize("  hello    world  ")
// "hello world"
```

### Trim Lines and Join

```typescript
import { trim } from 'strio'

function trimLines(text: string): string {
  return text
    .split('\n')
    .map(line => trim(line))
    .filter(line => line.length > 0)
    .join('\n')
}

trimLines("  line 1  \n\n  line 2  \n  ")
// "line 1\nline 2"
```

### Safe Trim

```typescript
import { trim } from 'strio'

function safeTrim(value: any): string {
  if (typeof value !== 'string') return ''
  return trim(value)
}

safeTrim("  hello  ")
// "hello"

safeTrim(null)
// ""

safeTrim(123)
// ""
```

## Comparison with Native

`trim` is essentially the same as native `String.prototype.trim()`:

```typescript
// Using strio trim
import { trim } from 'strio'
trim("  hello  ")
// "hello"

// Using native trim
"  hello  ".trim()
// "hello"

// strio trim is provided for:
// 1. Consistency with other strio functions
// 2. Easy composition with other utilities
// 3. Null-safe wrapper in some implementations
```

## Related Functions

- [collapseWhitespace](/api/collapseWhitespace) - Collapse multiple spaces
- [stripPrefix](/api/stripPrefix) / [stripSuffix](/api/stripSuffix) - Remove specific prefix/suffix
- [truncate](/api/truncate) - Shorten strings
- [dedent](/api/indent) - Remove indentation

## Common Patterns

### Clean and Validate

```typescript
import { trim, isEmpty } from 'strio'

function validateEmail(email: string): boolean {
  const cleaned = trim(email)
  return !isEmpty(cleaned) && cleaned.includes('@')
}
```

### Prepare for Comparison

```typescript
import { trim } from 'strio'

function compareStrings(str1: string, str2: string): boolean {
  return trim(str1).toLowerCase() === trim(str2).toLowerCase()
}

compareStrings("  Hello  ", "hello")
// true
```

### Clean Before Split

```typescript
import { trim } from 'strio'

function splitClean(text: string, separator: string): string[] {
  return trim(text).split(separator).map(trim)
}

splitClean("  apple,  banana,  cherry  ", ",")
// ["apple", "banana", "cherry"]
```

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [Validation Functions](/guide/string-validation)
- [Strip Functions](/api/stripTags)

