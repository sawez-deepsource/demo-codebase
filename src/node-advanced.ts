// node-advanced.ts — Additional Node.js rule violations
import path from "path";

// JS-0262: node/no-path-concat — concat with __dirname
const configDir = __dirname + "/config";
const dataDir = __filename + "/../data";

// JS-0263: node/no-process-exit — use throw instead
function shutdown(code: number) {
  process.exit(code);
}

// JS-0272: node/no-deprecated-api — using deprecated Buffer constructor
function createBuffer(size: number) {
  return new Buffer(size);
}

// JS-0261: node/no-new-require — new with require
function loadModule(name: string) {
  return new (require as any)(name);
}

export { configDir, dataDir, shutdown, createBuffer, loadModule };
export const join = path.join;
