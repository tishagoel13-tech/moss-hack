import { useState } from "react";

export default function UploadManual() {

  const uploadPDF = async (e) => {
    const formData = new FormData();

    formData.append("file", e.target.files[0]);

    const response = await fetch(
      "http://127.0.0.1:8000/upload-pdf",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    alert(data.message);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Upload Product Manual
      </h1>

      <input
        type="file"
        accept=".pdf"
        onChange={uploadPDF}
        className="border p-3 rounded"
      />
    </div>
  );
}