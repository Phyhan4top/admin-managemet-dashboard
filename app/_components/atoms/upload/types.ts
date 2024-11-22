export type UploadResType = {
  location: string;
  fileName: string;
};

export type UiUploadFileProps = {
  onUpload: ({ location, fileName }: UploadResType) => void;
  className?: string;
  title: string;
  invalid?: boolean;
  setUploadProgress: (progress: number) => void;
  waterMarked?: boolean;
  accept?: string;
  isDocument?: boolean;
};
