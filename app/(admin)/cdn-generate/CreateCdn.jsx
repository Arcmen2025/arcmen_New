"use client";

import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import fetchHandler from "@/api/Handler";

const CreateCdn = ({ onClose, setUploadResult }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [category, setCategory] = useState("images");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file || !category) {
      alert("Please select category and file");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("type", category);

      const res = await fetchHandler({
        method: "POST",
        endpoint: "media/upload",
        data: formData,
        isFormData: true,
      });

      if (res?.isError) {
        alert("Upload failed");
        return;
      }

      const uploadedFile = res?.data?.file;
      setUploadResult({
        key: uploadedFile?.key,
        url: uploadedFile?.s3Url,
        type: category,
      });

      onClose();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center px-6 mt-20 gap-3">
        <button
          onClick={onClose}
          className="p-1 rounded hover:bg-gray-100 border-0 flex"
        >
          <BsArrowLeft size={20} />
        </button>

        <h2 className="text-xl font-semibold">CDN Generate</h2>
      </div>

      <div className="p-6 mt-6 mx-auto bg-white rounded-xl shadow">
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="images">Images</option>
            <option value="videos">Videos</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Upload File
          </label>

          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer overflow-hidden">
            {previewUrl ? (
              category === "images" ? (
                <img
                  src={previewUrl}
                  alt="preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <video
                  src={previewUrl}
                  className="w-full h-full object-cover rounded-lg"
                  controls
                />
              )
            ) : (
              <p className="text-gray-500 text-sm">
                Click or drag file to upload
              </p>
            )}

            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept={category === "images" ? "image/*" : "video/*"}
            />
          </label>
        </div>

        <div className="flex justify-end">
          <button
            disabled={loading}
            onClick={handleUpload}
            className={`px-5 py-2 rounded-lg text-white ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
              }`}
          >
            {loading ? "Uploading..." : "Generate CDN Link"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateCdn;