# humanize

Преобразует строки в стиле кода в человекочитаемый формат.



## humanize

### Сигнатура

```typescript
function humanize(str: string): string
```

### Параметры

- `str` - Строка для преобразования

### Возвращает

Человекочитаемую строку с правильными пробелами и заглавными буквами.

### Примеры

```typescript
import { humanize } from 'strio'

humanize('user_name')
// "User name"

humanize('firstName')
// "First name"

humanize('my-variable-name')
// "My variable name"

humanize('API_KEY')
// "Api key"
```

## Связанные функции

- [titleCase](/ru/api/titleCase) - Title Case
- [capitalizeWords](/ru/api/capitalizeWords) - Заглавная буква каждого слова

## Смотрите также

- [Руководство по форматированию](/ru/guide/string-formatting)
