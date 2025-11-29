import { test } from "node:test";
import assert from "node:assert";
import { similarity } from "../src/core/similarity";

test("similarity - returns 1.0 for identical strings", () => {
  assert.strictEqual(similarity("hello", "hello"), 1.0);
  assert.strictEqual(similarity("", ""), 1.0);
});

test("similarity - returns 0.0 for completely different strings", () => {
  assert.strictEqual(similarity("abc", "xyz"), 0.0);
});

test("similarity - calculates similarity for similar strings", () => {
  const sim = similarity("kitten", "sitting");
  assert.ok(sim > 0.5 && sim < 0.6);
});

test("similarity - handles JavaScript vs TypeScript", () => {
  const sim = similarity("JavaScript", "TypeScript");
  assert.ok(sim > 0.5 && sim < 0.7);
});

test("similarity - returns 0.0 when one string is empty", () => {
  assert.strictEqual(similarity("", "hello"), 0.0);
  assert.strictEqual(similarity("hello", ""), 0.0);
});

test("similarity - handles single character difference", () => {
  const sim = similarity("hello", "hallo");
  assert.ok(sim > 0.7);
});

