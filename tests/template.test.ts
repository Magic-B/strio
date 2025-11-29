import { test } from "node:test";
import assert from "node:assert";
import { template } from "../src/core/template";

test("template - shows block when value is truthy", () => {
  const name = "John";
  const age = 25;
  assert.strictEqual(template`Hello, ${name}[, ${age} years old]!`, "Hello, John, 25 years old!");
});

test("template - hides block when value is falsy", () => {
  const name = "John";
  const age = null;
  assert.strictEqual(template`Hello, ${name}[, ${age} years old]!`, "Hello, John!");
});

test("template - handles multiple blocks", () => {
  const dir = "docs";
  const file = null;
  assert.strictEqual(template`/${dir}[/${file}]`, "/docs");
  
  const file2 = "readme.md";
  assert.strictEqual(template`/${dir}[/${file2}]`, "/docs/readme.md");
});

test("template - handles escaped brackets", () => {
  const value = 42;
  assert.strictEqual(template`Array\\[0\\] = ${value}`, "Array[0] = 42");
});

test("template - handles nested brackets inside blocks", () => {
  const role = "admin";
  assert.strictEqual(template`User[ [${role}]]`, "User [admin]");
  
  const user2 = "John";
  const role3 = "admin";
  // Block shows when values are truthy, brackets inside are treated as text
  assert.strictEqual(template`[${user2} (role: ${role3})]`, "John (role: admin)");
  
  const user3 = null;
  assert.strictEqual(template`[${user3} (optional)]`, "");
});

test("template - handles unclosed blocks", () => {
  const value = "test";
  assert.strictEqual(template`Unclosed [${value}`, "Unclosed [test");
});

test("template - handles closing bracket outside block", () => {
  const value = "test";
  assert.strictEqual(template`Text] ${value}`, "Text] test");
});

test("template - handles boolean values", () => {
  const isActive = true;
  assert.strictEqual(template`Value:[ ${isActive} (active)]`, "Value: true (active)");
  
  const isInactive = false;
  assert.strictEqual(template`Value:[ ${isInactive} (active)]`, "Value:");
});

test("template - handles zero as falsy", () => {
  assert.strictEqual(template`Count: ${0}[ items]`, "Count: 0");
});

test("template - handles empty string as falsy", () => {
  assert.strictEqual(template`Text: ${""}[ (empty)]`, "Text: ");
});

