import { test } from "node:test";
import assert from "node:assert";
import { trim } from "../src/core/trim";

test("trim - trims whitespace by default", () => {
  assert.strictEqual(trim("  hello  "), "hello");
  assert.strictEqual(trim("\t\nhello\n\t"), "hello");
});

test("trim - trims custom characters", () => {
  assert.strictEqual(trim("--hello--", "-"), "hello");
  assert.strictEqual(trim("###test###", "#"), "test");
});

test("trim - trims multiple custom characters", () => {
  assert.strictEqual(trim("-_-hello-_-", "-_"), "hello");
});

test("trim - handles empty string", () => {
  assert.strictEqual(trim(""), "");
  assert.strictEqual(trim("", "-"), "");
});

test("trim - handles string with only trim characters", () => {
  assert.strictEqual(trim("---", "-"), "");
});

test("trim - does not trim from middle", () => {
  assert.strictEqual(trim("hel-lo", "-"), "hel-lo");
});

