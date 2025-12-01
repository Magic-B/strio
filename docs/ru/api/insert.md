# insert

Вставка строки в заданную позицию.



## insert

### Сигнатура

```typescript
function insert(str: string, position: number, insertion: string): string
```

### Параметры

- `str` - Исходная строка
- `position` - Индекс для вставки (начинается с 0)
- `insertion` - Строка для вставки

### Возвращает

Новую строку с вставкой. Возвращает оригинал, если позиция выходит за границы.

### Примеры

```typescript
import { insert } from 'strio'

insert("Hello World", 5, ",")
// "Hello, World"

insert("abc", 1, "X")
// "aXbc"

insert("test", 0, "pre-")
// "pre-test"

insert("test", 4, "-post")
// "test-post"

insert("HelloWorld", 5, " ")
// "Hello World"
```

### Примеры использования

#### Форматирование телефонного номера

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

#### Добавление разделителей

```typescript
import { insert } from 'strio'

function formatCreditCard(number: string): string {
  let formatted = number
  for (let i = 4; i < 16; i += 5) {
    formatted = insert(formatted, i, " ")
  }
  return formatted
}
```

#### Вставка тегов

```typescript
import { insert } from 'strio'

function highlightText(text: string, start: number, end: number): string {
  let result = insert(text, start, "<mark>")
  result = insert(result, end + 6, "</mark>")
  return result
}
```

## Правила позиции

Позиция начинается с 0:

```typescript
const str = "abcd"
//          0123  <- позиции

insert(str, 0, "X")  // "Xabcd"  (перед 'a')
insert(str, 1, "X")  // "aXbcd"  (после 'a')
insert(str, 4, "X")  // "abcdX"  (в конце)
```

## Связанные функции

- [replace](/ru/guide/string-manipulation) - Замена подстрок
- [padLeft](/ru/api/padLeft) / [padRight](/ru/api/padRight) / [padCenter](/ru/api/padCenter) - Добавление отступов
- [between](/ru/api/between) - Извлечение текста

## Смотрите также

- [Руководство по манипуляции строками](/ru/guide/string-manipulation)

