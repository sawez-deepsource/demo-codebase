// helper.js inside __tests__/ directory — should be treated as test file
// Relaxed rules should apply (matched by **/__tests__/**)

function setupTestEnv() {
  console.log("Setting up test environment");
  process.env.NODE_ENV = "test";
}

function cleanupTestEnv() {
  console.log("Cleaning up");
  delete process.env.NODE_ENV;
}

module.exports = { setupTestEnv, cleanupTestEnv };
