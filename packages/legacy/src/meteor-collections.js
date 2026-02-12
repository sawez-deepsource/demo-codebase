// meteor-collections.js — Meteor legacy code with violations

// JS-0239: no-var
var Collections = {};

// JS-0009: no-empty — empty catch
function safeGet(key) {
  try {
    return Collections[key];
  } catch (e) {}
  return null;
}

// JS-0104: yoda
function isAdmin(role) {
  if ("admin" === role) {
    return true;
  }
  return false;
}

// JS-0091: no-throw-literal
function validateInput(data) {
  if (!data) {
    throw "Missing data";
  }
  return data;
}

// JS-0049: dot-notation
var config = { timeout: 5000 };
var timeout = config["timeout"];

// JS-0246: prefer-template
var label = "timeout-" + timeout;

export { Collections, safeGet, isAdmin, validateInput, timeout, label };
