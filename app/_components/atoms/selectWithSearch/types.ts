export type UiSelectWithsearchExtend = {
  error?: string | undefined;

  label?: string;
  className?: string;
  placeholder?: string;
  options: string[];
  value: string | undefined;
  onSuggestionSelected: (suggest: string | undefined) => void;
  // onSearchChange: (e: any) => void;
};

export type UiSelectWithsearchProps = UiSelectWithsearchExtend &
  JSX.IntrinsicElements['input'];
