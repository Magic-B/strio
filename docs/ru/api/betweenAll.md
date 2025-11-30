# betweenAll

Извлекает все подстроки между двумя разделителями.



## betweenAll

### Сигнатура

```typescript
function betweenAll(str: string, left: string, right: string): string[]
```

### Примеры

```typescript
import { betweenAll } from 'strio'

betweenAll('Hello [world] and [universe]', '[', ']')
// ["world", "universe"]
```

## Связанные функции

- [between](/ru/api/between) - Извлечь первое совпадение

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
