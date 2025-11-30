# stripPrefix

Удаляет префикс из строки, если он существует.



## stripPrefix

### Сигнатура

```typescript
function stripPrefix(str: string, prefix: string): string
```

### Примеры

```typescript
import { stripPrefix } from 'strio'

stripPrefix('Hello world', 'Hello ')
// "world"
```

## Связанные функции

- [stripSuffix](/ru/api/stripSuffix) - Удалить суффикс
- [ensureLeft](/ru/api/ensureLeft) - Гарантировать префикс

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
