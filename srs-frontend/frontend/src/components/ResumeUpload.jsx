import React, { useState } from "react";
import { uploadResume } from "../services/api";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    try {
      const data = await uploadResume(file);
      setMessage(`Uploaded: ${data.fileName}`);
    } catch (err) {
      setMessage("Upload failed");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Upload Resume</h2>
      <input type="file" onChange={handleChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Upload
      </button>
      {message && <p className="mt-2 text-gray-700">{message}</p>}
    </div>
  );
}
