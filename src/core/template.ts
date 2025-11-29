enum TokenType {
  Text = "text",
  Open = "open",
  Close = "close",
  Value = "value",
}

type OptValue = string | number | boolean | null | undefined;
type Token =
  | { type: TokenType.Text; value: string }
  | { type: TokenType.Open }
  | { type: TokenType.Close }
  | { type: TokenType.Value; value: OptValue };
type BlockToken = Extract<Token, { type: TokenType.Text | TokenType.Value }>;

function appendToken(token: BlockToken): string {
  if (token.type === TokenType.Text) return token.value;
  return token.value == null ? "" : String(token.value);
}

/**
 * Conditional template literal - blocks in [] only appear if they contain truthy values
 * Use backslash to escape literal brackets: \[ and \]
 * @example template`Hello, ${name}[, ${age} years old]!` // age=null → "Hello, John!"
 * @example template`/${dir}[/${file}]` // file=null → "/docs", file="readme" → "/docs/readme"
 * @example template`User: ${user}[ (${role})]` // Conditionally shows role in parentheses
 * @example template`Array\[0\] = ${value}` // Literal brackets → "Array[0] = 42"
 */
export function template(strings: TemplateStringsArray, ...values: OptValue[]): string {
  const tokens: Token[] = [];

  strings.forEach((str, i) => {
    let buf = "";
    let isEscaped = false;

    for (const ch of str) {
      if (isEscaped) {
        // Previous char was backslash - add current char as literal
        buf += ch;
        isEscaped = false;
        continue;
      }

      if (ch === "\\") {
        isEscaped = true;
        continue;
      }

      if (ch === "[" || ch === "]") {
        if (buf) {
          tokens.push({ type: TokenType.Text, value: buf });
          buf = "";
        }
        tokens.push({ type: ch === "[" ? TokenType.Open : TokenType.Close });
      } else {
        buf += ch;
      }
    }

    // Handle trailing backslash
    if (isEscaped) {
      buf += "\\";
    }

    if (buf) {
      tokens.push({ type: TokenType.Text, value: buf });
    }

    if (i < values.length) {
      tokens.push({ type: TokenType.Value, value: values[i] });
    }
  });

  let result = "";
  let inBlock = false;
  let blockTokens: BlockToken[] = [];

  for (const t of tokens) {
    if (t.type === TokenType.Open) {
      if (inBlock) {
        blockTokens.push({ type: TokenType.Text, value: "[" });
      } else {
        inBlock = true;
        blockTokens = [];
      }
      continue;
    }

    if (t.type === TokenType.Close) {
      if (inBlock) {
        if (blockTokens.length) {
          const hasTruthy = blockTokens.some(
            (t) => t.type === TokenType.Value && Boolean(t.value)
          );
          if (hasTruthy) {
            result += blockTokens.map(appendToken).join("");
          }
          blockTokens = [];
        }
        inBlock = false;
      } else {
        result += "]";
      }
      continue;
    }

    if (inBlock) {
      blockTokens.push(t);
    } else {
      result += appendToken(t);
    }
  }

  if (inBlock && blockTokens.length) {
    result += "[" + blockTokens.map(appendToken).join("");
  }

  return result;
}
