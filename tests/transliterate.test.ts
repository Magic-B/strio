import { test } from "node:test";
import assert from "node:assert";
import { transliterate } from "../src/core/transliterate";

test("transliterate - transliterates accented characters", () => {
  assert.strictEqual(transliterate("Héllö Wörld"), "Helloe Woerld");
  assert.strictEqual(transliterate("café résumé"), "cafe resume");
});

test("transliterate - transliterates Cyrillic", () => {
  assert.strictEqual(transliterate("Привет Мир"), "Privet Mir");
  assert.strictEqual(transliterate("Москва"), "Moskva");
});

test("transliterate - transliterates Greek", () => {
  assert.strictEqual(transliterate("Αλφα"), "Alfa");
});

test("transliterate - handles mixed scripts", () => {
  const result = transliterate("Café Москва");
  assert.ok(result.includes("Cafe"));
  assert.ok(result.includes("Moskva"));
});

test("transliterate - handles empty string", () => {
  assert.strictEqual(transliterate(""), "");
});

test("transliterate - handles ASCII text unchanged", () => {
  assert.strictEqual(transliterate("Hello World"), "Hello World");
});

test("transliterate - handles numbers", () => {
  assert.strictEqual(transliterate("Test123"), "Test123");
});

