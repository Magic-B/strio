import { test } from "node:test";
import assert from "node:assert";
import {
  isEmpty,
  isBlank,
  isAlpha,
  isNumeric,
  isAlphaNumeric,
  isEmail,
  isUrl,
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

test("isEmail - validates email addresses", () => {
  assert.strictEqual(isEmail("test@example.com"), true);
  assert.strictEqual(isEmail("user+tag@domain.co.uk"), true);
  assert.strictEqual(isEmail("invalid"), false);
  assert.strictEqual(isEmail("@example.com"), false);
  assert.strictEqual(isEmail("test@"), false);
  assert.strictEqual(isEmail(""), false);
});

test("isUrl - validates URLs", () => {
  assert.strictEqual(isUrl("https://example.com"), true);
  assert.strictEqual(isUrl("http://localhost:3000"), true);
  assert.strictEqual(isUrl("ftp://server.com"), true);
  assert.strictEqual(isUrl("not a url"), false);
  assert.strictEqual(isUrl("example.com"), false);
  assert.strictEqual(isUrl(""), false);
});

