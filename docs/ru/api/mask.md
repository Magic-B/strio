# mask

Маскирование конфиденциальной информации в строках.



## mask

### Сигнатура

```typescript
function mask(
  str: string,
  options?: {
    start?: number
    end?: number
    char?: string
  }
): string
```

### Параметры

- `str` - Строка для маскирования
- `options` - Объект настройки:
  - `start` - Начальная позиция маскирования (по умолчанию: 0)
  - `end` - Конечная позиция маскирования (по умолчанию: str.length - 4)
  - `char` - Символ маски (по умолчанию: "*")

### Возвращает

Замаскированную строку.

### Примеры

```typescript
import { mask } from 'strio'

// Базовое использование (показывает последние 4 символа)
mask("4111111111111111")
// "************1111"

// Свой диапазон
mask("4111111111111111", { start: 4, end: 12 })
// "4111********1111"

// Свой символ маски
mask("password123", { char: "#" })
// "########123"

// Маскирование email
mask("hello@example.com", { start: 0, end: 5, char: "*" })
// "*****@example.com"

// Показать первые 2 и последние 2
mask("ABCDEFGH", { start: 2, end: 6 })
// "AB****GH"
```

### Примеры использования

#### Маскировка номера карты

```typescript
import { mask } from 'strio'

function maskCreditCard(cardNumber: string): string {
  const cleaned = cardNumber.replace(/\s/g, '')
  return mask(cleaned)
}

maskCreditCard("4111 1111 1111 1111")
// "************1111"
```

#### Маскировка пароля

```typescript
import { mask } from 'strio'

function maskPassword(password: string): string {
  return mask(password, { start: 0, end: password.length, char: "•" })
}

maskPassword("MySecretPassword123")
// "•••••••••••••••••••"
```

#### Маскировка email

```typescript
import { mask } from 'strio'

function maskEmail(email: string): string {
  const [local, domain] = email.split('@')
  const visibleChars = Math.min(3, local.length)
  
  const maskedLocal = mask(local, { 
    start: 0, 
    end: local.length - visibleChars 
  })
  
  return `${maskedLocal}@${domain}`
}

maskEmail("ivan.petrov@example.com")
// "******ov@example.com"
```

#### Маскировка телефона

```typescript
import { mask } from 'strio'

function maskPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  return mask(cleaned, { start: 3, end: 7 })
}

maskPhone("+7 (123) 456-78-90")
// "+7 (123) ****-78-90"
```

#### Маскировка API ключа

```typescript
import { mask } from 'strio'

function maskAPIKey(key: string): string {
  if (key.length <= 12) return mask(key)
  
  return mask(key, { start: 8, end: key.length - 4 })
}

maskAPIKey("sk_example_1234567890abcdefghijklmnop")
// "sk_example_******************mnop"
```

## Паттерны маскирования

Распространённые паттерны:

```typescript
import { mask } from 'strio'

const value = "1234567890"

// Показать последние 4 (по умолчанию)
mask(value)
// "******7890"

// Показать первые 4
mask(value, { start: 4, end: 10 })
// "1234******"

// Показать первые и последние 2
mask(value, { start: 2, end: 8 })
// "12******90"

// Полная маска
mask(value, { start: 0, end: 10 })
// "**********"
```

## Замечание по безопасности

⚠️ **Важно**: Маскирование только для отображения. Никогда не полагайтесь на маскированные строки для реальной безопасности данных. Всегда используйте правильное шифрование и безопасное хранилище.

## Связанные функции

- [truncate](/ru/api/truncate) - Укорачивание строк
- [escapeHtml](/ru/api/escape) - Экранирование HTML

## Смотрите также

- [Руководство по безопасности строк](/ru/guide/string-validation)

