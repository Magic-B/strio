import { test } from "node:test";
import assert from "node:assert";
import { ensureLeft, ensureRight } from "../src/core/ensure";

test("ensureLeft - adds prefix if missing", () => {
  assert.strictEqual(ensureLeft("world", "hello "), "hello world");
  assert.strictEqual(ensureLeft("file.js", "/"), "/file.js");
});

test("ensureLeft - does not duplicate prefix", () => {
  assert.strictEqual(ensureLeft("hello world", "hello "), "hello world");
  assert.strictEqual(ensureLeft("/file.js", "/"), "/file.js");
});

test("ensureLeft - handles empty prefix", () => {
  assert.strictEqual(ensureLeft("test", ""), "test");
});

test("ensureLeft - handles empty string", () => {
  assert.strictEqual(ensureLeft("", "prefix"), "prefix");
});

test("ensureRight - adds suffix if missing", () => {
  assert.strictEqual(ensureRight("test", ".js"), "test.js");
  assert.strictEqual(ensureRight("path/to/dir", "/"), "path/to/dir/");
});

test("ensureRight - does not duplicate suffix", () => {
  assert.strictEqual(ensureRight("test.js", ".js"), "test.js");
  assert.strictEqual(ensureRight("path/to/dir/", "/"), "path/to/dir/");
});

test("ensureRight - handles empty suffix", () => {
  assert.strictEqual(ensureRight("test", ""), "test");
});

test("ensureRight - handles empty string", () => {
  assert.strictEqual(ensureRight("", "suffix"), "suffix");
});

