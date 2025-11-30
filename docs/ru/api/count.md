# count

Подсчёт вхождений подстроки в строке.



## count

### Сигнатура

```typescript
function count(str: string, substr: string): number
```

### Параметры

- `str` - Строка для поиска
- `substr` - Подстрока для подсчёта

### Возвращает

Количество найденных вхождений (0 если не найдено).

### Примеры

```typescript
import { count } from 'strio'

count("привет мир", "и")
// 2

count("hello world", "l")
// 3

count("test@example.com", "@")
// 1

// Регистрозависимый
count("Привет привет ПРИВЕТ", "привет")
// 1

// Не найдено
count("hello world", "x")
// 0
```

### Примеры использования

#### Валидация email

```typescript
import { count } from 'strio'

function isValidEmail(email: string): boolean {
  return count(email, "@") === 1 && count(email, ".") >= 1
}
```

#### Подсчёт слов

```typescript
import { count } from 'strio'

function countWord(text: string, word: string): number {
  return count(text.toLowerCase(), word.toLowerCase())
}
```

#### Статистика текста

```typescript
import { count } from 'strio'

function getTextStats(text: string) {
  return {
    sentences: count(text, ".") + count(text, "!") + count(text, "?"),
    paragraphs: count(text, "\n\n") + 1,
    commas: count(text, ",")
  }
}
```

## Связанные функции

- [contains](/ru/api/contains) - Проверка наличия подстроки
- [between](/ru/api/between) - Извлечение текста между разделителями

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)

