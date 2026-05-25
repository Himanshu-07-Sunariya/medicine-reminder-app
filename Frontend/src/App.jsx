import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import AddMedicine from './components/AddMedicine'
import { useState } from 'react'  

const App = () => {
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: "Paracetamol",
      time: "9:00 AM",
      dosage: "500mg",
      status: "Pending",
    },
    {
      id: 2,
      name: "Vitamin D",
      time: "2:00 PM",
      dosage: "1000 IU",
      status: "Pending",
    },
    {
      id: 3,
      name: "Insulin",
      time: "8:00 PM",
      dosage: "20 Units",
      status: "Pending",
    },
  ]);
  
  return (
    <div>
      <Navbar />
      <AddMedicine
        medicines={medicines}
        setMedicines={setMedicines}
      />
      <Dashboard medicines={medicines} /> 
    </div>
  )
}

export default App
