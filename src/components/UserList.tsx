import { useStore } from "@nanostores/react";
import { userStore } from "../stores/userStore";

export default function UserList() {
  const users = useStore(userStore);

  console.log(users);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>User List (Shared Store)</h2>
      <p style={{ color: "#666", fontSize: "14px" }}>
        This component uses a 'shared' scope store. Try making changes to this
        file and save to trigger hot reload - the bug should manifest.
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            <strong>{user.name}</strong> ({user.role})
            <br />
            <span style={{ color: "#666", fontSize: "14px" }}>
              {user.email}
            </span>
          </li>
        ))}
      </ul>
      <div
        style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}
      >
        <strong>Debug Info:</strong>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </div>
  );
}
