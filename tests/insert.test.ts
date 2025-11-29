import { test } from "node:test";
import assert from "node:assert";
import { insert } from "../src/core/insert";

test("insert - inserts text at position", () => {
  assert.strictEqual(insert("Hello World", 5, ","), "Hello, World");
  assert.strictEqual(insert("abc", 1, "X"), "aXbc");
});

test("insert - inserts at beginning", () => {
  assert.strictEqual(insert("test", 0, "pre-"), "pre-test");
});

test("insert - inserts at end", () => {
  assert.strictEqual(insert("test", 4, "-post"), "test-post");
});

test("insert - handles negative position", () => {
  assert.strictEqual(insert("test", -1, "X"), "test");
});

test("insert - handles position beyond length", () => {
  assert.strictEqual(insert("test", 100, "X"), "test");
});

test("insert - handles empty string", () => {
  assert.strictEqual(insert("", 0, "X"), "X");
});

test("insert - handles empty insertion", () => {
  assert.strictEqual(insert("test", 2, ""), "test");
});

