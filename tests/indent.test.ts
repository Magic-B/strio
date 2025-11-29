import { test } from "node:test";
import assert from "node:assert";
import { indent, dedent } from "../src/core/indent";

test("indent - adds spaces to single line", () => {
  assert.strictEqual(indent("hello", 2), "  hello");
  assert.strictEqual(indent("test", 4), "    test");
});

test("indent - adds spaces to multiple lines", () => {
  assert.strictEqual(indent("hello\nworld", 2), "  hello\n  world");
});

test("indent - uses default 2 spaces", () => {
  assert.strictEqual(indent("test"), "  test");
});

test("indent - accepts custom string", () => {
  assert.strictEqual(indent("test", "\t"), "\ttest");
  assert.strictEqual(indent("hello\nworld", ">>"), ">>hello\n>>world");
});

test("indent - preserves empty lines", () => {
  assert.strictEqual(indent("hello\n\nworld", 2), "  hello\n\n  world");
});

test("indent - handles empty string", () => {
  assert.strictEqual(indent("", 2), "");
});

test("dedent - removes common indentation", () => {
  assert.strictEqual(dedent("  hello\n  world"), "hello\nworld");
  assert.strictEqual(dedent("    test\n    line"), "test\nline");
});

test("dedent - handles different indentation levels", () => {
  assert.strictEqual(dedent("  line1\n    line2\n  line3"), "line1\n  line2\nline3");
});

test("dedent - removes leading/trailing empty lines", () => {
  assert.strictEqual(dedent("\n  hello\n  world\n"), "hello\nworld");
});

test("dedent - handles no indentation", () => {
  assert.strictEqual(dedent("hello\nworld"), "hello\nworld");
});

test("dedent - handles empty string", () => {
  assert.strictEqual(dedent(""), "");
});

test("dedent - works with template literals", () => {
  const text = dedent(`
    function test() {
      return true;
    }
  `);
  assert.strictEqual(text, "function test() {\n  return true;\n}");
});

