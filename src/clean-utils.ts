// clean-utils.ts — Well-written code. Should produce ZERO issues.

export function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function sum(numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0);
}

export function clamp(value: number, min: number, max: number): number {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

export const EMPTY_ARRAY: readonly unknown[] = Object.freeze([]);

export function isNonNull<T>(value: T | null | undefined): value is T {
  return value != null;
}
