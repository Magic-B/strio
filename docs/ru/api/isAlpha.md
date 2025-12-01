# isAlpha

Проверяет, содержит ли строка только буквенные символы.



## isAlpha

### Сигнатура

```typescript
function isAlpha(str: string): boolean
```

### Параметры

- `str` — строка для проверки.

### Возвращает

`true`, если строка состоит только из букв, иначе `false`.

### Примеры

```typescript
import { isAlpha } from 'strio'

// Только буквы (латиница)
isAlpha('hello')
// true

isAlpha('HelloWorld')
// true

// С кириллицей
isAlpha('привет')
// true

// Не только буквы
isAlpha('hello123')
// false

isAlpha('hello world')
// false (пробел)

isAlpha('hello-world')
// false (дефис)

isAlpha('')
// false (пустая строка)

isAlpha('123')
// false
```

## Практические кейсы

```typescript
import { isAlpha } from 'strio'

// Валидация имени (разрешаем пробелы)
function validateName(name: string): boolean {
  return isAlpha(name.replace(/\s/g, ''))
}

// Фильтрация только буквенных символов
function filterAlpha(input: string): string {
  return input
    .split('')
    .filter(char => isAlpha(char))
    .join('')
}

filterAlpha('abc123xyz')
// "abcxyz"
```

## Связанные функции

- [isNumeric](/ru/api/isNumeric) — только цифры
- [isAlphaNumeric](/ru/api/isAlphaNumeric) — буквы и цифры
- [isString](/ru/api/isString) — значение является строкой

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)
- [Обзор API](/ru/api/overview)

