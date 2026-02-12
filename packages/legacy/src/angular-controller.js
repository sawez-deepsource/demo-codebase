// angular-controller.js — AngularJS (v1) legacy code
// This should trigger AngularJS-specific rules if scoped properly

// JS-0239: no-var
var app = {};

// JS-0060: no-eval
function processTemplate(tmpl) {
  return eval(tmpl);
}

// JS-0056: no-console
console.log("AngularJS controller loaded");

// JS-0242: prefer-const
let controllerName = "MainCtrl";

// JS-0050: eqeqeq
function checkScope(scope) {
  if (scope == null) {
    return false;
  }
  return true;
}

export { app, processTemplate, controllerName, checkScope };
