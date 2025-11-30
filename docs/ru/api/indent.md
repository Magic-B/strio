# indent

Добавляет отступы к каждой строке.



## indent

### Сигнатура

```typescript
function indent(str: string, spaces: number | string = 2): string
```

### Параметры

- `str` - Строка для добавления отступов
- `spaces` - Количество пробелов (number) или строка отступа (по умолчанию: 2)

### Возвращает

Строку с добавленными отступами.

### Примеры

```typescript
import { indent } from 'strio'

indent('line 1\nline 2')
// "  line 1\n  line 2"

indent('code', 4)
// "    code"

indent('function()', 1, '\t')
// "\tfunction()"
```

## Связанные функции

- [dedent](/ru/api/dedent) - Удалить отступы

## Смотрите также

- [Руководство по форматированию](/ru/guide/string-formatting)
