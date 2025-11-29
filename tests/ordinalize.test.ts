import { test } from "node:test";
import assert from "node:assert";
import { ordinalize } from "../src/core/ordinalize";

test("ordinalize - handles 1st", () => {
  assert.strictEqual(ordinalize(1), "1st");
  assert.strictEqual(ordinalize(21), "21st");
  assert.strictEqual(ordinalize(31), "31st");
  assert.strictEqual(ordinalize(101), "101st");
});

test("ordinalize - handles 2nd", () => {
  assert.strictEqual(ordinalize(2), "2nd");
  assert.strictEqual(ordinalize(22), "22nd");
  assert.strictEqual(ordinalize(32), "32nd");
  assert.strictEqual(ordinalize(102), "102nd");
});

test("ordinalize - handles 3rd", () => {
  assert.strictEqual(ordinalize(3), "3rd");
  assert.strictEqual(ordinalize(23), "23rd");
  assert.strictEqual(ordinalize(33), "33rd");
  assert.strictEqual(ordinalize(103), "103rd");
});

test("ordinalize - handles th for 4-9", () => {
  assert.strictEqual(ordinalize(4), "4th");
  assert.strictEqual(ordinalize(5), "5th");
  assert.strictEqual(ordinalize(9), "9th");
});

test("ordinalize - handles special cases 11-13", () => {
  assert.strictEqual(ordinalize(11), "11th");
  assert.strictEqual(ordinalize(12), "12th");
  assert.strictEqual(ordinalize(13), "13th");
  assert.strictEqual(ordinalize(111), "111th");
  assert.strictEqual(ordinalize(112), "112th");
  assert.strictEqual(ordinalize(113), "113th");
});

test("ordinalize - handles zero", () => {
  assert.strictEqual(ordinalize(0), "0th");
});

test("ordinalize - handles negative numbers", () => {
  assert.strictEqual(ordinalize(-1), "-1st");
  assert.strictEqual(ordinalize(-2), "-2nd");
  assert.strictEqual(ordinalize(-11), "-11th");
});

test("ordinalize - handles large numbers", () => {
  assert.strictEqual(ordinalize(1000), "1000th");
  assert.strictEqual(ordinalize(1001), "1001st");
  assert.strictEqual(ordinalize(9999), "9999th");
});

