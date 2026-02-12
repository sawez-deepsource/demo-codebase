// next-page.tsx — Next.js rule violations
import React from "react";

// JS-W1015: @next/next/no-img-element — use next/image instead of <img>
export default function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <img src="/hero.png" alt="Hero" />

      {/* JS-W1014: @next/next/no-html-link-for-pages — use next/link for internal */}
      <a href="/about">About us</a>

      {/* JS-W1017: @next/next/no-sync-scripts — sync script tag */}
      <script src="https://cdn.example.com/lib.js"></script>
    </div>
  );
}

// JS-W1021: @next/next/no-css-tags — using link tag for CSS
export function LayoutHead() {
  return (
    <head>
      <link rel="stylesheet" href="/styles.css" />
      {/* JS-W1018: @next/next/no-title-in-document-head — title in head */}
      <title>My App</title>
    </head>
  );
}
