# isString

Проверяет, является ли значение строкой.



## isString

### Сигнатура

```typescript
function isString(value: any): value is string
```

### Параметры

- `value` — значение, которое нужно проверить.

### Возвращает

`true`, если значение — строка, иначе `false`.

### Примеры

```typescript
import { isString } from 'strio'

// Строки
isString('hello')
// true

isString('')
// true

isString(String('hello'))
// true

// Не строки
isString(123)
// false

isString(true)
// false

isString(null)
// false

isString(undefined)
// false

isString(['array'])
// false

isString({ key: 'value' })
// false
```

## Практические кейсы

```typescript
import { isString } from 'strio'

// Type guard для безопасной обработки
function processInput(input: unknown): string {
  if (!isString(input)) {
    throw new Error('Input must be a string')
  }
  return input.toUpperCase() // TypeScript знает, что это строка
}

// Безопасные операции над строкой
import { capitalize } from 'strio'

function safeCapitalize(value: unknown): string {
  return isString(value) ? capitalize(value) : ''
}
```

## Связанные функции

- [isEmpty](/ru/api/isEmpty) — проверка на пустое значение
- [isAlpha](/ru/api/isAlpha) — только буквы
- [isNumeric](/ru/api/isNumeric) — только цифры

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)
- [Обзор API](/ru/api/overview)

