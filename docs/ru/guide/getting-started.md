# Начало работы

Начните работу с strio за считанные минуты.

## Установка

Установите strio используя ваш любимый менеджер пакетов:

::: code-group

```bash [npm]
npm install strio
```

```bash [yarn]
yarn add strio
```

```bash [pnpm]
pnpm add strio
```

```bash [bun]
bun add strio
```

:::

## Базовое использование

Импортируйте нужные функции и начните их использовать:

```typescript
import { capitalize, slugify, truncate } from 'strio'

// Капитализация первой буквы
const result = capitalize('привет мир')
console.log(result) // "Привет мир"

// Создание URL-friendly slug
const slug = slugify('Моя Статья в Блоге!')
console.log(slug) // "moya-statya-v-bloge"

// Обрезка длинного текста
const short = truncate('Это очень длинный текст', 10)
console.log(short) // "Это очень ..."
```

## Поддержка TypeScript

strio написана на TypeScript и предоставляет полные определения типов из коробки:

```typescript
import { capitalize } from 'strio'

// Полная поддержка IntelliSense
const text: string = capitalize('привет')

// Типобезопасные параметры функций
function processText(input: string): string {
  return capitalize(input)
}
```

## Tree-Shaking

strio разработана для бесшовной работы с современными бандлерами. Импортируйте только то, что нужно:

```typescript
// ✅ Хорошо - в бандл попадёт только capitalize
import { capitalize } from 'strio'

// ⚠️ Избегайте - импортирует всё
import * as strio from 'strio'
```

## CommonJS vs ESM

strio поддерживает как CommonJS, так и ES Modules:

::: code-group

```javascript [ESM]
import { capitalize } from 'strio'

const result = capitalize('привет')
```

```javascript [CommonJS]
const { capitalize } = require('strio')

const result = capitalize('привет')
```

:::

## Использование в браузере

strio работает во всех современных браузерах. Используйте её напрямую через бандлер модулей (Vite, Webpack и т.д.) или CDN:

### С бандлером

```javascript
import { capitalize } from 'strio'

document.getElementById('output').textContent = capitalize('привет мир')
```

### Через CDN (ESM)

```html
<script type="module">
  import { capitalize } from 'https://esm.sh/strio'
  
  console.log(capitalize('привет мир'))
</script>
```

## Использование в Node.js

strio прекрасно работает в окружениях Node.js (v16+):

```javascript
const { capitalize, slugify } = require('strio')

const title = 'Название Моей Статьи'
const slug = slugify(title)

console.log(slug) // "nazvanie-moej-stati"
```

## Быстрые примеры

Вот несколько распространённых примеров использования:

### Валидация форм

```typescript
import { isEmpty, isNumeric } from 'strio'

function validateForm(data: FormData) {
  if (isEmpty(data.name)) {
    throw new Error('Имя обязательно')
  }
  
  if (!isNumeric(data.age)) {
    throw new Error('Возраст должен быть числом')
  }
}
```

### Форматирование текста

```typescript
import { capitalize, truncate, humanize } from 'strio'

// Форматирование пользовательского ввода
const displayName = capitalize(userInput.toLowerCase())

// Показать превью
const preview = truncate(article.content, 150)

// Сделать читаемым
const label = humanize('user_first_name') // "User first name"
```

### Обработка URL

```typescript
import { slugify, dasherize } from 'strio'

// Создать URL slug
const slug = slugify('10 Советов для Лучшего Кода!')
// "10-sovetov-dlya-luchshego-koda"

// Форматировать имена маршрутов
const route = dasherize('UserProfile')
// "user-profile"
```

## Следующие шаги

Теперь, когда strio установлена, изучите:

- [Манипуляции со строками](/ru/guide/string-manipulation) - Узнайте о преобразовании текста
- [Валидация строк](/ru/guide/string-validation) - Валидация и проверка строк
- [Форматирование строк](/ru/guide/string-formatting) - Форматирование текста для отображения
- [Справочник API](/ru/api/overview) - Просмотрите все доступные функции

## Нужна помощь?

- 📖 Проверьте [документацию API](/ru/api/overview)
- 🐛 [Сообщите о проблеме](https://github.com/magic-b/strio/issues)
- 💡 [Запросите функцию](https://github.com/magic-b/strio/issues/new)

