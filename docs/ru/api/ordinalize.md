# ordinalize

Добавляет порядковые суффиксы к числам.


## ordinalize

### Сигнатура

```typescript
function ordinalize(num: number): string
```

### Параметры

- `num` - Число для преобразования

### Возвращает

Число с порядковым суффиксом (st, nd, rd, th).

### Примеры

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

## Примеры использования

```typescript
// Рейтинг
function displayRank(position: number, name: string): string {
  return `${name} находится на ${ordinalize(position)} месте`
}

displayRank(1, 'Алиса')  // "Алиса находится на 1st месте"
displayRank(2, 'Боб')    // "Боб находится на 2nd месте"

// Даты
function formatDay(day: number): string {
  return `${ordinalize(day)} день`
}

formatDay(1)   // "1st день"
formatDay(15)  // "15th день"

// Элементы списка
function formatListItem(index: number, item: string): string {
  return `${ordinalize(index + 1)}: ${item}`
}

['Первый', 'Второй', 'Третий'].map((item, i) => formatListItem(i, item))
// ["1st: Первый", "2nd: Второй", "3rd: Третий"]
```

## Связанные функции

- [pluralize](/ru/api/pluralize) - Единственное/множественное число
- [humanize](/ru/api/humanize) - Преобразование в читаемый формат

## Смотрите также

- [Руководство по форматированию](/ru/guide/string-formatting)
- [API Reference](/ru/api/overview)

