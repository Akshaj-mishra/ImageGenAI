import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

function Result() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    setLoading(true);

    // Clean up previous image URL to free memory
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
      setImageUrl(null);
    }

    try {
      const response = await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${errorText}`);
      }

      const data = await response.json();
      setImageUrl(data.image);
    } catch (error) {
      alert(error.message || "Image generation failed");
    } finally {
      setLoading(false);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

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
            if (e.key === "Enter") handleGenerate();
          }}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
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
