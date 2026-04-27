"use client";
import { useEffect, useState } from "react";
import { MediaCard } from "./MediaCard";
import CreateCdn from "./CreateCdn";
import UploadResultSection from "./uploadResult";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal/ConfirmDeleteModal";
import fetchHandler from "@/api/Handler";

const CdnGenerateSection = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [category, setCategory] = useState("images");
  const [search, setSearch] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchFiles = async () => {
    setLoading(true);

    const res = await fetchHandler({
      method: "GET",
      endpoint: `media/list?type=${category}&limit=10`,
    });

    if (!res?.isError) {
      const apiFiles = res?.data?.files || [];
      const formatted = apiFiles?.map((item) => ({
        key: item.key,
        url: item.url || item.location,
      }));

      setFiles(formatted);
    } else {
      console.error("API Error:", res.error);
      setFiles([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
  }, [category]);

  const filteredFiles = files
    .filter((item) =>
      item.key.toLowerCase().includes(search.toLowerCase())
    )
    .reverse();

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setFiles((prev) =>
      prev.filter((f) => f.key !== selectedItem.key)
    );
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  return (
    <>
      {createOpen ? (
        <CreateCdn
          onClose={() => setCreateOpen(false)}
          setUploadResult={setUploadResult}
        />
      ) : (
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">
            CDN Assets
          </h2>

          <div className="flex justify-between items-center mb-10">
            <input
              type="text"
              placeholder="Search files..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-3 py-1.5 rounded-md text-sm w-64"
            />

            <div className="flex gap-4 items-center">
              <div className="inline-flex bg-gray-100 rounded-xl p-1">
                {["images", "videos"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setCategory(tab)}
                    className={`px-5 py-1.5 rounded-lg text-sm ${category === tab
                      ? "bg-black text-white"
                      : "text-gray-400"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCreateOpen(true)}
                className="bg-black text-white px-6 py-1 rounded-md"
              >
                Create
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-10">
              Loading...
            </div>
          ) : filteredFiles.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              No files found
            </p>
          ) : (
            <div className="grid md:grid-cols-4 gap-4">
              {filteredFiles.map((item) => (
                <MediaCard
                  key={item.key}
                  item={item}
                  category={category}
                  onDelete={handleDeleteClick}
                />
              ))}
            </div>
          )}

          <ConfirmDeleteModal
            isOpen={showDeleteModal}
            title="Are you sure you want to delete this file?"
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        </div>
      )}

      <UploadResultSection
        uploadResult={uploadResult}
        setUploadResult={setUploadResult}
      />
    </>
  );
};

export default CdnGenerateSection;