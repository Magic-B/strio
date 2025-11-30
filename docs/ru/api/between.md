# between

Извлекает текст между двумя подстроками (только первое вхождение).



## between

### Сигнатура

```typescript
function between(str: string, start: string, end: string): string
```

### Параметры

- `str` - Исходная строка
- `start` - Начальный разделитель
- `end` - Конечный разделитель

### Возвращает

Строку между разделителями, или пустую строку если не найдено.

### Примеры

```typescript
import { between } from 'strio'

between('Hello [world]', '[', ']')
// "world"

between('<div>content</div>', '<div>', '</div>')
// "content"

between('[first] and [second]', '[', ']')
// "first" (только первое вхождение)
```

## Связанные функции

- [betweenAll](/ru/api/betweenAll) - Извлечь все вхождения

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
