import { test } from "node:test";
import assert from "node:assert";
import { pluralize } from "../src/core/pluralize";

test("pluralize - handles English singular", () => {
  assert.strictEqual(pluralize(1, null, "item", "items"), "1 item");
  assert.strictEqual(pluralize(-1, null, "item", "items"), "-1 item");
});

test("pluralize - handles English plural", () => {
  assert.strictEqual(pluralize(0, null, "item", "items"), "0 items");
  assert.strictEqual(pluralize(2, null, "item", "items"), "2 items");
  assert.strictEqual(pluralize(5, null, "item", "items"), "5 items");
  assert.strictEqual(pluralize(100, null, "item", "items"), "100 items");
});

test("pluralize - handles zero form", () => {
  assert.strictEqual(pluralize(0, "no items", "item", "items"), "no items");
  assert.strictEqual(pluralize(0, "empty", "file", "files"), "empty");
});

test("pluralize - handles negative numbers", () => {
  assert.strictEqual(pluralize(-2, null, "item", "items"), "-2 items");
  assert.strictEqual(pluralize(-5, null, "apple", "apples"), "-5 apples");
});

test("pluralize - handles Russian forms", () => {
  assert.strictEqual(pluralize(1, null, "товар", "товара", "товаров"), "1 товар");
  assert.strictEqual(pluralize(2, null, "товар", "товара", "товаров"), "2 товара");
  assert.strictEqual(pluralize(5, null, "товар", "товара", "товаров"), "5 товаров");
});

test("pluralize - handles Russian edge cases", () => {
  assert.strictEqual(pluralize(11, null, "день", "дня", "дней"), "11 дней");
  assert.strictEqual(pluralize(14, null, "день", "дня", "дней"), "14 дней");
  
  assert.strictEqual(pluralize(21, null, "день", "дня", "дней"), "21 день");
  assert.strictEqual(pluralize(22, null, "день", "дня", "дней"), "22 дня");
  assert.strictEqual(pluralize(25, null, "день", "дня", "дней"), "25 дней");
});

