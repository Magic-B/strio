import { test } from "node:test";
import assert from "node:assert";
import { slugify } from "../src/core/slugify";

test("slugify - creates URL-friendly slug", () => {
  assert.strictEqual(slugify("Hello World!"), "hello-world");
  assert.strictEqual(slugify("  Multiple   Spaces  "), "multiple-spaces");
});

test("slugify - transliterates Cyrillic", () => {
  assert.strictEqual(slugify("Привет Мир!"), "privet-mir");
});

test("slugify - transliterates accented characters", () => {
  assert.strictEqual(slugify("café résumé"), "cafe-resume");
});

test("slugify - handles custom separator", () => {
  assert.strictEqual(slugify("Hello World", "_"), "hello_world");
  assert.strictEqual(slugify("Hello World", ""), "helloworld");
});

test("slugify - removes special characters", () => {
  assert.strictEqual(slugify("Hello World #2023!"), "hello-world-2023");
});

test("slugify - handles empty string", () => {
  assert.strictEqual(slugify(""), "");
});

test("slugify - removes leading/trailing separators", () => {
  assert.strictEqual(slugify("!!!hello!!!"), "hello");
});

