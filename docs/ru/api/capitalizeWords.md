# capitalizeWords

Делает заглавной первую букву каждого слова.



## capitalizeWords

### Сигнатура

```typescript
function capitalizeWords(str: string): string
```

### Параметры

- `str` - Строка для обработки

### Возвращает

Строка с заглавной первой буквой каждого слова.

### Примеры

```typescript
import { capitalizeWords } from 'strio'

capitalizeWords('hello world')
// "Hello World"

capitalizeWords('the quick brown fox')
// "The Quick Brown Fox"
```

## Связанные функции

- [capitalize](/ru/api/capitalize) - Только первая буква
- [titleCase](/ru/api/humanize) - Title Case с правилами

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
