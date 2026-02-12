// App.tsx — React-specific rule violations
// Every violation is annotated with its expected issue code.
import React from "react";

interface Item {
  id: number;
  name: string;
}

// JS-0414: jsx-key — missing key in .map() (line 15)
// JS-0437: no-array-index-key — index used as key (line 19)
export function ItemList({ items }: { items: Item[] }) {
  return (
    <div>
      {items.map((item) => (
        <span>{item.name}</span>
      ))}

      {items.map((item, index) => (
        <span key={index}>{item.name}</span>
      ))}
    </div>
  );
}

// JS-0422: jsx-no-target-blank — target="_blank" without rel (line 28)
export function ExternalLink() {
  return <a href="https://example.com" target="_blank">Click me</a>;
}

// JS-0468: self-closing-comp — non-self-closing empty element (line 33)
export function EmptyBox() {
  return <div className="box"></div>;
}

// Clean component — should have 0 issues
export function CleanComponent({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}
