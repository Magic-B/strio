# capitalize

Делает первую букву заглавной, остальные — строчными.



## capitalize

### Сигнатура

```typescript
function capitalize(str: string): string
```

### Параметры

- `str` - Строка для обработки

### Возвращает

Строка с заглавной первой буквой и остальными строчными.

### Примеры

```typescript
import { capitalize } from 'strio'

capitalize('hello world')
// "Hello world"

capitalize('HELLO WORLD')
// "Hello world"

capitalize('привет мир')
// "Привет мир"
```

## Связанные функции

- [capitalizeWords](/ru/api/capitalizeWords) - Заглавная буква каждого слова
- [titleCase](/ru/api/humanize) - Title Case с правилами грамматики

## Смотрите также

- [Руководство по манипуляциям](/ru/guide/string-manipulation)
