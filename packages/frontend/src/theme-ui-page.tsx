// theme-ui-page.tsx — ThemeUI usage (tests theme-ui dependency detection)
import React from "react";

// This file just tests that the ThemeUI dep is detected via the frontend package.json
// No specific ThemeUI ESLint rules, but the dep detection should pick it up

// JS-0242: prefer-const — let never reassigned
let pageTitle = "Theme UI Page";

// JS-0246: prefer-template
const greeting = "Welcome to " + pageTitle;

export function ThemeUIPage() {
  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
}

export default ThemeUIPage;
