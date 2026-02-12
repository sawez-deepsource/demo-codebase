// validators.ts — Pure TypeScript utility violations (no framework)

// JS-0323: @typescript-eslint/no-explicit-any
export function isValid(value: any): boolean {
  return value !== null && value !== undefined;
}

// JS-0331: @typescript-eslint/no-inferrable-types
const MAX_LENGTH: number = 255;
const MIN_LENGTH: number = 1;

// JS-0337: @typescript-eslint/no-namespace
namespace Validators {
  export function isEmail(email: string): boolean {
    return email.includes("@");
  }
}

// JS-0322: @typescript-eslint/no-empty-interface
interface EmptyValidator {}

// JS-0242: prefer-const
let defaultPattern = /^[a-z]+$/;

// JS-0239: no-var (in a .ts file, unusual but valid test)
var legacyHelper = "helper";

// JS-0091: no-throw-literal
function assertNonEmpty(s: string) {
  if (!s) {
    throw "empty string";
  }
}

// Clean function — no issues
export function sanitize(input: string): string {
  return input.trim().toLowerCase();
}

export { MAX_LENGTH, MIN_LENGTH, Validators, defaultPattern, legacyHelper, assertNonEmpty };
export type { EmptyValidator };
