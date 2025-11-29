import { test } from "node:test";
import assert from "node:assert";
import { escapeHtml, unescapeHtml, escapeRegExp } from "../src/core/escape";

test("escapeHtml - escapes HTML characters", () => {
  assert.strictEqual(escapeHtml("<div>Hello</div>"), "&lt;div&gt;Hello&lt;&#x2F;div&gt;");
  assert.strictEqual(escapeHtml('He said "Hi"'), "He said &quot;Hi&quot;");
  assert.strictEqual(escapeHtml("A & B"), "A &amp; B");
});

test("escapeHtml - handles all special characters", () => {
  assert.strictEqual(escapeHtml("<>&\"'/"), "&lt;&gt;&amp;&quot;&#x27;&#x2F;");
});

test("escapeHtml - handles empty string", () => {
  assert.strictEqual(escapeHtml(""), "");
});

test("unescapeHtml - unescapes HTML entities", () => {
  assert.strictEqual(unescapeHtml("&lt;div&gt;Hello&lt;/div&gt;"), "<div>Hello</div>");
  assert.strictEqual(unescapeHtml("He said &quot;Hi&quot;"), 'He said "Hi"');
  assert.strictEqual(unescapeHtml("A &amp; B"), "A & B");
});

test("unescapeHtml - handles all entities", () => {
  assert.strictEqual(unescapeHtml("&lt;&gt;&amp;&quot;&#x27;&#x2F;"), "<>&\"'/");
  assert.strictEqual(unescapeHtml("&lt;&gt;&amp;&quot;&#39;"), "<>&\"'");
});

test("unescapeHtml - handles empty string", () => {
  assert.strictEqual(unescapeHtml(""), "");
});

test("escapeRegExp - escapes regex special characters", () => {
  assert.strictEqual(escapeRegExp("Hello.World"), "Hello\\.World");
  assert.strictEqual(escapeRegExp("$100"), "\\$100");
  assert.strictEqual(escapeRegExp("a*b+c?"), "a\\*b\\+c\\?");
});

test("escapeRegExp - handles all regex characters", () => {
  assert.strictEqual(escapeRegExp(".*+?^${}()|[]\\"), "\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\");
});

