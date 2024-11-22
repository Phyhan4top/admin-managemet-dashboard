'use client';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import NextImage from '../image';

const DragnDrop = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any) => {
      setUploadedFiles(acceptedFiles);
      // Call your backend API endpoint to upload files
    },
  });
  return (
    <div
      {...getRootProps({
        className:
          'border-dashed border cursor-pointer relative border-black-200 flex items-center justify-center rounded-2xl px-4 py-6 bg-white-50',
      })}
    >
      <input {...getInputProps()} />
      <div className="flex items-center justify-center gap-[18px]">
        <NextImage src="/icons/document-upload.svg" alt="upload" />
        <div className="text-black-600">
          <p>
            Drag & drop file or <b className="text-black-1000">Browse</b>
          </p>
          <p className="text-sm">Supported formates: JPEG, PNG & PDF</p>
        </div>
      </div>
    </div>
  );
};

export default DragnDrop;
