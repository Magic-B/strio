# truncateWords

Обрезает строку до указанного количества слов.



## truncateWords

### Сигнатура

```typescript
function truncateWords(str: string, count: number, suffix?: string): string
```

### Примеры

```typescript
import { truncateWords } from 'strio'

truncateWords('The quick brown fox', 2)
// "The quick..."
```

## Связанные функции

- [truncate](/ru/api/truncate) - Обрезать по символам
- [words](/ru/api/words) - Разделить на слова

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
