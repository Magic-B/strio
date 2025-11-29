import { test } from "node:test";
import assert from "node:assert";
import { contains, containsAll, containsAny } from "../src/core/contains";

test("contains - checks substring presence", () => {
  assert.strictEqual(contains("Hello World", "World"), true);
  assert.strictEqual(contains("Hello World", "Test"), false);
});

test("contains - case sensitive by default", () => {
  assert.strictEqual(contains("Hello World", "world"), false);
  assert.strictEqual(contains("Hello World", "Hello"), true);
});

test("contains - case insensitive when specified", () => {
  assert.strictEqual(contains("Hello World", "world", true), true);
  assert.strictEqual(contains("Hello World", "HELLO", true), true);
});

test("contains - handles empty string", () => {
  assert.strictEqual(contains("", "test"), false);
  assert.strictEqual(contains("test", ""), true);
});

test("containsAll - checks all substrings", () => {
  assert.strictEqual(containsAll("Hello World", ["Hello", "World"]), true);
  assert.strictEqual(containsAll("Hello World", ["Hello", "Test"]), false);
});

test("containsAll - handles empty array", () => {
  assert.strictEqual(containsAll("Hello World", []), true);
});

test("containsAll - case sensitive by default", () => {
  assert.strictEqual(containsAll("Hello World", ["hello", "world"]), false);
});

test("containsAll - case insensitive when specified", () => {
  assert.strictEqual(containsAll("Hello World", ["hello", "world"], true), true);
});

test("containsAny - checks any substring", () => {
  assert.strictEqual(containsAny("Hello World", ["Hi", "Hello"]), true);
  assert.strictEqual(containsAny("Hello World", ["Hi", "Test"]), false);
});

test("containsAny - handles empty array", () => {
  assert.strictEqual(containsAny("Hello World", []), false);
});

test("containsAny - case sensitive by default", () => {
  assert.strictEqual(containsAny("Hello World", ["hi", "test"]), false);
});

test("containsAny - case insensitive when specified", () => {
  assert.strictEqual(containsAny("Hello World", ["hi", "WORLD"], true), true);
});

