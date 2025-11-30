# ordinalize

Add ordinal suffixes to numbers.



## ordinalize

### Signature

```typescript
function ordinalize(num: number): string
```

### Parameters

- `num` - Number to ordinalize

### Returns

Number with ordinal suffix (st, nd, rd, th).

### Examples

```typescript
import { ordinalize } from 'strio'

ordinalize(1)    // "1st"
ordinalize(2)    // "2nd"
ordinalize(3)    // "3rd"
ordinalize(4)    // "4th"
ordinalize(21)   // "21st"
ordinalize(22)   // "22nd"
ordinalize(23)   // "23rd"
ordinalize(100)  // "100th"
ordinalize(101)  // "101st"
ordinalize(111)  // "111th"
ordinalize(121)  // "121st"
```

## Use Cases

```typescript
// Ranking
function displayRank(position: number, name: string): string {
  return `${name} is in ${ordinalize(position)} place`
}

displayRank(1, 'Alice')  // "Alice is in 1st place"
displayRank(2, 'Bob')    // "Bob is in 2nd place"

// Dates
function formatDay(day: number): string {
  return `${ordinalize(day)} day`
}

formatDay(1)   // "1st day"
formatDay(15)  // "15th day"

// List items
function formatListItem(index: number, item: string): string {
  return `${ordinalize(index + 1)}: ${item}`
}

['First', 'Second', 'Third'].map((item, i) => formatListItem(i, item))
// ["1st: First", "2nd: Second", "3rd: Third"]
```

## Related Functions

- [pluralize](/api/pluralize) - Handle singular/plural forms
- [humanize](/api/humanize) - Convert to human-readable format

## See Also

- [String Formatting Guide](/guide/string-formatting)
- [API Reference](/api/overview)

