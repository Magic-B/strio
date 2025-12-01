# isLowerCase

Проверяет, что все буквы в строке — строчные.



## isLowerCase

### Сигнатура

```typescript
function isLowerCase(str: string): boolean
```

### Параметры

- `str` — строка для проверки.

### Возвращает

`true`, если в строке есть буквы и все они в нижнем регистре, иначе `false`.

### Примеры

```typescript
import { isLowerCase } from 'strio'

// Строчные буквы
isLowerCase('hello')
// true

isLowerCase('hello123')
// true

isLowerCase('a')
// true

// Не все буквы строчные
isLowerCase('Hello')
// false

isLowerCase('HELLO')
// false

isLowerCase('HeLLo')
// false

// Без букв
isLowerCase('123')
// false

isLowerCase('!@#')
// false

isLowerCase('')
// false
```

## Практические кейсы

```typescript
import { isLowerCase, isAlphaNumeric } from 'strio'

// Гарантировать нижний регистр
function ensureLowerCase(input: string): string {
  if (!isLowerCase(input)) {
    console.warn('Input should be lowercase')
    return input.toLowerCase()
  }
  return input
}

// Валидация slug-а
function isValidSlug(slug: string): boolean {
  const cleaned = slug.replace(/[-_]/g, '')
  return (
    cleaned.length > 0 &&
    isLowerCase(cleaned) &&
    isAlphaNumeric(cleaned)
  )
}

isValidSlug('my-blog-post')
// true

isValidSlug('My-Blog-Post')
// false
```

## Связанные функции

- [isUpperCase](/ru/api/isUpperCase) — все буквы заглавные
- [capitalize](/ru/api/capitalize) — делает первую букву заглавной
- [slugify](/ru/api/slugify) — создание URL‑слага

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)
- [Обзор API](/ru/api/overview)

