import { test } from "node:test";
import assert from "node:assert";
import { between, betweenAll } from "../src/core/between";

test("between - extracts text between two substrings", () => {
  assert.strictEqual(between("Hello [World]!", "[", "]"), "World");
  assert.strictEqual(between("<div>content</div>", "<div>", "</div>"), "content");
  assert.strictEqual(between("a[1]b[2]c", "[", "]"), "1");
});

test("between - returns empty string when start not found", () => {
  assert.strictEqual(between("hello world", "[", "]"), "");
});

test("between - returns empty string when end not found", () => {
  assert.strictEqual(between("hello [world", "[", "]"), "");
});

test("between - handles adjacent delimiters", () => {
  assert.strictEqual(between("[]", "[", "]"), "");
});

test("betweenAll - extracts all occurrences", () => {
  assert.deepStrictEqual(betweenAll("a[1]b[2]c[3]", "[", "]"), ["1", "2", "3"]);
  assert.deepStrictEqual(betweenAll("<p>Hello</p><p>World</p>", "<p>", "</p>"), ["Hello", "World"]);
});

test("betweenAll - returns empty array when no matches", () => {
  assert.deepStrictEqual(betweenAll("hello world", "[", "]"), []);
});

test("betweenAll - handles empty content", () => {
  assert.deepStrictEqual(betweenAll("[][]", "[", "]"), ["", ""]);
});

