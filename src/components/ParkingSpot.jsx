export default function ParkingSpot({ spot, onUnpark }) {
  const isOccupied = spot.occupied;

  return (
    <div
      className={`rounded-2xl p-4 border shadow-md transition duration-300 transform hover:scale-[1.02] ${
        isOccupied ? "bg-white border-red-300" : "bg-gray-50 border-gray-200"
      }`}
    >
      {isOccupied ? (
        <>
          <div className="text-center mb-3">
            <p className="text-sm text-red-500 font-semibold uppercase tracking-wide">
              Occupied
            </p>
          </div>

          <div className="gap-4 text-sm text-gray-700">
            <div className="space-y-1">
              <p>
                <span className="font-medium text-gray-900">Name:</span>{" "}
                {spot.name}
              </p>
              <p>
                <span className="font-medium text-gray-900">Phone:</span>{" "}
                {spot.phone}
              </p>
            </div>
            <div className="space-y-1">
              <p>
                <span className="font-medium text-gray-900">Vehicle:</span>{" "}
                {spot.vehicleNumber}
              </p>
              <p>
                <span className="font-medium text-gray-900">In:</span>{" "}
                {spot.entryTime}
              </p>
            </div>
          </div>

          <button
            onClick={() => onUnpark(spot.id)}
            className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 rounded-lg"
          >
            Unpark
          </button>
        </>
      ) : (
        <div className="text-center py-6">
          <p className="text-sm text-green-600 font-semibold">Available</p>
          {spot.exitTime && (
            <p className="mt-1 text-xs text-gray-500 italic">
              Last out: {spot.exitTime}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
