import { pattern, regex } from "regex";
import type { Tagged } from "type-fest";

/** A validated JavaScript identifier. */
export type JsIdentifier = Tagged<string, "JsIdentifier">;

const rawJsIdentifierChars = String.raw`$\u200c\u200d\p{ID_Continue}`;
/** Matches a valid identifier character. May not be valid at the start. */
export const pJsIdentifierChar = pattern`[${rawJsIdentifierChars}]`;
/** Matches an invalid identifier character. */
export const pNotJsIdentifierChar = pattern`[^${rawJsIdentifierChars}]`;

/**
 * Matches an entire valid identifier.
 *
 * Regular expression for a valid identifier, according to MDN (with `u` flag)
 * [$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers
 */
export const pJsIdentifier = pattern`[$_\p{ID_Start}]${pJsIdentifierChar}*`;

const reJsIdentifierExact = regex`^${pJsIdentifier}$`;

/** Returns true if the name can be used as a JavaScript identifier. */
export function isValidJsIdentifier(name: string): name is JsIdentifier {
  return reJsIdentifierExact.test(name) && !reservedKeywords.has(name);
}

/**
 * List of reserved keywords
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
 */
const reservedKeywords = new Set([
  "arguments", // not a keyword, but cannot be declared as identifier in strict mode
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "enum",
  "eval", // not a keyword, but cannot be declared as identifier in strict mode
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
]);
