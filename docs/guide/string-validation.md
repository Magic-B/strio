# String Validation

Learn how to validate and check strings with strio.

## Empty & Blank Checks

### isEmpty

Check if a string is empty:

```typescript
import { isEmpty } from 'strio'

isEmpty('') // true
isEmpty('hello') // false
isEmpty(null) // true
isEmpty(undefined) // true
```

### isBlank

Check if a string is blank (empty or only whitespace):

```typescript
import { isBlank } from 'strio'

isBlank('') // true
isBlank('   ') // true
isBlank('\n\t') // true
isBlank('hello') // false
isBlank('  hello  ') // false
```

## Type Checks

### isString

Check if value is a string:

```typescript
import { isString } from 'strio'

isString('hello') // true
isString('') // true
isString(123) // false
isString(null) // false
isString(['array']) // false
```

## Character Type Checks

### isAlpha

Check if string contains only letters:

```typescript
import { isAlpha } from 'strio'

isAlpha('hello') // true
isAlpha('Hello') // true
isAlpha('hello123') // false
isAlpha('hello world') // false (space)
isAlpha('') // false
```

### isNumeric

Check if string contains only numbers:

```typescript
import { isNumeric } from 'strio'

isNumeric('123') // true
isNumeric('0') // true
isNumeric('12.34') // false (contains dot)
isNumeric('123abc') // false
isNumeric('') // false
```

### isAlphaNumeric

Check if string contains only letters and numbers:

```typescript
import { isAlphaNumeric } from 'strio'

isAlphaNumeric('hello123') // true
isAlphaNumeric('Test123') // true
isAlphaNumeric('hello-123') // false (hyphen)
isAlphaNumeric('hello 123') // false (space)
isAlphaNumeric('') // false
```

## Case Checks

### isUpperCase

Check if string is all uppercase:

```typescript
import { isUpperCase } from 'strio'

isUpperCase('HELLO') // true
isUpperCase('HELLO123') // true
isUpperCase('Hello') // false
isUpperCase('hello') // false
```

### isLowerCase

Check if string is all lowercase:

```typescript
import { isLowerCase } from 'strio'

isLowerCase('hello') // true
isLowerCase('hello123') // true
isLowerCase('Hello') // false
isLowerCase('HELLO') // false
```

## Search & Contains

### contains

Check if string contains a substring:

```typescript
import { contains } from 'strio'

contains('hello world', 'world') // true
contains('hello world', 'WORLD') // false
contains('hello world', 'xyz') // false

// Case insensitive
contains('hello world', 'WORLD', true) // true
```

### containsAll

Check if string contains all substrings:

```typescript
import { containsAll } from 'strio'

containsAll('hello world', ['hello', 'world']) // true
containsAll('hello world', ['hello', 'xyz']) // false
containsAll('hello world', []) // true

// Case insensitive
containsAll('hello world', ['HELLO', 'WORLD'], true) // true
```

### containsAny

Check if string contains any of the substrings:

```typescript
import { containsAny } from 'strio'

containsAny('hello world', ['hello', 'xyz']) // true
containsAny('hello world', ['abc', 'xyz']) // false
containsAny('hello world', []) // false

// Case insensitive
containsAny('hello world', ['HELLO'], true) // true
```

## Real-World Examples

### Form Validation

```typescript
import { isEmpty, isAlpha, isNumeric, isEmail } from 'strio'

interface FormData {
  name: string
  age: string
  email: string
}

function validateForm(data: FormData): string[] {
  const errors: string[] = []
  
  if (isEmpty(data.name)) {
    errors.push('Name is required')
  } else if (!isAlpha(data.name.replace(/\s/g, ''))) {
    errors.push('Name must contain only letters')
  }
  
  if (isEmpty(data.age)) {
    errors.push('Age is required')
  } else if (!isNumeric(data.age)) {
    errors.push('Age must be a number')
  }
  
  if (isEmpty(data.email)) {
    errors.push('Email is required')
  }
  
  return errors
}

// Usage
const errors = validateForm({
  name: 'John Doe',
  age: '25',
  email: 'john@example.com'
})

if (errors.length > 0) {
  console.error('Validation failed:', errors)
}
```

### Password Strength

```typescript
import { isAlpha, isNumeric, isUpperCase, isLowerCase } from 'strio'

interface PasswordStrength {
  score: number
  feedback: string[]
}

function checkPasswordStrength(password: string): PasswordStrength {
  const feedback: string[] = []
  let score = 0
  
  if (password.length >= 8) score++
  else feedback.push('Password should be at least 8 characters')
  
  if (password.length >= 12) score++
  
  const hasUpper = password.split('').some(char => isUpperCase(char) && isAlpha(char))
  const hasLower = password.split('').some(char => isLowerCase(char) && isAlpha(char))
  const hasNumber = password.split('').some(char => isNumeric(char))
  
  if (hasUpper) score++
  else feedback.push('Add uppercase letters')
  
  if (hasLower) score++
  else feedback.push('Add lowercase letters')
  
  if (hasNumber) score++
  else feedback.push('Add numbers')
  
  return { score, feedback }
}

// Usage
const result = checkPasswordStrength('MyPass123')
console.log(`Strength: ${result.score}/5`)
// Strength: 5/5
```

### Input Sanitization

```typescript
import { isEmpty, isBlank, contains } from 'strio'

function sanitizeInput(input: string): string | null {
  // Reject empty input
  if (isEmpty(input) || isBlank(input)) {
    return null
  }
  
  // Check for dangerous patterns
  const dangerous = ['<script', 'javascript:', 'onerror=']
  const hasDangerous = dangerous.some(pattern => 
    contains(input.toLowerCase(), pattern)
  )
  
  if (hasDangerous) {
    throw new Error('Potentially dangerous input detected')
  }
  
  return input.trim()
}

// Usage
try {
  const safe = sanitizeInput(userInput)
  if (safe) {
    processInput(safe)
  }
} catch (error) {
  console.error('Input validation failed:', error)
}
```

### Username Validation

```typescript
import { isEmpty, isAlphaNumeric, contains } from 'strio'

interface ValidationResult {
  valid: boolean
  message?: string
}

function validateUsername(username: string): ValidationResult {
  if (isEmpty(username)) {
    return { valid: false, message: 'Username is required' }
  }
  
  if (username.length < 3) {
    return { valid: false, message: 'Username must be at least 3 characters' }
  }
  
  if (username.length > 20) {
    return { valid: false, message: 'Username must be less than 20 characters' }
  }
  
  // Allow letters, numbers, underscore, and hyphen
  const allowed = /^[a-zA-Z0-9_-]+$/
  if (!allowed.test(username)) {
    return { valid: false, message: 'Username can only contain letters, numbers, _ and -' }
  }
  
  // Check for profanity (simplified)
  const profanity = ['badword1', 'badword2']
  const hasProfanity = profanity.some(word => 
    contains(username.toLowerCase(), word)
  )
  
  if (hasProfanity) {
    return { valid: false, message: 'Username contains inappropriate content' }
  }
  
  return { valid: true }
}

// Usage
const result = validateUsername('john_doe123')
if (result.valid) {
  console.log('Username is valid')
} else {
  console.error(result.message)
}
```

### Content Moderation

```typescript
import { contains, containsAny, isBlank } from 'strio'

interface ModerationResult {
  approved: boolean
  reasons: string[]
}

function moderateContent(content: string): ModerationResult {
  const reasons: string[] = []
  
  if (isBlank(content)) {
    return { approved: false, reasons: ['Content is empty'] }
  }
  
  // Check for spam indicators
  const spamWords = ['click here', 'buy now', 'limited offer']
  if (containsAny(content.toLowerCase(), spamWords)) {
    reasons.push('Possible spam detected')
  }
  
  // Check for excessive caps
  const upperCount = content.split('').filter(c => c === c.toUpperCase() && isAlpha(c)).length
  const ratio = upperCount / content.length
  if (ratio > 0.5) {
    reasons.push('Excessive use of capital letters')
  }
  
  // Check for suspicious links
  if (contains(content, 'http://') && !contains(content, 'https://')) {
    reasons.push('Non-secure links detected')
  }
  
  return {
    approved: reasons.length === 0,
    reasons
  }
}

// Usage
const result = moderateContent(userComment)
if (!result.approved) {
  console.log('Content moderation failed:', result.reasons)
}
```

## Tips & Best Practices

### 1. Combine Checks

```typescript
import { isEmpty, isBlank } from 'strio'

// Check for empty OR blank
function isEffectivelyEmpty(str: string): boolean {
  return isEmpty(str) || isBlank(str)
}
```

### 2. Early Returns

```typescript
import { isEmpty, isAlpha } from 'strio'

function validateName(name: string): boolean {
  if (isEmpty(name)) return false
  if (!isAlpha(name.replace(/\s/g, ''))) return false
  return true
}
```

### 3. Descriptive Messages

```typescript
import { isEmpty, isNumeric } from 'strio'

function validate(value: string): { valid: boolean; message: string } {
  if (isEmpty(value)) {
    return { valid: false, message: 'This field is required' }
  }
  if (!isNumeric(value)) {
    return { valid: false, message: 'Please enter a valid number' }
  }
  return { valid: true, message: 'Valid' }
}
```

## Next Steps

- [String Manipulation](/guide/string-manipulation) - Transform strings
- [String Formatting](/guide/string-formatting) - Format for display
- [API Reference](/api/overview) - All validation functions

