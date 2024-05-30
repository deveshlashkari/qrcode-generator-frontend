"use client";

import { useState } from "react";
import Header from "../components/Header";
import QrCodeForm from "../components/QrCodeForm";
import QrCodeDisplay from "../components/QrCodeDisplay";

export default function Home() {
  const [qrCode, setQrCode] = useState("");
  const [format, setFormat] = useState("png");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md">
        <Header />
        <main className="p-4">
          <QrCodeForm setQrCode={setQrCode} setFormat={setFormat} />
          <QrCodeDisplay qrCode={qrCode} format={format} />
        </main>
      </div>
    </div>
  );
}
