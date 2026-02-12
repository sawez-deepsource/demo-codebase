// store.spec.ts — Test file, should get relaxed rules
import { describe, it, expect } from "vitest";

describe("Store", () => {
  it("should return default state", () => {
    const state = { version: 1 };
    expect(state.version).toBe(1);
  });

  it("should check locale", () => {
    const locale = "en";
    expect(locale).toBe("en");
  });
});
