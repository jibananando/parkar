import React, { useRef } from "react";

export default function ReceiptModal({ data, onClose }) {
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const newWindow = window.open("", "", "height=600,width=800");
    newWindow.document.write("<html><head><title>Parking Receipt</title>");
    newWindow.document.write("</head><body >");
    newWindow.document.write(printContents);
    newWindow.document.write("</body></html>");
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] text-sm">
        <div ref={printRef}>
          <h2 className="text-lg font-bold mb-4 text-center">
            🚗 Parking Receipt
          </h2>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
          <p>
            <strong>Vehicle:</strong> {data.vehicleNumber}
          </p>
          <p>
            <strong>Entry Time:</strong> {data.entryTime}
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={onClose} className="px-4 py-1 bg-gray-300 rounded">
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-4 py-1 bg-blue-600 text-white rounded"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
}
