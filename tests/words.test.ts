import { test } from "node:test";
import assert from "node:assert";
import { words, wordCount } from "../src/core/words";

test("words - splits string into words", () => {
  assert.deepStrictEqual(words("hello world"), ["hello", "world"]);
  assert.deepStrictEqual(words("hello-world_test"), ["hello", "world", "test"]);
});

test("words - handles multiple separators", () => {
  assert.deepStrictEqual(words("hello, world! test."), ["hello", "world", "test"]);
});

test("words - handles empty string", () => {
  assert.deepStrictEqual(words(""), []);
});

test("words - handles single word", () => {
  assert.deepStrictEqual(words("hello"), ["hello"]);
});

test("words - supports Cyrillic", () => {
  assert.deepStrictEqual(words("Привет мир"), ["Привет", "мир"]);
});

test("wordCount - counts words", () => {
  assert.strictEqual(wordCount("hello world"), 2);
  assert.strictEqual(wordCount("hello-world_test"), 3);
});

test("wordCount - returns 0 for empty string", () => {
  assert.strictEqual(wordCount(""), 0);
});

test("wordCount - handles single word", () => {
  assert.strictEqual(wordCount("hello"), 1);
});

