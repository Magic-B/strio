# containsAny

Проверяет, содержит ли строка любую из указанных подстрок.



## containsAny

### Сигнатура

```typescript
function containsAny(str: string, searches: string[], caseSensitive?: boolean): boolean
```

### Примеры

```typescript
import { containsAny } from 'strio'

containsAny('hello world', ['hello', 'foo'])
// true
```

## Связанные функции

- [contains](/ru/api/contains) - Содержит подстроку
- [containsAll](/ru/api/containsAll) - Содержит все подстроки

## Смотрите также

- [Руководство по валидации](/ru/guide/string-validation)
