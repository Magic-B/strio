# stripSuffix

Удаляет суффикс из строки, если он существует.



## stripSuffix

### Сигнатура

```typescript
function stripSuffix(str: string, suffix: string): string
```

### Примеры

```typescript
import { stripSuffix } from 'strio'

stripSuffix('Hello world', ' world')
// "Hello"
```

## Связанные функции

- [stripPrefix](/ru/api/stripPrefix) - Удалить префикс
- [ensureRight](/ru/api/ensureRight) - Гарантировать суффикс

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
