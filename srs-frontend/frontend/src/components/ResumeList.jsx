import React from "react";

function formatDate(iso) {
  const trimmed = iso.includes(".") ? iso.replace(/(\.\d{3})\d+/, "$1") : iso;
  return new Date(trimmed).toLocaleString();
}

export default function ResumeList({ resumes }) {
  if (!Array.isArray(resumes)) {
    return (
      <div className="flex justify-center mt-6">
        <p className="text-red-500">Error: Invalid data format for resumes.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <ul className="space-y-4 mt-6 w-full max-w-2xl">
        {resumes.map((res) => (
          <li
            key={res.id}
            className="p-4 border rounded-lg bg-white hover:shadow transition-shadow"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{res.fileName}</span>
            </div>
            <details className="mt-2">
              <summary className="cursor-pointer text-sm text-gray-700">
                View Extracted Text
              </summary>
              <pre className="mt-1 text-sm whitespace-pre-wrap">
                {res.extractedText
                  ? res.extractedText.slice(0, 5000)
                  : "No extracted text available..."}
              </pre>
            </details>
            <p className="text-xs text-gray-500 mt-2">
              Uploaded at: {formatDate(res.uploadedAt)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
