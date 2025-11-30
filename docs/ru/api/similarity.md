# similarity

Вычисление схожести между двумя строками.



## similarity

### Сигнатура

```typescript
function similarity(str1: string, str2: string): number
```

### Параметры

- `str1` - Первая строка для сравнения
- `str2` - Вторая строка для сравнения

### Возвращает

Число от 0 до 1:
- `1.0` = идентичные строки
- `0.0` = полностью разные
- Значения между = частичная схожесть

### Примеры

```typescript
import { similarity } from 'strio'

// Идентичные строки
similarity("привет", "привет")
// 1.0

// Полностью разные
similarity("abc", "xyz")
// 0.0

// Похожие строки
similarity("котенок", "котёнок")
// ~0.86

similarity("JavaScript", "TypeScript")
// 0.5

// Регистрозависимое
similarity("Привет", "привет")
// 0.833...

similarity("test", "text")
// 0.75
```

### Примеры использования

#### Поиск похожих строк

```typescript
import { similarity } from 'strio'

function findSimilar(target: string, candidates: string[], threshold: number = 0.7): string[] {
  return candidates.filter(candidate => 
    similarity(target, candidate) >= threshold
  )
}

const words = ["привет", "прощай", "здравствуй", "мир"]
findSimilar("привет", words, 0.6)
// ["привет", "прощай"]
```

#### Нечёткий поиск

```typescript
import { similarity } from 'strio'

function fuzzySearch(query: string, items: string[]): string[] {
  return items
    .map(item => ({
      item,
      score: similarity(query.toLowerCase(), item.toLowerCase())
    }))
    .filter(result => result.score > 0.5)
    .sort((a, b) => b.score - a.score)
    .map(result => result.item)
}
```

#### Проверка орфографии

```typescript
import { similarity } from 'strio'

function suggestCorrection(word: string, dictionary: string[]): string | null {
  let bestMatch = null
  let bestScore = 0
  
  for (const dictWord of dictionary) {
    const score = similarity(word.toLowerCase(), dictWord.toLowerCase())
    if (score > bestScore) {
      bestScore = score
      bestMatch = dictWord
    }
  }
  
  return bestScore > 0.7 ? bestMatch : null
}

const dictionary = ["привет", "мир", "javascript", "typescript"]
suggestCorrection("приве", dictionary)
// "привет"
```

#### Поиск дубликатов

```typescript
import { similarity } from 'strio'

function findDuplicates(items: string[], threshold: number = 0.9): Array<[string, string]> {
  const duplicates: Array<[string, string]> = []
  
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (similarity(items[i], items[j]) >= threshold) {
        duplicates.push([items[i], items[j]])
      }
    }
  }
  
  return duplicates
}
```

#### Проверка схожести паролей

```typescript
import { similarity } from 'strio'

function isPasswordTooSimilar(newPassword: string, oldPasswords: string[]): boolean {
  return oldPasswords.some(oldPassword => 
    similarity(newPassword.toLowerCase(), oldPassword.toLowerCase()) > 0.8
  )
}
```

## Алгоритм

Использует алгоритм **расстояния Левенштейна**:
- Считает минимальное количество одиночных изменений (вставки, удаления, замены)
- Преобразует расстояние в процент схожести

## Пороги схожести

Распространённые пороговые значения:

```typescript
// 0.95 - 1.00: Почти идентичные (только опечатки)
// 0.80 - 0.95: Очень похожие (незначительные различия)
// 0.60 - 0.80: Похожие (умеренные различия)
// 0.40 - 0.60: Отчасти похожие
// 0.00 - 0.40: Разные
```

## Ограничения

- **Не семантический**: Не понимает значение слов
- **Посимвольный**: Обрабатывает все символы одинаково
- **Регистрозависимый**: "Привет" и "привет" разные
- **Пробелы**: Обрабатывает пробелы как символы

## Связанные функции

- [contains](/ru/api/contains) - Проверка подстрок
- [count](/ru/api/count) - Подсчёт вхождений
- [words](/ru/api/words) - Операции со словами

## Смотрите также

- [Руководство по валидации строк](/ru/guide/string-validation)

