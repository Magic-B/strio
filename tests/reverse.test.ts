import { test } from "node:test";
import assert from "node:assert";
import { reverse } from "../src/core/reverse";

test("reverse - reverses string", () => {
  assert.strictEqual(reverse("hello"), "olleh");
  assert.strictEqual(reverse("123"), "321");
});

test("reverse - handles empty string", () => {
  assert.strictEqual(reverse(""), "");
});

test("reverse - handles single character", () => {
  assert.strictEqual(reverse("a"), "a");
});

test("reverse - handles palindrome", () => {
  assert.strictEqual(reverse("racecar"), "racecar");
});

