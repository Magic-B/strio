# join

Умное объединение массива с настраиваемым разделителем.



## join

### Сигнатура

```typescript
function join(...args: (string | number | { separator?: string } | undefined | null)[]): string
```

### Параметры

- `...args` - Переменное количество аргументов:
  - Строки для объединения
  - Числа (преобразуются в строки)
  - Объекты с `separator` для изменения разделителя
  - `null` или `undefined` (отфильтровываются)

### Возвращает

Объединённую строку с отфильтрованными пустыми значениями.

### Примеры

```typescript
import { join } from 'strio'

// Базовое использование (разделитель по умолчанию: ", ")
join("a", "b", "c")
// "a, b, c"

// Свой разделитель
join("a", { separator: " - " }, "b", "c")
// "a - b - c"

// Фильтрация пустых значений
join("a", null, "", "b", undefined, "c")
// "a, b, c"

// Без разделителя
join("hello", { separator: "" }, "world")
// "helloworld"

// С числами
join("Item", 1, "of", 10)
// "Item, 1, of, 10"
```

### Примеры использования

#### Полное имя

```typescript
import { join } from 'strio'

function formatName(first: string, middle?: string, last?: string): string {
  return join(first, middle, last)
}

formatName("Иван", "", "Иванов")
// "Иван, Иванов"
```

#### Форматирование адреса

```typescript
import { join } from 'strio'

function formatAddress(street: string, city?: string, zip?: string): string {
  return join(street, { separator: ", " }, city, zip)
}
```

#### Построение пути

```typescript
import { join } from 'strio'

function buildPath(...parts: string[]): string {
  return join(...parts.flatMap(p => [{ separator: "/" }, p])).slice(1)
}

buildPath("home", "user", "documents")
// "home/user/documents"
```

#### Хлебные крошки

```typescript
import { join } from 'strio'

function createBreadcrumbs(items: string[]): string {
  const args: any[] = []
  items.forEach((item, i) => {
    if (i > 0) args.push({ separator: " > " })
    args.push(item)
  })
  return join(...args)
}

createBreadcrumbs(["Главная", "Продукты", "Ноутбуки"])
// "Главная > Продукты > Ноутбуки"
```

## Поведение по умолчанию

- **Разделитель по умолчанию**: `", "` (запятая + пробел)
- **Фильтрация пустых**: Автоматически удаляет `null`, `undefined` и пустые строки
- **Пробелы**: Обрезает пробелы перед проверкой на пустоту

## Связанные функции

- [split](/ru/guide/string-manipulation) - Разделение строк
- [template](/ru/api/template) - Строковые шаблоны
- [contains](/ru/api/contains) - Проверка подстрок

## Смотрите также

- [Руководство по форматированию строк](/ru/guide/string-formatting)

