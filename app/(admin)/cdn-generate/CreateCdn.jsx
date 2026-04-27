import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const CreateCdn = ({ onClose, setUploadResult }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [category, setCategory] = useState("images");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
    }
  };

  const handleUpload = () => {
    if (!file || !category) {
      alert("Please select category and file");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const generatedData = {
        key: file.name,
        url: previewUrl,
        type: category,
      };

      setUploadResult(generatedData);
      setLoading(false);
      onClose();
    }, 1000);
  };

  return (
    <>
      <div className="flex items-center px-6 mt-20">
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 border-0 flex ">
          <BsArrowLeft size={20} />
        </button>
        <h2 className="text-xl font-semibold ">CDN Generate</h2>
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
            <option value="">Select Category</option>
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
            {loading ? "Generating..." : "Generate CDN Link"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateCdn;