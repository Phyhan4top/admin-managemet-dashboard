import { UiProgress } from '@component/atoms/progress';
import { FC } from 'react';
import { ActiveImageUploadProps } from './types';

const ActiveImageUpload: FC<ActiveImageUploadProps> = ({ uploadProgress }) => {
  return (
    <div className="h-[200px] w-full rounded-2xl border-[2px] border-dashed border-black-200 p-[17.3px]">
      <div className=" relative flex h-[164.5px] flex-col items-center justify-center rounded-2xl">
        <p className="mb-8 text-base font-medium text-black-950">Uploading</p>
        <div className="flex w-full items-center gap-2">
          <UiProgress
            value={uploadProgress}
            size="sm"
            className="h-2 [&>div]:bg-green-300"
          />
          <span className="text-sm font-medium text-white-600">
            {uploadProgress.toFixed(0)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActiveImageUpload;
