import { test } from "node:test";
import assert from "node:assert";
import { padLeft, padRight, padCenter } from "../src/core/pad";

test("padLeft - pads string from left", () => {
  assert.strictEqual(padLeft("5", 3, "0"), "005");
  assert.strictEqual(padLeft("hello", 10), "     hello");
});

test("padLeft - does not pad if already long enough", () => {
  assert.strictEqual(padLeft("hello", 3), "hello");
});

test("padLeft - handles multi-char padding", () => {
  assert.strictEqual(padLeft("x", 5, "ab"), "ababx");
});

test("padRight - pads string from right", () => {
  assert.strictEqual(padRight("5", 3, "0"), "500");
  assert.strictEqual(padRight("hello", 10), "hello     ");
});

test("padRight - does not pad if already long enough", () => {
  assert.strictEqual(padRight("hello", 3), "hello");
});

test("padCenter - pads string from both sides", () => {
  assert.strictEqual(padCenter("hi", 6), "  hi  ");
  assert.strictEqual(padCenter("hi", 7), "  hi   ");
});

test("padCenter - handles odd padding", () => {
  assert.strictEqual(padCenter("a", 4), " a  ");
});

test("padCenter - does not pad if already long enough", () => {
  assert.strictEqual(padCenter("hello", 3), "hello");
});

test("padCenter - handles multi-char padding", () => {
  assert.strictEqual(padCenter("x", 5, "-"), "--x--");
});

