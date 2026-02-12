// bad-typescript.ts — TypeScript-specific rule violations
// Every violation is annotated with its expected issue code.

// JS-0323: no-explicit-any — param and return (lines 6, 6)
export function processData(data: any): any {
  return data;
}

// JS-0339: no-non-null-assertion (line 10)
const el = document.getElementById("app")!;

// JS-0331: no-inferrable-types (lines 13, 14)
const count: number = 5;
const label: string = "hello";

// JS-0322: no-empty-interface (line 17)
interface EmptyThing {}

// JS-0337: no-namespace (line 20)
namespace LegacyCode {
  export const value = 1;
}

// JS-0295: ban-ts-comment — @ts-ignore without description (line 25)
// @ts-ignore
const broken = "should have a reason";

// JS-0360: prefer-as-const (line 29)
let status = "active" as "active";

// JS-0356: @typescript-eslint/no-unused-vars (line 32)
const unusedTyped = 42;

// JS-0246: prefer-template — core rule, still fires in TS (line 35)
const greeting = "Hello " + label;

// JS-0242: prefer-const — let never reassigned (line 38)
let neverReassigned = "permanent";

// Use some vars to reduce noise
export { el, count, broken, status, greeting, neverReassigned };
export type { EmptyThing };
