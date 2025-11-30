# reverse

Переворот строки.



## reverse

### Сигнатура

```typescript
function reverse(str: string): string
```

### Параметры

- `str` - Строка для переворота

### Возвращает

Строку с символами в обратном порядке.

### Примеры

```typescript
import { reverse } from 'strio'

reverse("привет")
// "тевирп"

reverse("hello")
// "olleh"

reverse("123")
// "321"

reverse("привет мир")
// "рим тевирп"

// Палиндромы
reverse("топот")
// "топот"

reverse("")
// ""
```

### Примеры использования

#### Проверка палиндромов

```typescript
import { reverse } from 'strio'

function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '')
  return cleaned === reverse(cleaned)
}

isPalindrome("А роза упала на лапу Азора")
// true

isPalindrome("радар")
// true
```

#### Переворот слов

```typescript
import { reverse } from 'strio'

function reverseWords(sentence: string): string {
  return sentence
    .split(' ')
    .map(word => reverse(word))
    .join(' ')
}

reverseWords("Привет Мир")
// "тевирП риМ"
```

#### Переворот порядка предложения

```typescript
import { reverse } from 'strio'

function reverseSentence(sentence: string): string {
  return sentence.split(' ').reverse().join(' ')
}

reverseSentence("Привет Мир от JavaScript")
// "JavaScript от Мир Привет"
```

#### Зеркальный текст

```typescript
import { reverse } from 'strio'

function createMirror(text: string): string {
  return `${text} | ${reverse(text)}`
}

createMirror("Привет")
// "Привет | тевирП"
```

## Обработка символов

Работает с различными типами символов:

```typescript
import { reverse } from 'strio'

// ASCII
reverse("ABC123")
// "321CBA"

// Unicode буквы
reverse("café")
// "éfac"

// Эмодзи
reverse("Привет 👋")
// "👋 тевирП"

// Кириллица
reverse("Москва")
// "авксоМ"
```

## Связанные функции

- [truncate](/ru/api/truncate) - Укорачивание строк
- [words](/ru/api/words) - Разделение на слова
- [capitalize](/ru/api/capitalize) - Капитализация

## Смотрите также

- [Руководство по манипуляции строками](/ru/guide/string-manipulation)

