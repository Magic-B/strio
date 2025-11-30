# transliterate

Convert Unicode characters to ASCII equivalents.



## transliterate

### Signature

```typescript
function transliterate(value: string): string
```

### Parameters

- `value` - The string to transliterate

### Returns

String with Unicode characters converted to ASCII equivalents.

### Examples

```typescript
import { transliterate } from 'strio'

// Latin with diacritics
transliterate("Héllö Wörld")
// "Hello World"

transliterate("café résumé")
// "cafe resume"

// Cyrillic
transliterate("Привет Мир")
// "Privet Mir"

transliterate("Москва")
// "Moskva"

// German
transliterate("Über München")
// "Uber Munchen"

// French
transliterate("Français")
// "Francais"

// Spanish
transliterate("Mañana Piñata")
// "Manana Pinata"

// Mixed
transliterate("Café Москва München")
// "Cafe Moskva Munchen"

// Already ASCII
transliterate("Hello World")
// "Hello World"
```

### Use Cases

#### Create URL Slugs

```typescript
import { transliterate, slugify } from 'strio'

function createSlug(title: string): string {
  return slugify(transliterate(title))
}

createSlug("Über uns")
// "uber-uns"

createSlug("Привет Мир")
// "privet-mir"

createSlug("Café de París")
// "cafe-de-paris"
```

#### Normalize Filenames

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

#### Search Normalization

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

const items = ["Café", "München", "Привет", "Hello"]
search("cafe", items)
// ["Café"]

search("munchen", items)
// ["München"]
```

#### Username Generation

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

generateUsername("Müller Schmidt")
// "mullerschmidt"
```

#### Email Address Normalization

```typescript
import { transliterate } from 'strio'

function normalizeEmail(name: string, domain: string): string {
  const normalized = transliterate(name.toLowerCase())
    .replace(/[^a-z0-9.]/g, '')
  
  return `${normalized}@${domain}`
}

normalizeEmail("Иван Иванов", "example.com")
// "ivanivanov@example.com"

normalizeEmail("François Müller", "test.com")
// "francoismüller@test.com"
```

#### Database Search

```typescript
import { transliterate } from 'strio'

function createSearchIndex(text: string): string {
  // Create ASCII version for searching
  return transliterate(text.toLowerCase())
}

// Store both original and searchable versions
interface SearchableItem {
  original: string
  searchable: string
}

function addItem(text: string): SearchableItem {
  return {
    original: text,
    searchable: createSearchIndex(text)
  }
}

const item = addItem("Crème brûlée")
// { original: "Crème brûlée", searchable: "creme brulee" }
```

#### SEO-Friendly URLs

```typescript
import { transliterate } from 'strio'

function createSEOUrl(title: string): string {
  const transliterated = transliterate(title)
  return transliterated
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

createSEOUrl("À propos de nous")
// "a-propos-de-nous"

createSEOUrl("Über unsere Firma")
// "uber-unsere-firma"
```

## Supported Scripts

The function supports transliteration for:

- **Latin with diacritics**: á, é, í, ó, ú, ñ, ç, etc.
- **Cyrillic**: А-Я, а-я
- **Greek**: α, β, γ, δ, etc.
- **German**: ä, ö, ü, ß
- **French**: é, è, ê, à, ç
- **Spanish**: ñ, á, é, í, ó, ú
- **Portuguese**: ã, õ, ç
- **And many more...

```typescript
import { transliterate } from 'strio'

// Latin Extended
transliterate("āēīōū")
// "aeiou"

// German
transliterate("äöüÄÖÜß")
// "aoauOUss"

// Nordic
transliterate("åøæÅØÆ")
// "aoaAOA"

// Turkish
transliterate("şğıİ")
// "sgiI"
```

## Limitations

- **Not reversible**: Can't convert back to original
- **Multiple characters may map to same ASCII**: ä → a, á → a
- **Some characters may not have mappings**: CJK characters, emojis
- **Case may be lost**: Ü → U (not u)

```typescript
import { transliterate } from 'strio'

// Irreversible
transliterate("café")
// "cafe" (can't get back to "café")

// Emoji not transliterated
transliterate("Hello 👋")
// "Hello 👋"

// CJK characters typically preserved
transliterate("こんにちは")
// May preserve original if no mapping exists
```

## Common Use Cases

### Blog Post URLs

```typescript
import { transliterate, slugify } from 'strio'

function createBlogUrl(title: string): string {
  const date = new Date().toISOString().slice(0, 10)
  const slug = slugify(transliterate(title))
  return `/${date}/${slug}`
}

createBlogUrl("Über unsere neue Website")
// "/2024-01-15/uber-unsere-neue-website"
```

### File Upload

```typescript
import { transliterate } from 'strio'

function sanitizeUploadFilename(filename: string): string {
  const [name, ext] = filename.split('.')
  const safe = transliterate(name)
    .replace(/[^a-zA-Z0-9-_]/g, '_')
  
  return `${safe}.${ext}`
}

sanitizeUploadFilename("Мой_документ.pdf")
// "Moj_dokument.pdf"
```

## Related Functions

- [slugify](/api/slugify) - Create URL slugs
- [normalize](/guide/string-manipulation) - Normalize strings
- [replace](/guide/string-manipulation) - Replace characters

## See Also

- [String Formatting Guide](/guide/string-formatting)
- [Slugify Function](/api/slugify)

