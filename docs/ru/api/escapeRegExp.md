# escapeRegExp

Экранирует специальные символы для использования в регулярных выражениях.



## escapeRegExp

### Сигнатура

```typescript
function escapeRegExp(str: string): string
```

### Примеры

```typescript
import { escapeRegExp } from 'strio'

escapeRegExp('hello.world')
// "hello\\.world"

const pattern = new RegExp(escapeRegExp('test?'))
```

## Связанные функции

- [escapeHtml](/ru/api/escapeHtml) - Экранировать HTML

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
