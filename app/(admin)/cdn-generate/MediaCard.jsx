import { useState } from "react";

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const MediaCard = ({ item, category, onDelete }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(item.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-gray-100  overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
      <div className="relative h-36 bg-gray-100">
        {category === "images" ? (
          <img src={item.url} alt="" className="w-full h-full object-cover" />
        ) : (
          <video
            src={item.url}
            className="w-full h-full object-cover"
            controls
          />
        )}
      </div>

      <div className="p-3 space-y-2">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5">
          <span className="flex-1 text-[11px] text-gray-400 truncate">
            {item.url}
          </span>
          <button
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy URL"}
            className={`shrink-0 transition-colors duration-200 ${copied ? "text-emerald-500" : "text-gray-600 hover:text-gray-600"}`}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </button>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => onDelete(item)}
            className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-150"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
