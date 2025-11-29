import { test } from "node:test";
import assert from "node:assert";
import { humanize, titleCase } from "../src/core/humanize";

test("humanize - converts snake_case", () => {
  assert.strictEqual(humanize("snake_case_text"), "Snake case text");
  assert.strictEqual(humanize("hello_world"), "Hello world");
});

test("humanize - converts kebab-case", () => {
  assert.strictEqual(humanize("hello-world"), "Hello world");
  assert.strictEqual(humanize("my-variable-name"), "My variable name");
});

test("humanize - converts camelCase", () => {
  assert.strictEqual(humanize("camelCaseText"), "Camel case text");
  assert.strictEqual(humanize("myVariableName"), "My variable name");
});

test("humanize - handles PascalCase", () => {
  assert.strictEqual(humanize("PascalCaseText"), "Pascal case text");
});

test("humanize - handles mixed formats", () => {
  assert.strictEqual(humanize("some_Mixed-Format"), "Some mixed format");
});

test("humanize - handles empty string", () => {
  assert.strictEqual(humanize(""), "");
});

test("titleCase - capitalizes each word", () => {
  assert.strictEqual(titleCase("hello world"), "Hello World");
  assert.strictEqual(titleCase("the quick brown fox"), "The Quick Brown Fox");
});

test("titleCase - handles articles correctly", () => {
  assert.strictEqual(titleCase("the lord of the rings"), "The Lord of the Rings");
  assert.strictEqual(titleCase("a tale of two cities"), "A Tale of Two Cities");
});

test("titleCase - always capitalizes first and last", () => {
  assert.strictEqual(titleCase("the end"), "The End");
  assert.strictEqual(titleCase("to be or not to be"), "To Be or Not to Be");
});

test("titleCase - handles empty string", () => {
  assert.strictEqual(titleCase(""), "");
});

test("titleCase - preserves case when requested", () => {
  assert.strictEqual(titleCase("the API guide", true), "The API Guide");
  assert.strictEqual(titleCase("the API guide", false), "The Api Guide");
});

