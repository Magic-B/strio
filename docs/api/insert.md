# insert

Insert a string at a specific position.



## insert

### Signature

```typescript
function insert(str: string, position: number, insertion: string): string
```

### Parameters

- `str` - The original string
- `position` - The index at which to insert (0-based)
- `insertion` - The string to insert

### Returns

New string with insertion at the specified position. Returns original string if position is out of bounds.

### Examples

```typescript
import { insert } from 'strio'

// Basic usage
insert("Hello World", 5, ",")
// "Hello, World"

insert("abc", 1, "X")
// "aXbc"

// Insert at beginning
insert("test", 0, "pre-")
// "pre-test"

// Insert at end
insert("test", 4, "-post")
// "test-post"

// Out of bounds (returns original)
insert("test", 10, "X")
// "test"

insert("test", -1, "X")
// "test"

// Empty insertion
insert("test", 2, "")
// "test"

// Insert space
insert("HelloWorld", 5, " ")
// "Hello World"
```

### Use Cases

#### Add Formatting to Text

```typescript
import { insert } from 'strio'

function formatPhoneNumber(phone: string): string {
  let formatted = insert(phone, 3, "-")
  formatted = insert(formatted, 7, "-")
  return formatted
}

formatPhoneNumber("1234567890")
// "123-456-7890"
```

#### Insert Line Breaks

```typescript
import { insert } from 'strio'

function wrapText(text: string, width: number): string {
  let result = text
  let pos = width
  
  while (pos < result.length) {
    result = insert(result, pos, "\n")
    pos += width + 1
  }
  
  return result
}

wrapText("This is a long text", 10)
// "This is a \nlong text"
```

#### Add Separators

```typescript
import { insert } from 'strio'

function formatCreditCard(number: string): string {
  let formatted = number
  for (let i = 4; i < 16; i += 5) {
    formatted = insert(formatted, i, " ")
  }
  return formatted
}

formatCreditCard("1234567890123456")
// "1234 5678 9012 3456"
```

#### Insert at Multiple Positions

```typescript
import { insert } from 'strio'

function insertMultiple(str: string, insertions: Array<{pos: number, text: string}>): string {
  // Sort by position in reverse to maintain indices
  const sorted = insertions.sort((a, b) => b.pos - a.pos)
  
  let result = str
  for (const {pos, text} of sorted) {
    result = insert(result, pos, text)
  }
  
  return result
}

insertMultiple("abcd", [
  {pos: 1, text: "X"},
  {pos: 3, text: "Y"}
])
// "aXbcYd"
```

#### Add Tags to Text

```typescript
import { insert } from 'strio'

function highlightText(text: string, start: number, end: number): string {
  let result = insert(text, start, "<mark>")
  result = insert(result, end + 6, "</mark>")  // +6 for <mark> length
  return result
}

highlightText("Hello World", 6, 11)
// "Hello <mark>World</mark>"
```

#### Insert Currency Symbol

```typescript
import { insert } from 'strio'

function formatPrice(amount: string): string {
  return insert(amount, 0, "$")
}

formatPrice("99.99")
// "$99.99"
```

## Position Rules

Position is 0-based index:

```typescript
import { insert } from 'strio'

const str = "abcd"
//          0123  <- positions

insert(str, 0, "X")  // "Xabcd"  (before 'a')
insert(str, 1, "X")  // "aXbcd"  (after 'a')
insert(str, 2, "X")  // "abXcd"  (after 'b')
insert(str, 4, "X")  // "abcdX"  (at end)
```

## Related Functions

- [replace](/guide/string-manipulation) - Replace substrings
- [pad](/api/pad) - Add padding to strings
- [between](/api/between) - Extract text between delimiters

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [Formatting Functions](/api/humanize)

