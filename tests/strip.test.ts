import { test } from "node:test";
import assert from "node:assert";
import {
  stripTags,
  collapseWhitespace,
  stripPrefix,
  stripSuffix,
} from "../src/core/strip";

test("stripTags - removes HTML tags", () => {
  assert.strictEqual(stripTags("<p>Hello <strong>World</strong>!</p>"), "Hello World!");
  assert.strictEqual(stripTags("<div><span>Test</span></div>"), "Test");
});

test("stripTags - handles self-closing tags", () => {
  assert.strictEqual(stripTags("Hello<br/>World"), "HelloWorld");
});

test("stripTags - handles empty string", () => {
  assert.strictEqual(stripTags(""), "");
});

test("collapseWhitespace - collapses multiple spaces", () => {
  assert.strictEqual(collapseWhitespace("hello    world"), "hello world");
  assert.strictEqual(collapseWhitespace("hello\n\n  world"), "hello world");
});

test("collapseWhitespace - trims edges", () => {
  assert.strictEqual(collapseWhitespace("  hello  "), "hello");
});

test("stripPrefix - removes prefix", () => {
  assert.strictEqual(stripPrefix("Hello World", "Hello "), "World");
  assert.strictEqual(stripPrefix("/path/to/file", "/"), "path/to/file");
});

test("stripPrefix - does nothing if prefix not found", () => {
  assert.strictEqual(stripPrefix("Hello World", "Hi"), "Hello World");
});

test("stripPrefix - handles empty prefix", () => {
  assert.strictEqual(stripPrefix("test", ""), "test");
});

test("stripSuffix - removes suffix", () => {
  assert.strictEqual(stripSuffix("Hello World", " World"), "Hello");
  assert.strictEqual(stripSuffix("file.js", ".js"), "file");
});

test("stripSuffix - does nothing if suffix not found", () => {
  assert.strictEqual(stripSuffix("Hello World", ".txt"), "Hello World");
});

test("stripSuffix - handles empty suffix", () => {
  assert.strictEqual(stripSuffix("test", ""), "test");
});

