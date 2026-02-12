// Dashboard.tsx — React component with known violations
import React, { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

// JS-0414: react/jsx-key — missing key in .map()
// JS-0468: react/self-closing-comp — non-self-closing empty element
// JS-0437: react/no-array-index-key
export function Dashboard({ users }: { users: User[] }) {
  const [count, setCount] = useState(0);

  // JS-0125: no-useless-constructor pattern — useEffect with empty deps
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className="spacer"></div>

      {users.map((user) => (
        <div>{user.name}</div>
      ))}

      {users.map((user, idx) => (
        <span key={idx}>{user.email}</span>
      ))}

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// JS-0422: react/jsx-no-target-blank
export function Footer() {
  return (
    <footer>
      <a href="https://example.com" target="_blank">Terms</a>
      <a href="https://example.com" target="_blank">Privacy</a>
    </footer>
  );
}

export default Dashboard;
