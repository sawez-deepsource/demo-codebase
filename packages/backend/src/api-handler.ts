// api-handler.ts — More backend violations
import path from "path";

// JS-0060: no-eval
function parseConfig(raw: string) {
  return eval("(" + raw + ")");
}

// JS-0005: no-debugger
function debugRoute() {
  debugger;
  return { status: "debug" };
}

// JS-0009: no-empty — empty catch block
function safeParse(json: string) {
  try {
    return JSON.parse(json);
  } catch (e) {}
  return null;
}

// JS-0242: prefer-const — let never reassigned
let apiVersion = "v2";

// JS-0295: @typescript-eslint/ban-ts-comment
// @ts-ignore
const brokenImport = require("nonexistent");

// JS-0331: @typescript-eslint/no-inferrable-types
const maxRetries: number = 3;
const defaultHost: string = "localhost";

// JS-0322: @typescript-eslint/no-empty-interface
interface EmptyConfig {}

// Use vars to reduce noise
export { parseConfig, debugRoute, safeParse, apiVersion, brokenImport, maxRetries, defaultHost };
export type { EmptyConfig };
