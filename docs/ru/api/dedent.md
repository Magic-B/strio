# dedent

Удаляет общие отступы из каждой строки.



## dedent

### Сигнатура

```typescript
function dedent(str: string): string
```

### Примеры

```typescript
import { dedent } from 'strio'

dedent(\`
  Line 1
  Line 2
\`)
// "Line 1\nLine 2"
```

## Связанные функции

- [indent](/ru/api/indent) - Добавить отступы

## Смотрите также

- [Руководство по форматированию](/ru/guide/string-formatting)
