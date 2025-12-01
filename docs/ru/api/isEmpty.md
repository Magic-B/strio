# isEmpty

Проверяет, является ли значение «пустой строкой» — `null`, `undefined` или `""`.


## isEmpty

### Сигнатура

```typescript
function isEmpty(str: string | null | undefined): boolean
```

### Параметры

- `str` — значение, которое нужно проверить.

### Возвращает

`true`, если значение пустое, иначе `false`.

### Примеры

```typescript
import { isEmpty } from 'strio'

// Пустая строка
isEmpty('')
// true

// null и undefined
isEmpty(null)
// true

isEmpty(undefined)
// true

// Непустые строки
isEmpty('hello')
// false

isEmpty(' ')
// false (пробел считается содержимым)

isEmpty('0')
// false (строка "0" не считается пустой)

// Другие типы (приведены к any для примера)
isEmpty(0 as any)
// false

isEmpty(false as any)
// false
```

## Практические кейсы

```typescript
import { isEmpty } from 'strio'

// Валидация обязательного поля формы
function validateRequired(value: string | null | undefined): boolean {
  return !isEmpty(value)
}

// Условный рендеринг
if (!isEmpty(user.bio)) {
  renderBio(user.bio!)
}

// Значение по умолчанию
const displayName = isEmpty(name) ? 'Anonymous' : name
```

## Связанные функции

- [isBlank](/ru/api/isBlank) — проверка на пустую строку или только пробелы
- [isString](/ru/api/isString) — проверка, что значение — строка
- [trim](/ru/api/trim) — обрезка пробельных символов

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)
- [Обзор API](/ru/api/overview)
