# words

Splits a string into an array of words.



## words

### Signature

```typescript
function words(str: string): string[]
```

### Parameters

- `str` - The string to split into words

### Returns

Array of words.

### Examples

```typescript
import { words } from 'strio'

// Basic usage
words('hello world')
// ["hello", "world"]

words('The quick brown fox')
// ["The", "quick", "brown", "fox"]

// Multiple spaces
words('hello    world')
// ["hello", "world"]

// With punctuation
words('Hello, world!')
// ["Hello", "world"]

// Empty string
words('')
// []

// Unicode support
words('привет мир')
// ["привет", "мир"]
```

## Use Cases

### Word Count

```typescript
import { words } from 'strio'

function countWords(text: string): number {
  return words(text).length
}

countWords('Hello beautiful world')
// 3
```

### First/Last Word

```typescript
import { words } from 'strio'

function getFirstWord(text: string): string {
  return words(text)[0] || ''
}

function getLastWord(text: string): string {
  const w = words(text)
  return w[w.length - 1] || ''
}

getFirstWord('Hello World')
// "Hello"

getLastWord('Hello World')
// "World"
```

### Filter Words

```typescript
import { words } from 'strio'

function getShortWords(text: string, maxLength: number = 3): string[] {
  return words(text).filter(w => w.length <= maxLength)
}

getShortWords('The quick brown fox')
// ["The", "fox"]
```

## Related Functions

- [wordCount](/api/wordCount) - Count words
- [truncateWords](/api/truncateWords) - Truncate by words
- [join](/api/join) - Join array into string

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
