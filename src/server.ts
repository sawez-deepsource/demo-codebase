// server.ts — Node.js rule violations
// Every violation is annotated with its expected issue code.
import path from "path";

// JS-0262: no-path-concat — string concat with __dirname (line 6)
const configPath = __dirname + "/config.json";

// JS-0263: no-process-exit (line 9)
if (!configPath) {
  process.exit(1);
}

// JS-0056: no-console (line 14)
console.log("Server starting at", configPath);

// JS-0052: no-alert — won't fire in node context without browser env,
// but we set browser:true in .eslintrc so it should (line 18)
function showWarning() {
  alert("deprecated");
}

export { configPath, showWarning };
// Use path to avoid unused-import
export const join = path.join;
