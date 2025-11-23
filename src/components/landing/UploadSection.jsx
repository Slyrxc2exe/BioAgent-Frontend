import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, File, Loader2 } from "lucide-react";

export default function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  // File select
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Drag & Drop events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  // Upload to backend (Turan API)
  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);

    // Backend endpoint bağlanınca buraya API kodu gelecek
    // const form = new FormData();
    // form.append("file", selectedFile);
    // const response = await axios.post("http://localhost:8000/analyze", form);

    setTimeout(() => {
      setLoading(false);
      alert("Backend geldiğinde buradan analiz başlayacak!");
    }, 1200);
  };

  return (
    <section className="w-full py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Upload Your nanoDSF Data
        </h2>
        <p className="text-slate-400 mb-10">
          Upload a .csv file containing Temperature and Fluorescence readings.
          The system will analyze Tm, onset, quality, and more.
        </p>

        {/* Upload Box */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`p-12 border-2 border-dashed rounded-2xl transition-all ${
            dragActive
              ? "border-purple-500 bg-purple-500/10"
              : "border-white/20 bg-white/5"
          }`}
        >
          {!selectedFile ? (
            <div className="flex flex-col items-center gap-4">
              <Upload className="w-12 h-12 text-purple-400" />
              <p className="text-slate-400">
                Drag & drop your CSV here or click below
              </p>

              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Button className="mt-3 bg-purple-600 hover:bg-purple-700">
                  Choose File
                </Button>
              </label>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <File className="w-12 h-12 text-green-400" />
              <p className="text-white font-medium">{selectedFile.name}</p>
              <p className="text-slate-400 text-sm">Ready to upload</p>
            </div>
          )}
        </div>

        {/* Upload Button */}
        <Button
          className="mt-8 bg-gradient-to-r from-pink-500 to-orange-500 text-lg px-10"
          disabled={loading || !selectedFile}
          onClick={handleUpload}
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            "Analyze File"
          )}
        </Button>
      </div>
    </section>
  );
}
