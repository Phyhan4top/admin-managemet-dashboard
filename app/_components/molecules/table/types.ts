import { ColumnDef } from '@tanstack/react-table';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type FixedColumnType = { id: string; position: 'left' | 'right' };
export type TableProps = {
  columns: ColumnDef<any, any>[];
  fixedColumns?: FixedColumnType[];
  data: any[];
  rowSelection: {};
  setRowSelection: Dispatch<SetStateAction<{}>>;
  footer?: ReactNode;
};
