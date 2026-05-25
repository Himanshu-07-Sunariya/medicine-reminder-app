import React from 'react'

function Navbar() {
  return (
    <nav>
      <h1>Medicine Reminder App</h1>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Dashboard</li>
        <li>Add Medicine</li>
        <li>Reminders</li>
      </ul>
    </nav>
  );
}

export default Navbar
