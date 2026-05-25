import { useState } from "react";
import React from "react";

function AddMedicine({ medicines, setMedicines }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [dosage, setDosage] = useState("");

  function handleAddMedicine() {
    if (!name || !time || !dosage) {
      alert("Please fill all fields");
      return;
    }

    const newMedicine = {
      id: Date.now(),
      name,
      time,
      dosage,
      status: "Pending",
    };

    setMedicines([...medicines, newMedicine]);

    setName("");
    setTime("");
    setDosage("");
  }

  return (
    <div>
      <h2>Add Medicine</h2>

      <input
        type="text"
        placeholder="Medicine Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Dosage"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAddMedicine}>
        Add Medicine
      </button>
    </div>
  );
}

export default AddMedicine;