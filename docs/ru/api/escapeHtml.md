# escapeHtml

Экранирует специальные HTML-символы.



## escapeHtml

### Сигнатура

```typescript
function escapeHtml(str: string): string
```

### Примеры

```typescript
import { escapeHtml } from 'strio'

escapeHtml('<div>Hello & "goodbye"</div>')
// "&lt;div&gt;Hello &amp; &quot;goodbye&quot;&lt;/div&gt;"
```

## Связанные функции

- [unescapeHtml](/ru/api/unescapeHtml) - Деэкранировать HTML
- [escapeRegExp](/ru/api/escapeRegExp) - Экранировать regex
- [stripTags](/ru/api/stripTags) - Удалить HTML-теги

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
