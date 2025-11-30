# Other Functions

Additional utility functions.


## Other Functions

## between / betweenAll

Extract text between delimiters.

```typescript
import { between, betweenAll } from 'strio'

between('Hello [world]', '[', ']')
// "world"

betweenAll('{{a}} and {{b}}', '{{', '}}')
// ["a", "b"]
```

---

## count

Count substring occurrences.

```typescript
import { count } from 'strio'

count('hello world', 'l')
// 3

count('aaa', 'aa')
// 2
```

---

## ensure

Ensure prefix/suffix.

```typescript
import { ensureLeft, ensureRight } from 'strio'

ensureLeft('world', 'hello ')
// "hello world"

ensureRight('hello', ' world')
// "hello world"
```

---

## indent / dedent

Add/remove indentation.

```typescript
import { indent, dedent } from 'strio'

indent('hello\nworld', 2)
// "  hello\n  world"

dedent('  hello\n  world')
// "hello\nworld"
```

---

## insert

Insert text at position.

```typescript
import { insert } from 'strio'

insert('Hello World', 5, ',')
// "Hello, World"
```

---

## join

Smart array joining.

```typescript
import { join } from 'strio'

join(['a', 'b', 'c'], ', ', ' and ')
// "a, b and c"
```

---

## mask

Mask sensitive data.

```typescript
import { mask } from 'strio'

mask('1234567890', '*', 6)
// "******7890"
```

---

## reverse

Reverse string.

```typescript
import { reverse } from 'strio'

reverse('hello')
// "olleh"
```

---

## similarity

Calculate string similarity (0-1).

```typescript
import { similarity } from 'strio'

similarity('hello', 'hello')
// 1

similarity('hello', 'hallo')
// 0.8
```

---

## transliterate

Convert non-Latin to Latin.

```typescript
import { transliterate } from 'strio'

transliterate('Привет')
// "Privet"
```

---

## trim

Smart trimming.

```typescript
import { trim } from 'strio'

trim('  hello  ')
// "hello"
```

