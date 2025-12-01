# isNumeric

Проверяет, содержит ли строка только цифры.



## isNumeric

### Сигнатура

```typescript
function isNumeric(str: string): boolean
```

### Параметры

- `str` — строка для проверки.

### Возвращает

`true`, если строка состоит только из цифр (`0–9`), иначе `false`.

### Примеры

```typescript
import { isNumeric } from 'strio'

// Только цифры
isNumeric('123')
// true

isNumeric('0')
// true

isNumeric('999999')
// true

// Не только цифры
isNumeric('12.34')
// false (точка)

isNumeric('12,34')
// false (запятая)

isNumeric('-123')
// false (минус)

isNumeric('+123')
// false (плюс)

isNumeric('1 2 3')
// false (пробелы)

isNumeric('')
// false (пустая строка)
```

## Практические кейсы

```typescript
import { isNumeric } from 'strio'

// Валидация номера телефона (только цифры)
function validatePhoneDigits(phone: string): boolean {
  const digits = phone.replace(/\D/g, '')
  return isNumeric(digits) && digits.length === 10
}

// Валидация ID
function validateId(id: string): boolean {
  return isNumeric(id) && id.length > 0
}

// Безопасное преобразование в число
function toNumber(str: string): number | null {
  return isNumeric(str) ? parseInt(str, 10) : null
}
```

## Связанные функции

- [isAlpha](/ru/api/isAlpha) — только буквы
- [isAlphaNumeric](/ru/api/isAlphaNumeric) — буквы и цифры
- [count](/ru/api/count) — подсчёт вхождений

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)
- [Обзор API](/ru/api/overview)

