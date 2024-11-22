export type TableSelectionHeaderProps = {
  className?: string;
  title: string;
  onPerformAction: (selected: string) => void;
  loadingAction: boolean;
  onClearSelections: () => void;
};
