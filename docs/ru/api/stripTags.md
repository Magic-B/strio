# stripTags

Удаляет HTML/XML теги из строки.



## stripTags

### Сигнатура

```typescript
function stripTags(str: string): string
```

### Примеры

```typescript
import { stripTags } from 'strio'

stripTags('<p>Hello <strong>world</strong></p>')
// "Hello world"
```

## Связанные функции

- [escapeHtml](/ru/api/escapeHtml) - Экранировать HTML
- [collapseWhitespace](/ru/api/collapseWhitespace) - Схлопнуть пробелы

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
