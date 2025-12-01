# isBlank

Проверяет, является ли строка пустой **или** содержит только пробельные символы.


## isBlank

### Сигнатура

```typescript
function isBlank(str: string | null | undefined): boolean
```

### Параметры

- `str` — значение, которое нужно проверить.

### Возвращает

`true`, если строка пустая или состоит только из пробелов/переводов строки/табов, иначе `false`.

### Примеры

```typescript
import { isBlank } from 'strio'

// Пустая строка
isBlank('')
// true

// Только пробелы / whitespace
isBlank('   ')
// true

isBlank('\n\t\r')
// true

isBlank('  \n  \t  ')
// true

// null и undefined
isBlank(null)
// true

isBlank(undefined)
// true

// Непустые строки
isBlank('hello')
// false

isBlank('  hello  ')
// false (есть непробельные символы)
```

## Практические кейсы

```typescript
import { isBlank, isEmpty } from 'strio'

// Более "строгая" required-валидация (игнорируем пробелы)
function validateInput(value: string | null | undefined): boolean {
  return !isBlank(value)
}

// Проверка: строка состоит только из пробелов (а не совсем пустая)
function isOnlyWhitespace(value: string | null | undefined): boolean {
  return !isEmpty(value) && isBlank(value)
}

// Очистка значения: превращаем "пустые" строки в null
function sanitize(input: string | null | undefined): string | null {
  return isBlank(input) ? null : input!.trim()
}
```

## Связанные функции

- [isEmpty](/ru/api/isEmpty) — проверка на пустое значение
- [trim](/ru/api/trim) — обрезка пробельных символов по краям
- [collapseWhitespace](/ru/api/collapseWhitespace) — схлопывание повторяющихся пробелов

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)
- [Обзор API](/ru/api/overview)
