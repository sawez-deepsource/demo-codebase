// component.test.tsx — React test file
// Test files should get relaxed rules (no-console off, no-undef off, etc.)
import React from "react";

describe("ItemList", () => {
  it("should render items", () => {
    const items = [{ id: 1, name: "Test" }];
    console.log("debugging:", items);
    expect(items.length).toBe(1);
  });

  it("should handle empty list", () => {
    debugger;
    expect([].length).toBe(0);
  });
});
