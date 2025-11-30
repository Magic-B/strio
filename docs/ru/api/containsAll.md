# containsAll

Проверяет, содержит ли строка все указанные подстроки.



## containsAll

### Сигнатура

```typescript
function containsAll(str: string, searches: string[], caseSensitive?: boolean): boolean
```

### Примеры

```typescript
import { containsAll } from 'strio'

containsAll('hello beautiful world', ['hello', 'world'])
// true
```

## Связанные функции

- [contains](/ru/api/contains) - Содержит подстроку
- [containsAny](/ru/api/containsAny) - Содержит любую подстроку

## Смотрите также

- [Руководство по валидации](/ru/guide/string-validation)
