# words

Разделяет строку на массив слов.



## words

### Сигнатура

```typescript
function words(str: string): string[]
```

### Параметры

- `str` - Строка для разделения

### Возвращает

Массив слов.

### Примеры

```typescript
import { words } from 'strio'

words('hello world')
// ["hello", "world"]

words('The quick brown fox')
// ["The", "quick", "brown", "fox"]

words('hello    world')
// ["hello", "world"]

words('')
// []
```

## Связанные функции

- [wordCount](/ru/api/wordCount) - Подсчитать слова
- [truncateWords](/ru/api/truncateWords) - Обрезать по словам
- [join](/ru/api/join) - Объединить массив

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
