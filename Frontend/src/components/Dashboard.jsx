import MedicineCard from "./MedicineCard";

function Dashboard({ medicines }) {
  return (
    <div>
      <h2>Today's Medicines</h2>

      {medicines.map((medicine) => (
        <MedicineCard
          key={medicine.id}
          name={medicine.name}
          time={medicine.time}
          dosage={medicine.dosage}
          status={medicine.status}
        />
      ))}
    </div>
  );
}

export default Dashboard;