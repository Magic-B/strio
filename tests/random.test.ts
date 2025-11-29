import { test } from "node:test";
import assert from "node:assert";
import {
  random,
  randomAlphanumeric,
  randomNumeric,
  randomAlpha,
} from "../src/core/random";

test("random - generates string of correct length", () => {
  assert.strictEqual(random(8).length, 8);
  assert.strictEqual(random(16).length, 16);
});

test("random - generates different strings", () => {
  const str1 = random(10);
  const str2 = random(10);
  assert.notStrictEqual(str1, str2);
});

test("random - uses custom charset", () => {
  const str = random(100, "abc");
  assert.ok(/^[abc]+$/.test(str));
});

test("random - handles zero length", () => {
  assert.strictEqual(random(0), "");
});

test("random - handles empty charset", () => {
  assert.strictEqual(random(10, ""), "");
});

test("randomAlphanumeric - generates alphanumeric string", () => {
  const str = randomAlphanumeric(50);
  assert.strictEqual(str.length, 50);
  assert.ok(/^[A-Za-z0-9]+$/.test(str));
});

test("randomNumeric - generates numeric string", () => {
  const str = randomNumeric(10);
  assert.strictEqual(str.length, 10);
  assert.ok(/^[0-9]+$/.test(str));
});

test("randomAlpha - generates alphabetic string", () => {
  const str = randomAlpha(20);
  assert.strictEqual(str.length, 20);
  assert.ok(/^[A-Za-z]+$/.test(str));
});

test("randomNumeric - all digits are possible", () => {
  // Generate many numbers to ensure all digits appear
  const combined = Array.from({ length: 100 }, () => randomNumeric(10)).join("");
  for (let i = 0; i <= 9; i++) {
    assert.ok(combined.includes(String(i)), `Digit ${i} should appear`);
  }
});

