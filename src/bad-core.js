// bad-core.js — Core ESLint rule violations (plain JS)
// Every violation is annotated with its expected issue code.

// JS-0239: no-var (line 5)
var x = 1;

// JS-0050: eqeqeq — smart mode still catches == with strings (line 8)
if (x == "1") { x = 2; }

// JS-0056: no-console (line 11)
console.log(x);

// JS-0060: no-eval (line 14)
eval("var z = 1");

// JS-0005: no-debugger (line 17)
debugger;

// JS-0009: no-empty — empty catch block (line 20)
try { x = JSON.parse("bad"); } catch (e) {}

// JS-0242: prefer-const — let but never reassigned (line 23)
let neverChanged = "constant";

// JS-0246: prefer-template (line 26)
const msg = "value is " + neverChanged;

// JS-0241: prefer-arrow-callback (line 29)
const doubled = [1, 2, 3].map(function(item) { return item * 2; });

// JS-0091: no-throw-literal (line 32)
function throwBad() { throw "something went wrong"; }

// JS-0049: dot-notation (line 35)
const obj = { prop: 1 };
const val = obj["prop"];

// JS-0104: yoda (line 39)
const color = "red";
if ("red" === color) { /* yoda */ }

// JS-0128: no-unused-vars — unused import-like variable (line 43)
const unusedThing = 99;

// JS-0086: no-return-assign (line 46)
function returnAssign() { let a; return a = 5; }

// Ensure some vars are used so we don't get false unused-var noise
export { x, msg, doubled, throwBad, val, color, returnAssign };
