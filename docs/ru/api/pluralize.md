# pluralize

Склонение слов по числу с поддержкой английских и русских правил.


## pluralize

### Сигнатура

```typescript
function pluralize(
  count: number,
  zero: string | null,
  one: string,
  few: string,
  many?: string
): string
```

### Параметры

- `count` - Число для определения формы слова
- `zero` - Форма для нуля (опционально, может быть null)
- `one` - Форма для единственного числа (1)
- `few` - Форма для 2-4 (русский) или множественного числа (английский)
- `many` - Форма для 5+ (русский, если указано - используются русские правила)

### Возвращает

Отформатированную строку с числом и подходящей формой слова.

### Примеры

#### Английское множественное число (3 параметра)

```typescript
import { pluralize } from 'strio'

// Простое множественное число (без особой формы для нуля)
pluralize(1, null, "item", "items")
// "1 item"

pluralize(5, null, "item", "items")
// "5 items"

// С особой формой для нуля
pluralize(0, "no items", "item", "items")
// "no items"
```

#### Русское множественное число (4 параметра)

```typescript
import { pluralize } from 'strio'

// Русский: товар, товара, товаров
pluralize(1, null, "товар", "товара", "товаров")
// "1 товар"

pluralize(2, null, "товар", "товара", "товаров")
// "2 товара"

pluralize(5, null, "товар", "товара", "товаров")
// "5 товаров"

pluralize(21, null, "товар", "товара", "товаров")
// "21 товар"

pluralize(22, null, "товар", "товара", "товаров")
// "22 товара"

// С особой формой для нуля
pluralize(0, "нет товаров", "товар", "товара", "товаров")
// "нет товаров"
```

## Примеры использования

### Счётчик уведомлений

```typescript
import { pluralize } from 'strio'

function notificationText(count: number): string {
  return `У вас ${pluralize(count, "нет уведомлений", "уведомление", "уведомления", "уведомлений")}`
}

notificationText(0)   // "У вас нет уведомлений"
notificationText(1)   // "У вас 1 уведомление"
notificationText(2)   // "У вас 2 уведомления"
notificationText(5)   // "У вас 5 уведомлений"
```

### Счётчик элементов

```typescript
import { pluralize } from 'strio'

function itemCountRu(count: number): string {
  return pluralize(count, "нет элементов", "элемент", "элемента", "элементов")
}

itemCountRu(0)    // "нет элементов"
itemCountRu(1)    // "1 элемент"
itemCountRu(2)    // "2 элемента"
itemCountRu(5)    // "5 элементов"
itemCountRu(21)   // "21 элемент"
```

### Время назад

```typescript
import { pluralize } from 'strio'

function timeAgoRu(minutes: number): string {
  return pluralize(minutes, "только что", "минуту назад", "минуты назад", "минут назад")
}

timeAgoRu(0)     // "только что"
timeAgoRu(1)     // "1 минуту назад"
timeAgoRu(2)     // "2 минуты назад"
timeAgoRu(5)     // "5 минут назад"
timeAgoRu(21)    // "21 минуту назад"
```

## Правила склонения

### Английский (3 параметра: count, zero, one, few)
- Использует `one` для count === 1
- Использует `few` для всех остальных чисел (включая 0, если zero равен null)
- Использует особую форму `zero`, если указана и count === 0

### Русский (4 параметра: count, zero, one, few, many)
- Использует `one` для чисел, оканчивающихся на 1 (кроме 11): 1, 21, 31, 101 и т.д.
- Использует `few` для чисел, оканчивающихся на 2-4 (кроме 12-14): 2, 3, 4, 22, 23, 24 и т.д.
- Использует `many` для всех остальных чисел: 0, 5-20, 25-30, 100 и т.д.
- Использует особую форму `zero`, если указана и count === 0

## Связанные функции

- [ordinalize](/ru/api/ordinalize) - Порядковые суффиксы
- [template](/ru/api/template) - Шаблонные литералы с условиями

## Смотрите также

- [Руководство по форматированию](/ru/guide/string-formatting)
- [API Reference](/ru/api/overview)

