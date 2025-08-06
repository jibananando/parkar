import { useState } from "react";

export default function Controls({ onPark }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !vehicleNumber) {
      return alert("Please fill all fields");
    }

    const entryTime = new Date().toLocaleString();

    onPark({
      name,
      phone,
      vehicleNumber,
      entryTime,
    });

    setName("");
    setPhone("");
    setVehicleNumber("");
  };

  return (
    <div className="mb-4 space-y-2">
      <div className="mb-4 space-y-2 grid grid-cols-2 gap-2">
        <div>
          <h1 className="font-semibold">Name</h1>
          <input
            className="border p-2 w-full rounded-lg"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <h1 className="font-semibold">Phone Number</h1>
          <input
            className="border p-2 w-full rounded-lg"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <h1 className="font-semibold">Vehicle Number</h1>
          <input
            className="border p-2 w-full rounded-lg"
            placeholder="Vehicle Number"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
          />
        </div>
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
        onClick={handleSubmit}
      >
        Park Vehicle
      </button>
    </div>
  );
}
