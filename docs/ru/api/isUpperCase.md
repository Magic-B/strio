# isUpperCase

Проверяет, что все буквы в строке — заглавные.



## isUpperCase

### Сигнатура

```typescript
function isUpperCase(str: string): boolean
```

### Параметры

- `str` — строка для проверки.

### Возвращает

`true`, если в строке есть буквы и все они в верхнем регистре, иначе `false`.

### Примеры

```typescript
import { isUpperCase } from 'strio'

// Заглавные
isUpperCase('HELLO')
// true

isUpperCase('HELLO123')
// true

isUpperCase('A')
// true

// Не все буквы заглавные
isUpperCase('Hello')
// false

isUpperCase('hello')
// false

isUpperCase('HeLLo')
// false

// Без букв
isUpperCase('123')
// false

isUpperCase('!@#')
// false

isUpperCase('')
// false
```

## Практические кейсы

```typescript
import { isUpperCase } from 'strio'

// Валидация имени константы (разрешаем подчёркивания)
function isValidConstantName(name: string): boolean {
  return isUpperCase(name.replace(/_/g, ''))
}

isValidConstantName('MAX_VALUE')
// true

// Детект "крика" в тексте
function isShouting(text: string): boolean {
  const letters = text.replace(/[^a-zA-ZА-ЯЁ]/gi, '')
  return letters.length > 0 && isUpperCase(letters)
}

isShouting('HELLO!!!')
// true
```

## Связанные функции

- [isLowerCase](/ru/api/isLowerCase) — все буквы строчные
- [capitalize](/ru/api/capitalize) — делает первую букву заглавной
- [underscore](/ru/api/underscore) — преобразование в `SNAKE_CASE` / `snake_case`

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)
- [Обзор API](/ru/api/overview)

