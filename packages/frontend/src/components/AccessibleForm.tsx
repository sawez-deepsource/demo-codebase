// AccessibleForm.tsx — JSX-A11y violations
import React from "react";

// JS-0525: jsx-a11y/anchor-is-valid — empty href
// JS-0535: jsx-a11y/click-events-have-key-events
// JS-0538: jsx-a11y/no-static-element-interactions
// JS-0547: jsx-a11y/alt-text
export function AccessibleForm() {
  return (
    <form>
      <a href="">Click here</a>
      <a href="javascript:void(0)">Do something</a>

      <img src="/logo.png" />
      <img src="/banner.png" />

      <div onClick={() => alert("clicked")}>Click me</div>
      <span onClick={() => alert("span")}>Span click</span>

      {/* Clean usage */}
      <button type="submit">Submit</button>
      <img src="/valid.png" alt="A valid image" />
    </form>
  );
}

export default AccessibleForm;
