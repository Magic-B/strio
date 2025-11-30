# Манипуляции со строками

Узнайте, как преобразовывать и манипулировать строками с помощью strio.

## Базовые преобразования

### Капитализация

Сделать первый символ заглавным:

```typescript
import { capitalize, capitalizeWords } from 'strio'

capitalize('привет мир') // "Привет мир"
capitalizeWords('привет мир') // "Привет Мир"

// С пользовательской локалью
capitalize('привет мир') // "Привет мир"
```

### Переворот

Перевернуть строку:

```typescript
import { reverse } from 'strio'

reverse('привет') // "тевирп"
reverse('12345') // "54321"
```

### Обрезка

Укоротить длинные строки:

```typescript
import { truncate, truncateWords } from 'strio'

// По количеству символов
truncate('Лорем ипсум долор сит амет', 10)
// "Лорем ипсу..."

// Пользовательское многоточие
truncate('Длинный текст здесь', 8, '…')
// "Длинный …"

// По количеству слов
truncateWords('Раз два три четыре пять', 3)
// "Раз два три..."
```

### Вставка

Вставить текст в определённую позицию:

```typescript
import { insert } from 'strio'

insert('Привет Мир', 6, ',')
// "Привет, Мир"

insert('JavaScript', 4, '❤️')
// "Java❤️Script"
```

## Преобразование регистра

### CamelCase

Преобразование в camelCase:

```typescript
import { camelize } from 'strio'

camelize('привет мир') // "privetMir"
camelize('имя-пользователя') // "imyaPolzovatelya"
```

### PascalCase

Преобразование в PascalCase:

```typescript
import { pascalize } from 'strio'

pascalize('привет мир') // "PrivetMir"
pascalize('профиль-пользователя') // "ProfilPolzovatelya"
```

### kebab-case

Преобразование в kebab-case:

```typescript
import { dasherize } from 'strio'

dasherize('privetMir') // "privet-mir"
dasherize('ProfilPolzovatelya') // "profil-polzovatelya"
```

### snake_case

Преобразование в snake_case:

```typescript
import { underscore } from 'strio'

underscore('privetMir') // "privet_mir"
underscore('ProfilPolzovatelya') // "profil_polzovatelya"
```

## Обрезка и очистка

### Trim

Удалить пробелы:

```typescript
import { trim } from 'strio'

trim('  привет  ') // "привет"
trim('\n\tтаб\t\n') // "таб"
```

### Схлопывание пробелов

Заменить множественные пробелы на один:

```typescript
import { collapseWhitespace } from 'strio'

collapseWhitespace('привет    мир')
// "привет мир"

collapseWhitespace('множество\n\nстрок')
// "множество строк"
```

### Удаление префикса/суффикса

Удалить определённый текст с начала или конца:

```typescript
import { stripPrefix, stripSuffix } from 'strio'

stripPrefix('привет мир', 'привет ')
// "мир"

stripSuffix('filename.txt', '.txt')
// "filename"
```

## Выравнивание

### Pad Left/Right/Center

Добавить выравнивание к строкам:

```typescript
import { padLeft, padRight, padCenter } from 'strio'

padLeft('42', 5, '0') // "00042"
padRight('привет', 10, '.') // "привет....."
padCenter('текст', 10, '-') // "---текст---"
```

## Примеры из реальной жизни

### Очистка пользовательского ввода

```typescript
import { trim, collapseWhitespace, capitalize } from 'strio'

function cleanInput(text: string): string {
  return capitalize(
    trim(
      collapseWhitespace(text)
    )
  )
}

cleanInput('  привет    мир  ')
// "Привет мир"
```

### Форматирование номера телефона

```typescript
import { mask } from 'strio'

function formatPhone(phone: string): string {
  // Удалить не-цифры
  const digits = phone.replace(/\D/g, '')
  
  // Замаскировать средние цифры
  return mask(digits, '*', 3, -4)
}

formatPhone('1234567890')
// "123***7890"
```

## Следующие шаги

- [Валидация строк](/ru/guide/string-validation) - Проверка и валидация строк
- [Форматирование строк](/ru/guide/string-formatting) - Форматирование для отображения
- [Справочник API](/ru/api/overview) - Просмотрите все функции
