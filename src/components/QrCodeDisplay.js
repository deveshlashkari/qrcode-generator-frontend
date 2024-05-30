// components/QrCodeDisplay.js
import { motion } from "framer-motion";

export default function QrCodeDisplay({ qrCode, format }) {
  if (!qrCode) return null;

  return (
    <motion.div
      className="mt-8 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-center mb-4">QR Code:</h3>
      {format === "png" ? (
        <img src={qrCode} alt="QR Code" className="mx-auto" />
      ) : (
        <div className="mx-auto" dangerouslySetInnerHTML={{ __html: qrCode }} />
      )}
    </motion.div>
  );
}
