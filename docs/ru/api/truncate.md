# truncate

Обрезает строку до указанной длины.



## truncate

### Сигнатура

```typescript
function truncate(str: string, length: number, suffix?: string): string
```

### Параметры

- `str` - Строка для обрезки
- `length` - Максимальная длина (включая суффикс)
- `suffix` - Строка для добавления (по умолчанию: "...")

### Возвращает

Обрезанную строку с суффиксом при необходимости.

### Примеры

```typescript
import { truncate } from 'strio'

truncate('Hello World', 8)
// "Hello..."

truncate('Short', 10)
// "Short"

truncate('Long text here', 10, '…')
// "Long text…"
```

## Связанные функции

- [truncateWords](/ru/api/truncateWords) - Обрезать по словам

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
