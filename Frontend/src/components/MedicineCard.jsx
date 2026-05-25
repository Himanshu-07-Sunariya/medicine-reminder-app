import React from "react";

function MedicineCard({ name, time, dosage, status }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "10px",
      }}
    >
      <h3>{name}</h3>

      <p>Time: {time}</p>

      <p>Dosage: {dosage}</p>

      <p>Status: {status}</p>
    </div>
  );
}

export default MedicineCard;