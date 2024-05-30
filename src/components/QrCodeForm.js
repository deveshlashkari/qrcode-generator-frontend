// components/QrCodeForm.js
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function QrCodeForm({ setQrCode, setFormat }) {
  const [data, setData] = useState("");
  const [color, setColor] = useState("#000000");
  const [format, setFormatLocal] = useState("png");

  const generateQRCode = async () => {
    const response = await axios.post("http://localhost:3001/generate", {
      data,
      options: { color: { dark: color, light: "#FFFFFF" } },
      format,
    });
    setQrCode(response.data.qrCode);
    setFormat(format);
  };

  return (
    <motion.div
      className="flex flex-col items-center p-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Enter data"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-md"
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="mb-4"
      />
      <select
        value={format}
        onChange={(e) => setFormatLocal(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="png">PNG</option>
        <option value="svg">SVG</option>
        <option value="pdf">PDF</option>
      </select>
      <button
        onClick={generateQRCode}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate QR Code
      </button>
    </motion.div>
  );
}
