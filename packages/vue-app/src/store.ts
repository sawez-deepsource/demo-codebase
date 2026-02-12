// store.ts — Vue app TypeScript file with core + TS violations

// JS-0239: no-var
var storeVersion = 1;

// JS-0323: @typescript-eslint/no-explicit-any
export function getState(): any {
  return { version: storeVersion };
}

// JS-0242: prefer-const — let never reassigned
let defaultLocale = "en";

// JS-0246: prefer-template
const storeLabel = "store-v" + storeVersion;

// JS-0050: eqeqeq
function isDefault(locale: string) {
  if (locale == defaultLocale) {
    return true;
  }
  return false;
}

export { storeVersion, defaultLocale, storeLabel, isDefault };
