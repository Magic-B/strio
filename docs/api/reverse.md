# reverse

Reverse a string.



## reverse

### Signature

```typescript
function reverse(str: string): string
```

### Parameters

- `str` - The string to reverse

### Returns

String with characters in reverse order.

### Examples

```typescript
import { reverse } from 'strio'

// Basic usage
reverse("hello")
// "olleh"

reverse("world")
// "dlrow"

// Numbers
reverse("123")
// "321"

// With spaces
reverse("hello world")
// "dlrow olleh"

// Palindromes
reverse("racecar")
// "racecar"

reverse("level")
// "level"

// Empty string
reverse("")
// ""

// Single character
reverse("a")
// "a"

// Special characters
reverse("hello!")
// "!olleh"

// Unicode
reverse("привет")
// "тевирп"
```

### Use Cases

#### Check Palindromes

```typescript
import { reverse } from 'strio'

function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return cleaned === reverse(cleaned)
}

isPalindrome("A man, a plan, a canal: Panama")
// true

isPalindrome("racecar")
// true

isPalindrome("hello")
// false
```

#### Reverse Words

```typescript
import { reverse } from 'strio'

function reverseWords(sentence: string): string {
  return sentence
    .split(' ')
    .map(word => reverse(word))
    .join(' ')
}

reverseWords("Hello World")
// "olleH dlroW"
```

#### Reverse Sentence Order

```typescript
import { reverse } from 'strio'

function reverseSentence(sentence: string): string {
  return sentence
    .split(' ')
    .reverse()
    .join(' ')
}

reverseSentence("Hello World from JavaScript")
// "JavaScript from World Hello"
```

#### Create Mirror Text

```typescript
import { reverse } from 'strio'

function createMirror(text: string): string {
  return `${text} | ${reverse(text)}`
}

createMirror("Hello")
// "Hello | olleH"
```

#### Reverse File Extensions

```typescript
import { reverse } from 'strio'

function reverseExtension(filename: string): string {
  const [name, ext] = filename.split('.')
  return `${name}.${reverse(ext)}`
}

reverseExtension("document.pdf")
// "document.fdp"
```

#### Simple Obfuscation

```typescript
import { reverse } from 'strio'

function simpleObfuscate(text: string): string {
  return btoa(reverse(text))
}

function simpleDeobfuscate(encoded: string): string {
  return reverse(atob(encoded))
}

const obfuscated = simpleObfuscate("secret")
// "dGVyY2Vz"

simpleDeobfuscate(obfuscated)
// "secret"
```

#### Reverse Path

```typescript
import { reverse } from 'strio'

function reversePath(path: string): string {
  return path.split('/').reverse().join('/')
}

reversePath("home/user/documents")
// "documents/user/home"
```

## Character Handling

Works with various character types:

```typescript
import { reverse } from 'strio'

// ASCII
reverse("ABC123")
// "321CBA"

// Unicode letters
reverse("café")
// "éfac"

// Emojis (may vary)
reverse("Hello 👋")
// "👋 olleH"

// Chinese characters
reverse("你好世界")
// "界世好你"

// Mixed
reverse("Hello123World")
// "dlroW321olleH"
```

## Common Patterns

```typescript
import { reverse } from 'strio'

// Reverse and lowercase
const str = "HELLO"
reverse(str.toLowerCase())
// "olleh"

// Reverse specific part
const text = "Hello World"
const [first, second] = text.split(' ')
`${first} ${reverse(second)}`
// "Hello dlroW"

// Check if reverse matches
const original = "test"
const reversed = reverse(original)
original === reversed
// false
```

## Limitations

### Complex Unicode

```typescript
import { reverse } from 'strio'

// Combining characters may not reverse correctly
reverse("e\u0301")  // é (e + combining acute)
// May produce unexpected results

// Use with caution on:
// - Combining diacritics
// - Right-to-left scripts
// - Complex emojis
```

### Surrogate Pairs

```typescript
// Some emojis use surrogate pairs
reverse("👨‍👩‍👧‍👦")  // Family emoji
// May not reverse as expected
```

## Related Functions

- [truncate](/api/truncate) - Shorten strings
- [words](/api/words) - Split into words
- [capitalize](/api/capitalize) - Capitalize text

## See Also

- [String Manipulation Guide](/guide/string-manipulation)
- [Text Processing](/guide/string-formatting)

