// index.tsx — Next.js page with known violations
import React from "react";
import Link from "next/link";

// JS-0521: @next/next/no-html-link-for-pages — using <a> instead of <Link>
export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>

      {/* correct usage */}
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
