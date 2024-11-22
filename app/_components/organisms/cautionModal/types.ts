export type CautionModalProps = {
  open: boolean;
  handler: () => void;
  infos: string[];
  onActionHandler?: () => void;
  loading?: boolean;
  overLayHandler?: boolean;
};
