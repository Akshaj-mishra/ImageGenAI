import React from 'react';
import { assets } from '../assets/assets';
import { Search } from 'lucide-react';

function Result() {
  return (
    <div className="p-4">
      <div className="mb-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          <Search className="mr-2 w-4 h-4" />
          Generate
        </button>
      </div>

      <div className="flex justify-center mt-7">
        <img
          src={assets.sampleImg1}
          alt="Sample"
          className="w-[700px] h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="flex justify-center mt-7 text-black text-3xl font-semibold">
            ...Let me Cook !!!!
      </div>
    </div>
  );
}

export default Result;
