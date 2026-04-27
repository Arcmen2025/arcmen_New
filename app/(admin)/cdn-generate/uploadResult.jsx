const UploadResultSection = ({ setUploadResult, uploadResult }) => {
  if (!uploadResult) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[400px] text-center shadow-lg">
        <img
          src={uploadResult?.cdnurl}
          alt="Uploaded"
          className="w-full h-48 object-contain border border-gray-300 rounded-md mb-3"
        />
        <div className="bg-gray-100 p-2 rounded text-sm break-all mb-3">
          {uploadResult?.cdnurl}
        </div>
        <button
          onClick={() => navigator.clipboard.writeText(uploadResult?.cdnurl)}
          className="bg-black text-white px-4 py-2 rounded mr-2 cursor-pointer"
        >
          Copy URL
        </button>
        <button
          onClick={() => setUploadResult(null)}
          className="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UploadResultSection;
