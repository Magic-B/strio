# Валидация строк

Узнайте, как валидировать и проверять строки с помощью strio.

## Проверки на пустоту

### isEmpty

Проверить, является ли строка пустой:

```typescript
import { isEmpty } from 'strio'

isEmpty('') // true
isEmpty('привет') // false
isEmpty(null) // true
isEmpty(undefined) // true
```

### isBlank

Проверить, является ли строка пустой или содержит только пробелы:

```typescript
import { isBlank } from 'strio'

isBlank('') // true
isBlank('   ') // true
isBlank('\n\t') // true
isBlank('привет') // false
```

## Проверки типов символов

### isAlpha

Проверить, содержит ли строка только буквы:

```typescript
import { isAlpha } from 'strio'

isAlpha('привет') // true
isAlpha('Привет') // true
isAlpha('привет123') // false
isAlpha('привет мир') // false (пробел)
```

### isNumeric

Проверить, содержит ли строка только цифры:

```typescript
import { isNumeric } from 'strio'

isNumeric('123') // true
isNumeric('0') // true
isNumeric('12.34') // false (содержит точку)
isNumeric('123abc') // false
```

### isAlphaNumeric

Проверить, содержит ли строка только буквы и цифры:

```typescript
import { isAlphaNumeric } from 'strio'

isAlphaNumeric('привет123') // true
isAlphaNumeric('Test123') // true
isAlphaNumeric('привет-123') // false (дефис)
isAlphaNumeric('привет 123') // false (пробел)
```

## Проверки регистра

### isUpperCase

Проверить, в верхнем ли регистре строка:

```typescript
import { isUpperCase } from 'strio'

isUpperCase('ПРИВЕТ') // true
isUpperCase('ПРИВЕТ123') // true
isUpperCase('Привет') // false
```

### isLowerCase

Проверить, в нижнем ли регистре строка:

```typescript
import { isLowerCase } from 'strio'

isLowerCase('привет') // true
isLowerCase('привет123') // true
isLowerCase('Привет') // false
```

## Поиск и содержание

### contains

Проверить, содержит ли строка подстроку:

```typescript
import { contains } from 'strio'

contains('привет мир', 'мир') // true
contains('привет мир', 'МИР') // false
contains('привет мир', 'xyz') // false

// Без учёта регистра
contains('привет мир', 'МИР', true) // true
```

### containsAll

Проверить, содержит ли строка все подстроки:

```typescript
import { containsAll } from 'strio'

containsAll('привет мир', ['привет', 'мир']) // true
containsAll('привет мир', ['привет', 'xyz']) // false
```

### containsAny

Проверить, содержит ли строка любую из подстрок:

```typescript
import { containsAny } from 'strio'

containsAny('привет мир', ['привет', 'xyz']) // true
containsAny('привет мир', ['abc', 'xyz']) // false
```

## Примеры из реальной жизни

### Валидация формы

```typescript
import { isEmpty, isAlpha, isNumeric } from 'strio'

interface FormData {
  name: string
  age: string
}

function validateForm(data: FormData): string[] {
  const errors: string[] = []
  
  if (isEmpty(data.name)) {
    errors.push('Имя обязательно')
  } else if (!isAlpha(data.name.replace(/\s/g, ''))) {
    errors.push('Имя должно содержать только буквы')
  }
  
  if (isEmpty(data.age)) {
    errors.push('Возраст обязателен')
  } else if (!isNumeric(data.age)) {
    errors.push('Возраст должен быть числом')
  }
  
  return errors
}
```

### Валидация имени пользователя

```typescript
import { isEmpty, isAlphaNumeric } from 'strio'

interface ValidationResult {
  valid: boolean
  message?: string
}

function validateUsername(username: string): ValidationResult {
  if (isEmpty(username)) {
    return { valid: false, message: 'Имя пользователя обязательно' }
  }
  
  if (username.length < 3) {
    return { valid: false, message: 'Минимум 3 символа' }
  }
  
  if (username.length > 20) {
    return { valid: false, message: 'Максимум 20 символов' }
  }
  
  const allowed = /^[a-zA-Z0-9_-]+$/
  if (!allowed.test(username)) {
    return { valid: false, message: 'Только буквы, цифры, _ и -' }
  }
  
  return { valid: true }
}
```

## Советы и лучшие практики

### 1. Комбинируйте проверки

```typescript
import { isEmpty, isBlank } from 'strio'

function isEffectivelyEmpty(str: string): boolean {
  return isEmpty(str) || isBlank(str)
}
```

### 2. Ранние возвраты

```typescript
import { isEmpty, isAlpha } from 'strio'

function validateName(name: string): boolean {
  if (isEmpty(name)) return false
  if (!isAlpha(name.replace(/\s/g, ''))) return false
  return true
}
```

## Следующие шаги

- [Манипуляции со строками](/ru/guide/string-manipulation) - Преобразование строк
- [Форматирование строк](/ru/guide/string-formatting) - Форматирование для отображения
- [Справочник API](/ru/api/checks) - Все функции валидации
