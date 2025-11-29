import { test } from "node:test";
import assert from "node:assert";
import { mask } from "../src/core/mask";

test("mask - masks string with defaults", () => {
  assert.strictEqual(mask("4111111111111111"), "************1111");
});

test("mask - masks with custom range", () => {
  assert.strictEqual(mask("4111111111111111", { start: 4, end: 12 }), "4111********1111");
});

test("mask - masks with custom character", () => {
  assert.strictEqual(mask("password123", { end: 8, char: "#" }), "########123");
});

test("mask - masks email", () => {
  assert.strictEqual(mask("hello@example.com", { start: 0, end: 5, char: "*" }), "*****@example.com");
});

test("mask - handles invalid range (start >= end)", () => {
  assert.strictEqual(mask("test", { start: 5, end: 2 }), "test");
});

test("mask - handles negative start", () => {
  assert.strictEqual(mask("test", { start: -1, end: 2 }), "test");
});

test("mask - handles end beyond length", () => {
  assert.strictEqual(mask("test", { start: 0, end: 100 }), "test");
});

test("mask - handles empty string", () => {
  assert.strictEqual(mask(""), "");
});

