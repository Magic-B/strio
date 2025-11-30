# contains

Проверяет, содержит ли строка подстроку.



## contains

### Сигнатура

```typescript
function contains(str: string, substring: string, ignoreCase: boolean = false): boolean
```

### Примеры

```typescript
import { contains } from 'strio'

contains('hello world', 'world')
// true

contains('Hello World', 'world', false)
// true
```

## Связанные функции

- [containsAll](/ru/api/containsAll) - Содержит все подстроки
- [containsAny](/ru/api/containsAny) - Содержит любую из подстрок

## Смотрите также

- [Руководство по валидации](/ru/guide/string-validation)
