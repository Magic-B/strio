# trim

Удаление пробелов с концов строки.



## trim

### Сигнатура

```typescript
function trim(str: string, chars?: string): string
```

### Параметры

- `str` - Строка для обработки
- `chars` - Символы для удаления (по умолчанию: пробелы)

### Возвращает

Строку с удалёнными начальными и конечными пробелами.

### Примеры

```typescript
import { trim } from 'strio'

trim("  привет  ")
// "привет"

trim("  привет мир  ")
// "привет мир"

// Табуляция и переносы строк
trim("\t\nпривет\n\t")
// "привет"

// Смешанные пробелы
trim("  \t  привет  \n  ")
// "привет"

// Без пробелов
trim("привет")
// "привет"

// Только пробелы
trim("   ")
// ""

// Сохраняет внутренние пробелы
trim("  привет   мир  ")
// "привет   мир"

trim("")
// ""
```

### Примеры использования

#### Очистка пользовательского ввода

```typescript
import { trim } from 'strio'

function cleanInput(input: string): string {
  return trim(input)
}

cleanInput("  ivan.petrov@example.com  ")
// "ivan.petrov@example.com"
```

#### Валидация форм

```typescript
import { trim, isEmpty } from 'strio'

function validateRequired(value: string): boolean {
  return !isEmpty(trim(value))
}

validateRequired("  ")
// false

validateRequired("  Иван  ")
// true
```

#### Нормализация текста

```typescript
import { trim } from 'strio'

function normalizeText(text: string): string {
  return trim(text.toLowerCase())
}

normalizeText("  ПРИВЕТ МИР  ")
// "привет мир"
```

#### Очистка массива значений

```typescript
import { trim } from 'strio'

function trimAll(items: string[]): string[] {
  return items.map(item => trim(item))
}

trimAll(["  яблоко  ", "  банан  ", "  вишня  "])
// ["яблоко", "банан", "вишня"]
```

#### Парсинг CSV

```typescript
import { trim } from 'strio'

function parseCSVLine(line: string): string[] {
  return line.split(',').map(trim)
}

parseCSVLine("Иван  ,  Иванов  ,  ivan@example.com")
// ["Иван", "Иванов", "ivan@example.com"]
```

#### Очистка многострочного текста

```typescript
import { trim } from 'strio'

function cleanLines(text: string): string {
  return text
    .split('\n')
    .map(line => trim(line))
    .join('\n')
}
```

## Типы пробелов

Удаляет все стандартные символы пробелов:

- **Пробел**: ` ` (U+0020)
- **Табуляция**: `\t` (U+0009)
- **Перенос строки**: `\n` (U+000A)
- **Возврат каретки**: `\r` (U+000D)
- **Перевод формата**: `\f` (U+000C)
- **Вертикальная табуляция**: `\v` (U+000B)
- **Неразрывный пробел**: (U+00A0)
- **Другие Unicode пробелы**: Различные

## Внутренние пробелы

Удаляет только с концов, сохраняет внутренние пробелы:

```typescript
import { trim } from 'strio'

trim("  привет    мир  ")
// "привет    мир"
// ✅ Множественные внутренние пробелы сохранены

trim("  первый\n\nвторой  ")
// "первый\n\nвторой"
// ✅ Внутренние переносы строк сохранены
```

## Связанные функции

- [collapseWhitespace](/ru/api/strip) - Схлопывание пробелов
- [stripPrefix / stripSuffix](/ru/api/strip) - Удаление префикса/суффикса
- [truncate](/ru/api/truncate) - Укорачивание строк
- [dedent](/ru/api/indent) - Удаление отступов

## Смотрите также

- [Руководство по манипуляции строками](/ru/guide/string-manipulation)
- [Функции валидации](/ru/guide/string-validation)

