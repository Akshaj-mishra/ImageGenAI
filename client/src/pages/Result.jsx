import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

function Result() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = async (data) => {
    const response = await fetch(
      "https://router.huggingface.co/fal-ai/fal-ai/fast-sdxl",
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_IMAGEGEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Image generation failed: ${errText}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt");
      return;
    }

    setLoading(true);

    // Revoke old image URL to free memory if any
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
      setImageUrl(null);
    }

    try {
      const url = await query({
        sync_mode: true,
        prompt: prompt,
        options: { wait_for_model: true },
      });

      console.log("Generated image URL:", url);  // Debug
      setImageUrl(url);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Optional: clean up URL on component unmount
  React.useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
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
