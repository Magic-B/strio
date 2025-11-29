import { test } from "node:test";
import assert from "node:assert";
import { repeat } from "../src/core/repeat";

test("repeat - repeats string", () => {
  assert.strictEqual(repeat("abc", 3), "abcabcabc");
  assert.strictEqual(repeat("x", 5), "xxxxx");
});

test("repeat - handles zero repetitions", () => {
  assert.strictEqual(repeat("abc", 0), "");
});

test("repeat - handles one repetition", () => {
  assert.strictEqual(repeat("abc", 1), "abc");
});

test("repeat - handles empty string", () => {
  assert.strictEqual(repeat("", 5), "");
});

