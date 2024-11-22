'use client';

import { apiFileUploadService } from '@apiservices/upload';
import { getTokenAction } from '@server/serverActions/auth.server';
import { AxiosProgressEvent } from 'axios';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { twMerge } from 'tailwind-merge';
import UiButton from '../button';
import NextImage from '../image';
import { UiUploadFileProps } from './types';

const UiUploadFile: FC<UiUploadFileProps> = ({
  onUpload,
  className,
  title,
  invalid,
  setUploadProgress,
  waterMarked,
  accept,
  isDocument,
}) => {
  const [uploading, setUploading] = useState(false);
  const onUploadProgress = (progressEvent: AxiosProgressEvent) => {
    if (!progressEvent?.total) return;
    const progress = Math.floor(
      (progressEvent.loaded / progressEvent?.total) * 100,
    );
    setUploadProgress(progress);
  };

  const onChange = async (file: FileList | null) => {
    if (!file) return;
    const formData = new FormData();

    formData.append('file[]', file[0], file[0].name);

    try {
      setUploading(true);
      //call server action to get token

      const token = await getTokenAction();

      const res = await apiFileUploadService({
        url: isDocument
          ? '/account/upload-document'
          : waterMarked
            ? '/ads/water-marked-images'
            : '/account/upload-files',
        method: 'POST',
        data: formData,
        token: token,
        onUploadProgress,
      });

      onUpload(res?.data![0]);
    } catch (err: any) {
      toast.error(err?.message || 'Failed to upload file, please retry!!!');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <UiButton
      as="button"
      variant="outlined"
      disabled={uploading}
      className={twMerge(
        classNames(
          'relative w-full gap-2 overflow-hidden rounded-xl p-4 text-base',
          className,
          {
            'border border-solid border-red-600  bg-red-50  text-black-600':
              invalid,
          },
          {
            'p-0': uploading,
          },
        ),
      )}
    >
      <input
        type="file"
        accept={accept || 'image/*'}
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full cursor-pointer opacity-0"
        onChange={(e) => onChange(e.target.files)}
        disabled={uploading}
      />

      <NextImage src="/icons/upload.svg" className="h-6 min-w-6" />
      <span className="font-medium text-black-950">{title}</span>
    </UiButton>
  );
};

export default UiUploadFile;
