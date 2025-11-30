# template

Условные шаблонные литералы - блоки в скобках появляются только если содержат истинные значения.


## template

### Сигнатура

```typescript
function template(strings: TemplateStringsArray, ...values: OptValue[]): string
```

### Параметры

- `strings` - Массив строк шаблона (автоматически предоставляется)
- `values` - Значения для интерполяции (string | number | boolean | null | undefined)

### Возвращает

Строку с вычисленными условными блоками.

### Примеры

#### Базовое использование

```typescript
import { template } from 'strio'

const name = 'Иван'
const age = null

// Условные блоки в [] появляются только если содержат истинные значения
template`Привет, ${name}[, ${age} лет]!`
// "Привет, Иван!" (age равен null, блок скрыт)

const name2 = 'Мария'
const age2 = 30

template`Привет, ${name2}[, ${age2} лет]!`
// "Привет, Мария, 30 лет!" (age истинный, блок появляется)
```

#### Построение путей

```typescript
import { template } from 'strio'

const dir = 'docs'
const file = null

template`/${dir}[/${file}]`
// "/docs" (file равен null, блок скрыт)

const file2 = 'readme.md'
template`/${dir}[/${file2}]`
// "/docs/readme.md" (file истинный, блок появляется)
```

#### Информация о пользователе

```typescript
import { template } from 'strio'

const user = 'Алиса'
const role = null

template`Пользователь: ${user}[ (${role})]`
// "Пользователь: Алиса" (role равен null, скобки скрыты)

const role2 = 'Админ'
template`Пользователь: ${user}[ (${role2})]`
// "Пользователь: Алиса (Админ)" (role истинный, появляется со скобками)
```

#### Экранирование скобок

```typescript
import { template } from 'strio'

const value = 42

// Используйте обратный слэш для литеральных скобок
template`Массив\[0\] = ${value}`
// "Массив[0] = 42" (скобки литеральные)
```

## Примеры использования

### Опциональные параметры URL

```typescript
import { template } from 'strio'

function buildUrl(base: string, id?: number, query?: string): string {
  return template`${base}[/${id}][?${query}]`
}

buildUrl('/api/users')
// "/api/users"

buildUrl('/api/users', 123)
// "/api/users/123"

buildUrl('/api/users', 123, 'sort=name')
// "/api/users/123?sort=name"
```

### Форматирование имён

```typescript
import { template } from 'strio'

function formatName(first: string, middle?: string, last?: string): string {
  return template`${first}[ ${middle}][ ${last}]`
}

formatName('Иван')
// "Иван"

formatName('Иван', 'Петрович')
// "Иван Петрович"

formatName('Иван', undefined, 'Сидоров')
// "Иван Сидоров"
```

### Пути к файлам

```typescript
import { template } from 'strio'

function buildPath(
  base: string,
  dir?: string,
  file?: string,
  ext?: string
): string {
  return template`${base}[/${dir}][/${file}][${ext}]`
}

buildPath('/home/user')
// "/home/user"

buildPath('/home/user', 'projects', 'readme', '.md')
// "/home/user/projects/readme.md"
```

## Связанные функции

- [join](/ru/api/join) - Объединение массивов с разделителями
- [slugify](/ru/api/slugify) - Создание URL-дружественных slug

## Смотрите также

- [Руководство по форматированию](/ru/guide/string-formatting)
- [API Reference](/ru/api/overview)

