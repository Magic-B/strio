# unescapeHtml

Декодирует HTML-сущности.



## unescapeHtml

### Сигнатура

```typescript
function unescapeHtml(str: string): string
```

### Примеры

```typescript
import { unescapeHtml } from 'strio'

unescapeHtml('&lt;div&gt;Hello&lt;/div&gt;')
// "<div>Hello</div>"
```

## Связанные функции

- [escapeHtml](/ru/api/escapeHtml) - Экранировать HTML

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
