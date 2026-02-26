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

// === v3 DIFF TEST — new code below ===

// JS-0007: no-alert
function showNotice() {
    alert("This is a notice");
    confirm("Are you sure?");
    prompt("Enter your name:");
}

// no-implied-eval via setInterval with string
function startPolling() {
    setInterval("checkStatus()", 5000);
}

// no-loop-func
function makeCounters(n) {
    var counters = [];
    for (var i = 0; i < n; i++) {
        counters.push(function() { return i * 2; });
    }
    return counters;
}

// no-useless-concat
const fullPath = "src/" + "index.js";
const greeting = "hello" + " " + "world";

// no-sequences
const seqResult = (1, 2, 3);

export { showNotice, startPolling, makeCounters, fullPath, greeting, seqResult };
