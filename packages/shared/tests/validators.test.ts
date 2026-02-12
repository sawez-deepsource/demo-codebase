// validators.test.ts — Test file, should get relaxed rules
import { describe, it, expect } from "vitest";

describe("Validators", () => {
  it("should validate non-null values", () => {
    expect(true).toBe(true);
  });

  it("should sanitize strings", () => {
    const input = "  Hello World  ";
    expect(input.trim()).toBe("Hello World");
  });
});
