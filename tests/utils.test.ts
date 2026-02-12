// utils.test.ts — Test file. Should get relaxed rules.
// Some things that violate normal rules but are fine in tests.

import { capitalize, sum } from "../src/clean-utils";

describe("capitalize", () => {
  it("should capitalize first letter", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  it("should handle empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("sum", () => {
  it("should sum numbers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  it("should return 0 for empty array", () => {
    expect(sum([])).toBe(0);
  });
});
