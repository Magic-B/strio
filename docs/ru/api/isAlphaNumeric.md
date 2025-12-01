# isAlphaNumeric

Проверяет, содержит ли строка только буквы и цифры.



## isAlphaNumeric

### Сигнатура

```typescript
function isAlphaNumeric(str: string): boolean
```

### Параметры

- `str` — строка для проверки.

### Возвращает

`true`, если строка состоит только из букв и цифр, иначе `false`.

### Примеры

```typescript
import { isAlphaNumeric } from 'strio'

// Буквы и цифры
isAlphaNumeric('hello123')
// true

isAlphaNumeric('Test2024')
// true

isAlphaNumeric('abc')
// true

isAlphaNumeric('123')
// true

// С кириллицей
isAlphaNumeric('привет123')
// true

// Не только буквы и цифры
isAlphaNumeric('hello-123')
// false (дефис)

isAlphaNumeric('hello 123')
// false (пробел)

isAlphaNumeric('hello_123')
// false (нижнее подчёркивание)

isAlphaNumeric('')
// false (пустая строка)
```

## Практические кейсы

```typescript
import { isAlphaNumeric } from 'strio'

// Валидация username
function validateUsername(username: string): boolean {
  return (
    isAlphaNumeric(username) &&
    username.length >= 3 &&
    username.length <= 20
  )
}

// Проверка наличия хотя бы одного буквенно-цифрового символа в пароле
function hasAlphaNumeric(password: string): boolean {
  return password.split('').some(char => isAlphaNumeric(char))
}

// Очистка строки: оставляем только буквы и цифры
function cleanAlphaNumeric(input: string): string {
  return input
    .split('')
    .filter(char => isAlphaNumeric(char))
    .join('')
}

cleanAlphaNumeric('hello@123!')
// "hello123"
```

## Связанные функции

- [isAlpha](/ru/api/isAlpha) — только буквы
- [isNumeric](/ru/api/isNumeric) — только цифры
- [slugify](/ru/api/slugify) — создание URL‑слага

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)
- [Обзор API](/ru/api/overview)

