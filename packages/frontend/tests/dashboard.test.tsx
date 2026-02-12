// dashboard.test.tsx — Test file, should get relaxed rules
import { describe, it, expect } from "vitest";

describe("Dashboard", () => {
  it("should render users", () => {
    const users = [{ id: 1, name: "Alice", email: "alice@test.com" }];
    expect(users.length).toBe(1);
  });

  it("should handle empty state", () => {
    const users: unknown[] = [];
    expect(users.length).toBe(0);
  });
});
