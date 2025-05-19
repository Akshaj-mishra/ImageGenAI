import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";


function Result() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Enter prompt..."
          className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") "";
          }}
        />
        <button
          onClick=""
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          disabled={loading}
        >
          <Search className="mr-2 w-4 h-4" />
          Generate
        </button>
      </div>

      <div className="flex justify-center mt-7">
        {loading && <p className="text-black text-xl">Generating image...</p>}
        {!loading && imageUrl && (
          <img
            src={imageUrl}
            alt="Generated"
            className="w-[700px] h-auto rounded-lg shadow-md"
          />
        )}
        {!loading && !imageUrl && (
          <p className="text-black text-3xl font-semibold">...Let me Cook !!!!</p>
        )}
      </div>
    </div>
  );
}

export default Result;
