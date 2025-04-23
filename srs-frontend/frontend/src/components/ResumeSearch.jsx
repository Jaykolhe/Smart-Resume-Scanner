import React, { useState } from "react";
import { searchResumes } from "../services/api";
import ResumeList from "./ResumeList";

export default function ResumeSearch() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchResumes(keyword);
      console.log("Search Results:", data);
      setResults(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Search Error:", error);
      setResults([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mt-8">
      <h2 className="text-2xl font-semibold mb-4">Search Resumes</h2>

      <div className="flex w-full max-w-md">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keyword"
          className="flex-1 border border-gray-300 px-4 py-2 rounded-l-lg shadow-sm focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg"
        >
          Search
        </button>
      </div>

      <div className="w-full mt-6">
        {results.length > 0 ? (
          <ResumeList resumes={results} />
        ) : (
          <p className="text-gray-500">No resumes found.</p>
        )}
      </div>
    </div>
  );
}
