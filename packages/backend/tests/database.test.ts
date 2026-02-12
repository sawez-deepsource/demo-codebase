// database.test.ts — Test file, should get relaxed rules
import { describe, it, expect } from "vitest";

describe("Database", () => {
  it("should query collections", () => {
    const result = { rows: [] };
    expect(result.rows).toEqual([]);
  });

  it("should validate input", () => {
    const input = "valid";
    expect(input.trim()).toBe("valid");
  });
});
