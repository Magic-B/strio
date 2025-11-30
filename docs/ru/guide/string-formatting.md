# Форматирование строк

Узнайте, как форматировать строки для отображения с помощью strio.

## Гуманизация

### humanize

Преобразовать строки в стиле кода в читаемый формат:

```typescript
import { humanize } from 'strio'

humanize('privet_mir') // "Privet mir"
humanize('imya-polzovatelya') // "Imya polzovatelya"
humanize('firstName') // "First name"
```

### titleCase

Преобразовать в Title Case:

```typescript
import { titleCase } from 'strio'

titleCase('privet mir') // "Privet Mir"
titleCase('bystraya lisitsa') // "Bystraya Lisitsa"
```

## Слагификация

### slugify

Создать URL-friendly slug:

```typescript
import { slugify } from 'strio'

slugify('Привет Мир!') // "privet-mir"
slugify('Моя Статья 123') // "moya-statya-123"
slugify('Привет Мир') // "privet-mir" (транслитерация)

// Пользовательский разделитель
slugify('Привет Мир', '_') // "privet_mir"
```

## Транслитерация

### transliterate

Преобразовать нелатинские символы в латинские:

```typescript
import { transliterate } from 'strio'

transliterate('Привет') // "Privet"
transliterate('Здравствуйте') // "Zdravstvuyte"
transliterate('Москва') // "Moskva"
```

## Числа и множественное число

### ordinalize

Добавить порядковый суффикс к числам:

```typescript
import { ordinalize } from 'strio'

ordinalize(1) // "1st"
ordinalize(2) // "2nd"
ordinalize(3) // "3rd"
ordinalize(4) // "4th"
ordinalize(21) // "21st"
```

### pluralize

Преобразовать единственное в множественное число:

```typescript
import { pluralize } from 'strio'

// С количеством
pluralize('cat', 1) // "cat"
pluralize('cat', 2) // "cats"

// Включить число
pluralize('товар', 0, true) // "0 товаров"
pluralize('товар', 1, true) // "1 товар"
pluralize('товар', 5, true) // "5 товаров"
```

## Шаблоны

### template

Простая замена в строковых шаблонах:

```typescript
import { template } from 'strio'

// Базовая замена
template('Привет, {{name}}!', { name: 'Иван' })
// "Привет, Иван!"

// Множественные переменные
template('{{greeting}}, {{name}}!', {
  greeting: 'Здравствуйте',
  name: 'Мир'
})
// "Здравствуйте, Мир!"

// Вложенные объекты
template('Пользователь: {{user.name}} ({{user.age}})', {
  user: { name: 'Иван', age: 30 }
})
// "Пользователь: Иван (30)"
```

## Примеры из реальной жизни

### URL блог-поста

```typescript
import { slugify } from 'strio'

function createPostUrl(title: string, id: number): string {
  const slug = slugify(title)
  return `/blog/${id}/${slug}`
}

createPostUrl('10 Советов для Лучшего Кода', 42)
// "/blog/42/10-sovetov-dlya-luchshego-koda"
```

### Приветствие пользователя

```typescript
import { capitalize } from 'strio'

function greetUser(name: string, time: 'утро' | 'день' | 'вечер'): string {
  const greeting = time === 'утро' ? 'Доброе утро' : 
                   time === 'день' ? 'Добрый день' : 
                   'Добрый вечер'
  
  return `${greeting}, ${capitalize(name)}!`
}

greetUser('иван', 'утро')
// "Доброе утро, Иван!"
```

### Отображение количества элементов

```typescript
import { pluralize } from 'strio'

function displayItemCount(count: number, item: string): string {
  if (count === 0) {
    return `Нет ${pluralize(item)}`
  }
  return pluralize(item, count, true)
}

displayItemCount(0, 'товар')    // "Нет товаров"
displayItemCount(1, 'товар')    // "1 товар"
displayItemCount(5, 'товар')    // "5 товаров"
```

### Email шаблон

```typescript
import { template } from 'strio'

interface EmailData {
  user: { name: string }
  order: { id: string; total: number }
  items: string[]
}

function generateOrderEmail(data: EmailData): string {
  const itemsList = data.items.map(item => `- ${item}`).join('\n')
  
  return template(`
Здравствуйте, {{user.name}}!

Ваш заказ #{{order.id}} подтверждён!

Товары:
${itemsList}

Итого: {{order.total}} руб.

Спасибо за покупку!
  `.trim(), data)
}
```

## Советы и лучшие практики

### 1. Комбинируйте функции

```typescript
import { slugify, ensureRight } from 'strio'

function createFilename(title: string, ext: string): string {
  return ensureRight(slugify(title), ext)
}

createFilename('Мой Документ', '.pdf')
// "moj-dokument.pdf"
```

### 2. Безопасные шаблоны

```typescript
import { template, escapeHtml } from 'strio'

function safeTemplate(tmpl: string, data: Record<string, any>): string {
  const safeData = Object.entries(data).reduce((acc, [key, value]) => {
    acc[key] = typeof value === 'string' ? escapeHtml(value) : value
    return acc
  }, {} as Record<string, any>)
  
  return template(tmpl, safeData)
}
```

## Следующие шаги

- [Манипуляции со строками](/ru/guide/string-manipulation) - Преобразование строк
- [Валидация строк](/ru/guide/string-validation) - Валидация строк
- [Справочник API](/ru/api/overview) - Просмотрите все функции
