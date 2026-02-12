// database.ts — Backend Node.js + TypeScript violations
import path from "path";
import fs from "fs";

// JS-0262: n/no-path-concat
const dbPath = __dirname + "/data/db.json";

// JS-0263: n/no-process-exit
function shutdown() {
  console.log("Shutting down...");
  process.exit(1);
}

// JS-0323: @typescript-eslint/no-explicit-any
export function query(collection: string, filter: any): any {
  return { collection, filter };
}

// JS-0337: @typescript-eslint/no-namespace
namespace DatabaseUtils {
  export function connect() {
    return true;
  }
}

// JS-0339: @typescript-eslint/no-non-null-assertion
const config = JSON.parse(fs.readFileSync(dbPath, "utf8"));
const host = config.host!;

// JS-0091: no-throw-literal
function validate(input: string) {
  if (!input) {
    throw "Input is required";
  }
  return input.trim();
}

// JS-0050: eqeqeq
function checkStatus(code: number) {
  if (code == 200) {
    return "OK";
  }
  return "Error";
}

export { dbPath, shutdown, DatabaseUtils, host, validate, checkStatus };
