export type TableFooterProps = {
  data: any[];
  currentPage: number;
  totalCount: number;
  nextPage: number | null;
  pageParamKey?: string;
  limit?: number;
};
