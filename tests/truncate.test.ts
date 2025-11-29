import { test } from "node:test";
import assert from "node:assert";
import { truncate, truncateWords } from "../src/core/truncate";

test("truncate - truncates string to length", () => {
  assert.strictEqual(truncate("Hello World", 5), "Hello...");
});

test("truncate - does not truncate if within length", () => {
  assert.strictEqual(truncate("Hello", 10), "Hello");
});

test("truncate - uses custom suffix", () => {
  assert.strictEqual(truncate("Hello World", 8, ">>"), "Hello Wo>>");
});

test("truncate - handles empty suffix", () => {
  assert.strictEqual(truncate("Hello World", 5, ""), "Hello");
});

test("truncate - handles empty string", () => {
  assert.strictEqual(truncate("", 5), "");
});

test("truncateWords - truncates by words", () => {
  assert.strictEqual(truncateWords("Hello beautiful world", 10), "Hello...");
});

test("truncateWords - keeps full words", () => {
  const result = truncateWords("Hello beautiful world", 15);
  assert.ok(result === "Hello beautiful..." || result === "Hello...");
});

test("truncateWords - does not truncate if within length", () => {
  assert.strictEqual(truncateWords("Hello world", 20), "Hello world");
});

test("truncateWords - handles custom suffix", () => {
  const result = truncateWords("Hello beautiful world", 10, ">>>");
  assert.ok(result.endsWith(">>>"));
});

