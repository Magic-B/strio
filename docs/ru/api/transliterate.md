# transliterate

Преобразование Unicode символов в ASCII.



## transliterate

### Сигнатура

```typescript
function transliterate(value: string): string
```

### Параметры

- `value` - Строка для транслитерации

### Возвращает

Строку с Unicode символами, преобразованными в ASCII.

### Примеры

```typescript
import { transliterate } from 'strio'

// Латиница с диакритикой
transliterate("Héllö Wörld")
// "Hello World"

transliterate("café résumé")
// "cafe resume"

// Кириллица
transliterate("Привет Мир")
// "Privet Mir"

transliterate("Москва")
// "Moskva"

// Немецкий
transliterate("Über München")
// "Uber Munchen"

// Французский
transliterate("Français")
// "Francais"

// Испанский
transliterate("Mañana Piñata")
// "Manana Pinata"

// Смешанный
transliterate("Café Москва München")
// "Cafe Moskva Munchen"
```

### Примеры использования

#### Создание URL slug

```typescript
import { transliterate, slugify } from 'strio'

function createSlug(title: string): string {
  return slugify(transliterate(title))
}

createSlug("О нас")
// "o-nas"

createSlug("Привет Мир")
// "privet-mir"

createSlug("Café de París")
// "cafe-de-paris"
```

#### Нормализация имён файлов

```typescript
import { transliterate } from 'strio'

function normalizeFilename(filename: string): string {
  const transliterated = transliterate(filename)
  return transliterated.replace(/[^a-zA-Z0-9.-]/g, '_')
}

normalizeFilename("Документ №1.pdf")
// "Dokument_1.pdf"

normalizeFilename("Über_München.txt")
// "Uber_Munchen.txt"
```

#### Нормализация поиска

```typescript
import { transliterate } from 'strio'

function normalizeSearch(query: string): string {
  return transliterate(query.toLowerCase())
}

function search(query: string, items: string[]): string[] {
  const normalized = normalizeSearch(query)
  
  return items.filter(item => 
    normalizeSearch(item).includes(normalized)
  )
}
```

#### Генерация username

```typescript
import { transliterate } from 'strio'

function generateUsername(name: string): string {
  const transliterated = transliterate(name.toLowerCase())
  return transliterated.replace(/[^a-z0-9]/g, '')
}

generateUsername("Николай Петров")
// "nikolajpetrov"

generateUsername("José García")
// "josegarcia"
```

#### Нормализация email

```typescript
import { transliterate } from 'strio'

function normalizeEmail(name: string, domain: string): string {
  const normalized = transliterate(name.toLowerCase())
    .replace(/[^a-z0-9.]/g, '')
  
  return `${normalized}@${domain}`
}

normalizeEmail("Иван Иванов", "example.com")
// "ivanivanov@example.com"
```

#### SEO-дружественные URL

```typescript
import { transliterate } from 'strio'

function createSEOUrl(title: string): string {
  const transliterated = transliterate(title)
  return transliterated
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

createSEOUrl("О нашей компании")
// "o-nashej-kompanii"
```

## Поддерживаемые системы письменности

Функция поддерживает транслитерацию для:

- **Латиница с диакритикой**: á, é, í, ó, ú, ñ, ç и т.д.
- **Кириллица**: А-Я, а-я
- **Греческий**: α, β, γ, δ и т.д.
- **Немецкий**: ä, ö, ü, ß
- **Французский**: é, è, ê, à, ç
- **Испанский**: ñ, á, é, í, ó, ú
- **Португальский**: ã, õ, ç
- **И многие другие...**

```typescript
import { transliterate } from 'strio'

// Расширенная латиница
transliterate("āēīōū")
// "aeiou"

// Немецкий
transliterate("äöüÄÖÜß")
// "aoauOUss"

// Скандинавские
transliterate("åøæÅØÆ")
// "aoaAOA"

// Турецкий
transliterate("şğıİ")
// "sgiI"
```

## Ограничения

- **Необратимо**: Нельзя преобразовать обратно в оригинал
- **Множественные символы могут иметь одно ASCII**: ä → a, á → a
- **Некоторые символы могут не иметь соответствия**: CJK, эмодзи
- **Регистр может быть потерян**: Ü → U (не u)

```typescript
import { transliterate } from 'strio'

// Необратимо
transliterate("café")
// "cafe" (не получить обратно "café")

// Эмодзи не транслитерируются
transliterate("Привет 👋")
// "Privet 👋"
```

## Связанные функции

- [slugify](/ru/api/slugify) - Создание URL slug
- [normalize](/ru/guide/string-manipulation) - Нормализация строк

## Смотрите также

- [Руководство по форматированию строк](/ru/guide/string-formatting)
- [Функция slugify](/ru/api/slugify)

