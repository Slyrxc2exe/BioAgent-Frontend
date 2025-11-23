import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UploadBox() {
  const [file, setFile] = useState(null);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div className="space-y-8">

      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="p-10 border-2 border-dashed border-purple-400/40 rounded-2xl bg-purple-900/10 hover:bg-purple-900/20 transition-all cursor-pointer text-center"
      >
        <Upload className="w-14 h-14 mx-auto mb-4 text-purple-300" />

        <p className="text-slate-300 mb-4">
          Drag & drop your CSV file or select manually
        </p>

        <label className="cursor-pointer inline-block">
          <input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileSelect}
          />
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
            Choose File
          </Button>
        </label>

        {file && (
          <p className="mt-6 text-purple-300 text-sm">
            Selected file: <strong>{file.name}</strong>
          </p>
        )}
      </div>

      {/* Analyze Button */}
      <Button
        disabled={!file}
        className="w-full py-6 text-lg bg-gradient-to-r from-pink-500 to-orange-500 
        hover:from-pink-600 hover:to-orange-600 text-white shadow-lg disabled:opacity-40"
      >
        Analyze File
      </Button>
    </div>
  );
}
