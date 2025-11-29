import { test } from "node:test";
import assert from "node:assert";
import { capitalize, capitalizeWords } from "../src/core/capitalize";

test("capitalize - capitalizes first letter", () => {
  assert.strictEqual(capitalize("hello world"), "Hello world");
  assert.strictEqual(capitalize("HELLO WORLD"), "Hello world");
});

test("capitalize - handles empty string", () => {
  assert.strictEqual(capitalize(""), "");
});

test("capitalize - handles single character", () => {
  assert.strictEqual(capitalize("a"), "A");
});

test("capitalizeWords - capitalizes each word", () => {
  assert.strictEqual(capitalizeWords("hello world"), "Hello World");
  assert.strictEqual(capitalizeWords("hello-world test"), "Hello-World Test");
});

test("capitalizeWords - handles empty string", () => {
  assert.strictEqual(capitalizeWords(""), "");
});

test("capitalizeWords - handles numbers and special chars", () => {
  assert.strictEqual(capitalizeWords("hello123world"), "Hello123world");
});

