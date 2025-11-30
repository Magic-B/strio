# slugify

Создание URL-дружественных slug с автоматической транслитерацией.


## slugify

### Сигнатура

```typescript
function slugify(str: string, separator?: string): string
```

### Параметры

- `str` - Строка для преобразования в slug
- `separator` - Символ-разделитель (по умолчанию: `"-"`)

### Возвращает

URL-дружественную slug-строку.

### Примеры

```typescript
import { slugify } from 'strio'

// Базовое использование
slugify('Hello World!')
// "hello-world"

slugify('Мой блог 123')
// "moj-blog-123"

// С кириллицей (авто-транслитерация)
slugify('Привет Мир')
// "privet-mir"

// С диакритикой
slugify('café résumé')
// "cafe-resume"

// Пользовательский разделитель
slugify('Hello World', '_')
// "hello_world"

slugify('Hello World', '.')
// "hello.world"

// Пустой разделитель
slugify('Hello World', '')
// "helloworld"

// Множественные пробелы/спецсимволы
slugify('Hello    World!!!   Test')
// "hello-world-test"

// Удаляются начальные/конечные разделители
slugify('  Hello World  ')
// "hello-world"

// Числа сохраняются
slugify('Top 10 Tips')
// "top-10-tips"

// Специальные символы
slugify('C++ Programming')
// "c-programming"

slugify('@username #tag')
// "username-tag"
```

## Примеры использования

### URL постов блога

```typescript
import { slugify } from 'strio'

function createPostUrl(title: string, id: number): string {
  const slug = slugify(title)
  return `/blog/${id}/${slug}`
}

createPostUrl('10 советов по коду', 42)
// "/blog/42/10-sovetov-po-kodu"

createPostUrl('Изучаем JavaScript', 43)
// "/blog/43/izuchaem-javascript"
```

### Имена файлов

```typescript
import { slugify, ensureRight } from 'strio'

function createFileName(title: string, ext: string): string {
  return ensureRight(slugify(title), ext)
}

createFileName('Мой Документ', '.pdf')
// "moj-dokument.pdf"

createFileName('Профиль Пользователя', '.json')
// "profil-polzovatelya.json"
```

### Генерация тегов

```typescript
import { slugify } from 'strio'

function generateTags(input: string): string[] {
  return input
    .split(',')
    .map(tag => slugify(tag.trim()))
    .filter(tag => tag.length > 0)
}

generateTags('JavaScript, Vue.js, Node.js')
// ["javascript", "vue-js", "node-js"]
```

### API-эндпоинты

```typescript
import { slugify } from 'strio'

function createEndpoint(resource: string, action: string): string {
  return `/api/${slugify(resource)}/${slugify(action)}`
}

createEndpoint('Профиль Пользователя', 'Получить Детали')
// "/api/profil-polzovatelya/poluchit-detali"
```

### Уникальные slug для базы данных

```typescript
import { slugify } from 'strio'

interface Post {
  title: string
  slug?: string
}

function generateUniqueSlug(title: string, existing: string[]): string {
  let slug = slugify(title)
  let counter = 1
  
  while (existing.includes(slug)) {
    slug = `${slugify(title)}-${counter}`
    counter++
  }
  
  return slug
}

const existing = ['privet-mir', 'privet-mir-1']
generateUniqueSlug('Привет Мир', existing)
// "privet-mir-2"
```

### Пути роутера

```typescript
import { slugify } from 'strio'

function createRoutePath(pageName: string): string {
  return `/${slugify(pageName)}`
}

createRoutePath('Профиль Пользователя')
// "/profil-polzovatelya"

createRoutePath('О Нас')
// "/o-nas"
```

## Связанные функции

- [transliterate](/ru/api/transliterate) - Только транслитерация
- [dasherize](/ru/api/dasherize) - Преобразование в kebab-case
- [underscore](/ru/api/underscore) - Преобразование в snake_case

## Смотрите также

- [Руководство по форматированию](/ru/guide/string-formatting)
- [Преобразование регистра](/ru/api/camelize)

