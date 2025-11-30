# similarity

Calculate similarity between two strings.



## similarity

### Signature

```typescript
function similarity(str1: string, str2: string): number
```

### Parameters

- `str1` - First string to compare
- `str2` - Second string to compare

### Returns

Number between 0 and 1:
- `1.0` = identical strings
- `0.0` = completely different
- Values in between = partial similarity

### Examples

```typescript
import { similarity } from 'strio'

// Identical strings
similarity("hello", "hello")
// 1.0

// Completely different
similarity("abc", "xyz")
// 0.0

// Similar strings
similarity("kitten", "sitting")
// 0.5714...

similarity("JavaScript", "TypeScript")
// 0.5

// Case-sensitive
similarity("Hello", "hello")
// 0.8

// Single character difference
similarity("test", "text")
// 0.75

// Empty strings
similarity("", "")
// 1.0

similarity("hello", "")
// 0.0
```

### Use Cases

#### Find Similar Strings

```typescript
import { similarity } from 'strio'

function findSimilar(target: string, candidates: string[], threshold: number = 0.7): string[] {
  return candidates.filter(candidate => 
    similarity(target, candidate) >= threshold
  )
}

const words = ["hello", "help", "hall", "world", "hello"]
findSimilar("helo", words, 0.6)
// ["hello", "help"]
```

#### Fuzzy Search

```typescript
import { similarity } from 'strio'

function fuzzySearch(query: string, items: string[]): string[] {
  return items
    .map(item => ({
      item,
      score: similarity(query.toLowerCase(), item.toLowerCase())
    }))
    .filter(result => result.score > 0.5)
    .sort((a, b) => b.score - a.score)
    .map(result => result.item)
}

const products = ["iPhone", "iPad", "iPod", "MacBook", "iMac"]
fuzzySearch("iphone", products)
// ["iPhone", "iPad", "iPod"]
```

#### Spell Checker

```typescript
import { similarity } from 'strio'

function suggestCorrection(word: string, dictionary: string[]): string | null {
  let bestMatch = null
  let bestScore = 0
  
  for (const dictWord of dictionary) {
    const score = similarity(word.toLowerCase(), dictWord.toLowerCase())
    if (score > bestScore) {
      bestScore = score
      bestMatch = dictWord
    }
  }
  
  return bestScore > 0.7 ? bestMatch : null
}

const dictionary = ["hello", "world", "javascript", "typescript"]
suggestCorrection("javascrpt", dictionary)
// "javascript"

suggestCorrection("wrold", dictionary)
// "world"
```

#### Detect Duplicates

```typescript
import { similarity } from 'strio'

function findDuplicates(items: string[], threshold: number = 0.9): Array<[string, string]> {
  const duplicates: Array<[string, string]> = []
  
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (similarity(items[i], items[j]) >= threshold) {
        duplicates.push([items[i], items[j]])
      }
    }
  }
  
  return duplicates
}

findDuplicates(["hello", "helo", "world", "wrld"])
// [["hello", "helo"], ["world", "wrld"]]
```

#### Password Similarity Check

```typescript
import { similarity } from 'strio'

function isPasswordTooSimilar(newPassword: string, oldPasswords: string[]): boolean {
  return oldPasswords.some(oldPassword => 
    similarity(newPassword.toLowerCase(), oldPassword.toLowerCase()) > 0.8
  )
}

const oldPasswords = ["password123", "myPassword456"]
isPasswordTooSimilar("password124", oldPasswords)
// true (too similar)

isPasswordTooSimilar("CompletelyDifferent!", oldPasswords)
// false (different enough)
```

#### Match User Input

```typescript
import { similarity } from 'strio'

function matchCommand(input: string, commands: string[]): string | null {
  const normalized = input.toLowerCase().trim()
  
  for (const command of commands) {
    if (similarity(normalized, command.toLowerCase()) > 0.8) {
      return command
    }
  }
  
  return null
}

const commands = ["help", "exit", "save", "load"]
matchCommand("hlep", commands)
// "help"

matchCommand("sav", commands)
// "save"
```

#### Compare Names

```typescript
import { similarity } from 'strio'

function namesMatch(name1: string, name2: string): boolean {
  const cleanName1 = name1.toLowerCase().replace(/[^a-z]/g, '')
  const cleanName2 = name2.toLowerCase().replace(/[^a-z]/g, '')
  
  return similarity(cleanName1, cleanName2) > 0.85
}

namesMatch("John Doe", "Jon Do")
// true

namesMatch("John Smith", "Jane Smith")
// false
```

## Algorithm

Uses **Levenshtein distance** algorithm:
- Counts minimum number of single-character edits (insertions, deletions, substitutions)
- Converts distance to similarity percentage

```typescript
import { similarity } from 'strio'

// "kitten" → "sitting"
// Requires 3 edits:
// 1. k → s
// 2. e → i
// 3. insert g
// 
// Distance: 3
// Max length: 7
// Similarity: 1 - (3/7) = 0.571...

similarity("kitten", "sitting")
// 0.5714285714285714
```

## Similarity Thresholds

Common threshold values:

```typescript
// 0.95 - 1.00: Nearly identical (typos only)
// 0.80 - 0.95: Very similar (minor differences)
// 0.60 - 0.80: Similar (moderate differences)
// 0.40 - 0.60: Somewhat similar
// 0.00 - 0.40: Different
```

## Limitations

- **Not semantic**: Doesn't understand word meanings
- **Character-based**: Treats all characters equally
- **Case-sensitive**: "Hello" and "hello" are different
- **Whitespace**: Treats spaces as characters

```typescript
import { similarity } from 'strio'

// These are semantically similar but score low
similarity("big", "large")
// Low score (different words)

// These are semantically different but score high
similarity("cat", "bat")
// Higher score (one letter difference)
```

## Related Functions

- [contains](/api/contains) - Check for substrings
- [count](/api/count) - Count occurrences
- [words](/api/words) - Word operations

## See Also

- [String Validation Guide](/guide/string-validation)
- [Searching Functions](/api/contains)

