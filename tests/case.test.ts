import { test } from "node:test";
import assert from "node:assert";
import { camelize, pascalize, dasherize, underscore } from "../src/core/case";

test("camelize - converts to camelCase", () => {
  assert.strictEqual(camelize("hello-world"), "helloWorld");
  assert.strictEqual(camelize("hello_world"), "helloWorld");
  assert.strictEqual(camelize("Hello World"), "helloWorld");
  assert.strictEqual(camelize("HelloWorld"), "helloWorld");
});

test("camelize - handles empty string", () => {
  assert.strictEqual(camelize(""), "");
});

test("pascalize - converts to PascalCase", () => {
  assert.strictEqual(pascalize("hello-world"), "HelloWorld");
  assert.strictEqual(pascalize("hello_world"), "HelloWorld");
  assert.strictEqual(pascalize("hello world"), "HelloWorld");
});

test("dasherize - converts to kebab-case", () => {
  assert.strictEqual(dasherize("helloWorld"), "hello-world");
  assert.strictEqual(dasherize("HelloWorld"), "hello-world");
  assert.strictEqual(dasherize("hello_world"), "hello-world");
  assert.strictEqual(dasherize("hello world"), "hello-world");
});

test("dasherize - handles multiple separators", () => {
  assert.strictEqual(dasherize("hello___world"), "hello-world");
});

test("underscore - converts to snake_case", () => {
  assert.strictEqual(underscore("helloWorld"), "hello_world");
  assert.strictEqual(underscore("HelloWorld"), "hello_world");
  assert.strictEqual(underscore("hello-world"), "hello_world");
  assert.strictEqual(underscore("hello world"), "hello_world");
});

