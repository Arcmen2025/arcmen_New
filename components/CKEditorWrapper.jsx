'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import CKEditor with no SSR
const CKEditor = dynamic(
  () => import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor),
  { ssr: false }
);

const ClassicEditor = dynamic(
  () => import('@ckeditor/ckeditor5-build-classic'),
  { ssr: false }
);

const CKEditorWrapper = ({ data, onChange, config }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ 
        border: '1px solid #dee2e6', 
        borderRadius: '0.375rem', 
        padding: '10px',
        minHeight: '200px',
        backgroundColor: '#f8f9fa'
      }}>
        <div className="text-center text-muted">
          Loading editor...
        </div>
      </div>
    );
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={onChange}
      config={config || {
        toolbar: [
          'heading', '|', 'bold', 'italic', 'link', 'bulletedList',
          'numberedList', '|', 'blockQuote', 'insertTable', 'undo', 'redo'
        ],
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: 'https://'
        }
      }}
    />
  );
};

export default CKEditorWrapper;