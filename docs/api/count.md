# count

Count occurrences of a substring within a string.



## count

### Signature

```typescript
function count(str: string, substr: string): number
```

### Parameters

- `str` - The string to search in
- `substr` - The substring to count

### Returns

Number of occurrences found (0 if not found or empty substring).

### Examples

```typescript
import { count } from 'strio'

// Basic usage
count("hello world", "l")
// 3

count("hello world", "o")
// 2

count("hello world", "world")
// 1

// Case-sensitive
count("Hello hello HELLO", "hello")
// 1

count("Hello hello HELLO", "Hello")
// 1

// Not found
count("hello world", "x")
// 0

// Empty substring
count("hello world", "")
// 0

// Overlapping patterns (counts non-overlapping)
count("aaa", "aa")
// 1

// With special characters
count("test@example.com", "@")
// 1

count("one, two, three", ", ")
// 2
```

### Use Cases

#### Validate Input Format

```typescript
import { count } from 'strio'

function isValidEmail(email: string): boolean {
  return count(email, "@") === 1 && count(email, ".") >= 1
}

isValidEmail("user@example.com")  // true
isValidEmail("invalid.email")      // false
isValidEmail("user@@example.com")  // false
```

#### Count Word Occurrences

```typescript
import { count } from 'strio'

function countWord(text: string, word: string): number {
  return count(text.toLowerCase(), word.toLowerCase())
}

const article = "JavaScript is great. I love JavaScript!"
countWord(article, "javascript")
// 2
```

#### Analyze Text Statistics

```typescript
import { count } from 'strio'

function getTextStats(text: string) {
  return {
    sentences: count(text, ".") + count(text, "!") + count(text, "?"),
    paragraphs: count(text, "\n\n") + 1,
    commas: count(text, ","),
    quotes: count(text, '"') / 2
  }
}

getTextStats("Hello! How are you? I'm fine.")
// { sentences: 3, paragraphs: 1, commas: 0, quotes: 0 }
```

#### Password Strength Checker

```typescript
import { count } from 'strio'

function checkPasswordStrength(password: string): string {
  const specialChars = "!@#$%^&*"
  let strength = 0
  
  for (const char of specialChars) {
    if (count(password, char) > 0) strength++
  }
  
  return strength >= 3 ? 'strong' : 'weak'
}

checkPasswordStrength("Pass@word#123!")
// "strong"
```

#### Count CSV Columns

```typescript
import { count } from 'strio'

function getColumnCount(csvLine: string): number {
  return count(csvLine, ",") + 1
}

getColumnCount("name,age,city,country")
// 4
```

#### Validate Phone Format

```typescript
import { count } from 'strio'

function isValidPhone(phone: string): boolean {
  const dashCount = count(phone, "-")
  const spaceCount = count(phone, " ")
  
  return dashCount === 2 || spaceCount === 2
}

isValidPhone("123-456-7890")  // true
isValidPhone("123 456 7890")  // true
isValidPhone("1234567890")    // false
```

## Related Functions

- [contains](/api/contains) - Check if substring exists
- [between](/api/between) - Extract text between delimiters
- [words](/api/words) - Count words in text

## See Also

- [String Validation Guide](/guide/string-validation)
- [Searching Functions](/api/contains)

