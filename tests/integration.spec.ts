// integration.spec.ts — Test file with .spec.ts extension
// Should also get relaxed rules

describe("API integration", () => {
  it("should connect to database", () => {
    console.log("connecting...");
    const result = { status: "ok" };
    expect(result.status).toBe("ok");
  });

  it("should handle errors", () => {
    try {
      throw new Error("test error");
    } catch (e) {}
  });
});
