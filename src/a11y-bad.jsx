// a11y-bad.jsx — JSX Accessibility (jsx-a11y) violations
// These run on .jsx files (disabled in .tsx due to parser incompatibility)
import React from "react";

// JS-0737: jsx-a11y/alt-text — img without alt
export function BadImage() {
  return <img src="/photo.png" />;
}

// JS-0739: jsx-a11y/anchor-is-valid — anchor with no href
export function BadLink() {
  return <a onClick={() => {}}>Click me</a>;
}

// JS-0765: jsx-a11y/no-static-element-interactions — onClick on div without role
// JS-0746: jsx-a11y/click-events-have-key-events — onClick without onKeyDown/onKeyUp/onKeyPress
export function BadDiv() {
  return <div onClick={() => {}}>clickable div</div>;
}

// JS-0769: jsx-a11y/tabindex-no-positive — positive tabindex is bad practice
export function BadTabIndex() {
  return <input tabIndex={5} />;
}

// JS-0747: jsx-a11y/heading-has-content — empty heading
export function EmptyHeading() {
  return <h1></h1>;
}

// JS-0749: jsx-a11y/iframe-has-title — iframe without title
export function BadIframe() {
  return <iframe src="https://example.com" />;
}

// JS-0748: jsx-a11y/html-has-lang — html without lang attribute
export function BadHtml() {
  return <html><body>content</body></html>;
}
