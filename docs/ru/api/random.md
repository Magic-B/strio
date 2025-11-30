# random

Генерирует случайную строку указанной длины.



## random

### Сигнатура

```typescript
function random(length: number, charset?: string): string
```

### Параметры

- `length` - Длина генерируемой строки
- `charset` - Пользовательский набор символов (по умолчанию: буквы и цифры)

### Возвращает

Случайную строку.

### Примеры

```typescript
import { random } from 'strio'

random(10)
// "aB3dE7fG9h"

random(8, 'ABC123')
// "A1B2C3A1"
```

## Связанные функции

- [randomAlpha](/ru/api/randomAlpha) - Только буквы
- [randomNumeric](/ru/api/randomNumeric) - Только цифры
- [randomAlphanumeric](/ru/api/randomAlphanumeric) - Буквы и цифры

## Смотрите также

- [API Reference](/ru/api/overview)
