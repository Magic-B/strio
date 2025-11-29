import { test } from "node:test";
import assert from "node:assert";
import { count } from "../src/core/count";

test("count - counts substring occurrences", () => {
  assert.strictEqual(count("hello world", "l"), 3);
  assert.strictEqual(count("hello world", "o"), 2);
  assert.strictEqual(count("hello world", "x"), 0);
});

test("count - handles empty substring", () => {
  assert.strictEqual(count("hello", ""), 0);
});

test("count - handles empty string", () => {
  assert.strictEqual(count("", "x"), 0);
});

test("count - handles overlapping patterns", () => {
  assert.strictEqual(count("aaaa", "aa"), 2);
});

test("count - case sensitive", () => {
  assert.strictEqual(count("Hello World", "h"), 0);
  assert.strictEqual(count("Hello World", "H"), 1);
});

