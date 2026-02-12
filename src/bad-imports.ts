// bad-imports.ts — Import plugin violations

// JS-R1000: import/no-duplicates — duplicate imports from same module
import { readFileSync } from "fs";
import { writeFileSync } from "fs";

// JS-E1009: import/no-mutable-exports — mutable export
export let mutableCounter = 0;
export var mutableName = "changeable";

// Use the imports to avoid unused-var noise
export function readAndWrite(path: string): void {
  const content = readFileSync(path, "utf8");
  writeFileSync(path + ".bak", content);
  mutableCounter++;
  mutableName = "changed";
}
