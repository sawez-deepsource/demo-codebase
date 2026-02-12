// ember-routes.js — Ember.js legacy code with violations

// JS-0239: no-var
var routeConfig = {
  path: "/dashboard",
  template: "dashboard"
};

// JS-0060: no-eval
function loadLegacyTemplate(name) {
  return eval("templates['" + name + "']");
}

// JS-0056: no-console
console.log("Loading ember routes");

// JS-0050: eqeqeq
function isActive(route) {
  if (route.active == true) {
    return true;
  }
  return false;
}

// JS-0005: no-debugger
function debugTransition() {
  debugger;
  return routeConfig;
}

// JS-0128: no-unused-vars
var legacyFlag = true;

// JS-0086: no-return-assign
function setRoute(r) { var current; return current = r; }

export { routeConfig, loadLegacyTemplate, isActive, debugTransition, setRoute };
