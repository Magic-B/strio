import { test } from "node:test";
import assert from "node:assert";
import { join } from "../src/core/join";

test("join - joins strings with default separator", () => {
  assert.strictEqual(join("a", "b", "c"), "a, b, c");
});

test("join - joins with custom separator", () => {
  assert.strictEqual(join("a", { separator: " - " }, "b"), "a - b");
  assert.strictEqual(join("hello", { separator: "" }, "world"), "helloworld");
});

test("join - filters out empty strings", () => {
  assert.strictEqual(join("a", "", "b"), "a, b");
  assert.strictEqual(join("a", "   ", "b"), "a, b");
});

test("join - filters out null and undefined", () => {
  assert.strictEqual(join("a", null, "b", undefined, "c"), "a, b, c");
});

test("join - handles all empty values", () => {
  assert.strictEqual(join("", null, undefined), "");
});

test("join - handles single value", () => {
  assert.strictEqual(join("hello"), "hello");
});

