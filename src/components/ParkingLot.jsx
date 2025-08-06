import { useState, useEffect } from "react";
import ParkingSpot from "./ParkingSpot";
import Controls from "./Controls";
import ReceiptModal from "./ReceiptModal"; // 👈 Import the modal

const TOTAL_SPOTS = 10;

export default function ParkingLot() {
  const [spots, setSpots] = useState(
    Array.from({ length: TOTAL_SPOTS }, (_, i) => ({
      id: i,
      occupied: false,
      vehicleNumber: "",
      name: "",
      phone: "",
      entryTime: "",
      exitTime: "",
    }))
  );

  // ✅ Receipt state
  const [receiptData, setReceiptData] = useState(null);

  // ✅ Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("parkar_spots");
    if (saved) setSpots(JSON.parse(saved));
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("parkar_spots", JSON.stringify(spots));
  }, [spots]);

  // ✅ Park a car
  const handlePark = ({ name, phone, vehicleNumber, entryTime }) => {
    const index = spots.findIndex((s) => !s.occupied);
    if (index === -1) return alert("No available spots");

    const updated = [...spots];
    const newSpot = {
      ...updated[index],
      occupied: true,
      vehicleNumber,
      entryTime,
      name,
      phone,
      exitTime: "",
    };
    updated[index] = newSpot;

    setSpots(updated);
    setReceiptData(newSpot); // Show receipt
  };

  // ✅ Unpark a car
  const handleUnpark = (id) => {
    const updated = spots.map((spot) =>
      spot.id === id
        ? {
            ...spot,
            occupied: false,
            vehicleNumber: "",
            name: "",
            phone: "",
            entryTime: "",
            exitTime: new Date().toLocaleString(),
          }
        : spot
    );
    setSpots(updated);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Controls onPark={handlePark} />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {spots.map((spot) => (
          <ParkingSpot key={spot.id} spot={spot} onUnpark={handleUnpark} />
        ))}
      </div>

      {/* ✅ Receipt Modal */}
      {receiptData && (
        <ReceiptModal data={receiptData} onClose={() => setReceiptData(null)} />
      )}
    </div>
  );
}
