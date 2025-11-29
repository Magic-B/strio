import { test } from "node:test";
import assert from "node:assert";
import {
  isEmpty,
  isBlank,
  isAlpha,
  isNumeric,
  isAlphaNumeric,
  isString,
  isUpperCase,
  isLowerCase,
} from "../src/core/checks";

test("isEmpty - checks for empty strings", () => {
  assert.strictEqual(isEmpty(""), true);
  assert.strictEqual(isEmpty(null), true);
  assert.strictEqual(isEmpty(undefined), true);
  assert.strictEqual(isEmpty("hello"), false);
  assert.strictEqual(isEmpty(" "), false);
});

test("isBlank - checks for blank strings", () => {
  assert.strictEqual(isBlank(""), true);
  assert.strictEqual(isBlank("   "), true);
  assert.strictEqual(isBlank("\t\n"), true);
  assert.strictEqual(isBlank(null), true);
  assert.strictEqual(isBlank(undefined), true);
  assert.strictEqual(isBlank("hello"), false);
});

test("isAlpha - checks for alphabetic characters", () => {
  assert.strictEqual(isAlpha("hello"), true);
  assert.strictEqual(isAlpha("Привет"), true);
  assert.strictEqual(isAlpha("hello123"), false);
  assert.strictEqual(isAlpha("hello-world"), false);
  assert.strictEqual(isAlpha(""), false);
});

test("isNumeric - checks for numeric characters", () => {
  assert.strictEqual(isNumeric("123"), true);
  assert.strictEqual(isNumeric("0"), true);
  assert.strictEqual(isNumeric("12.3"), false);
  assert.strictEqual(isNumeric("12a"), false);
  assert.strictEqual(isNumeric(""), false);
});

test("isAlphaNumeric - checks for alphanumeric characters", () => {
  assert.strictEqual(isAlphaNumeric("hello123"), true);
  assert.strictEqual(isAlphaNumeric("abc"), true);
  assert.strictEqual(isAlphaNumeric("123"), true);
  assert.strictEqual(isAlphaNumeric("hello-123"), false);
  assert.strictEqual(isAlphaNumeric(""), false);
});

test("isString - checks if value is a string", () => {
  assert.strictEqual(isString("hello"), true);
  assert.strictEqual(isString(""), true);
  assert.strictEqual(isString(123), false);
  assert.strictEqual(isString(null), false);
  assert.strictEqual(isString(undefined), false);
  assert.strictEqual(isString({}), false);
  assert.strictEqual(isString([]), false);
});

test("isUpperCase - checks if string is uppercase", () => {
  assert.strictEqual(isUpperCase("HELLO"), true);
  assert.strictEqual(isUpperCase("HELLO WORLD"), true);
  assert.strictEqual(isUpperCase("HELLO123"), true);
  assert.strictEqual(isUpperCase("Hello"), false);
  assert.strictEqual(isUpperCase("hello"), false);
  assert.strictEqual(isUpperCase("HeLLo"), false);
});

test("isUpperCase - handles non-letter strings", () => {
  assert.strictEqual(isUpperCase("123"), false);
  assert.strictEqual(isUpperCase("!!!"), false);
  assert.strictEqual(isUpperCase(""), false);
});

test("isLowerCase - checks if string is lowercase", () => {
  assert.strictEqual(isLowerCase("hello"), true);
  assert.strictEqual(isLowerCase("hello world"), true);
  assert.strictEqual(isLowerCase("hello123"), true);
  assert.strictEqual(isLowerCase("Hello"), false);
  assert.strictEqual(isLowerCase("HELLO"), false);
  assert.strictEqual(isLowerCase("HeLLo"), false);
});

test("isLowerCase - handles non-letter strings", () => {
  assert.strictEqual(isLowerCase("123"), false);
  assert.strictEqual(isLowerCase("!!!"), false);
  assert.strictEqual(isLowerCase(""), false);
});

