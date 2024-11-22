'use client';
import { CSSProperties, HTMLProps, useRef, useState } from 'react';

import './styles.css';

import { Icon } from '@iconify/react';
import {
  Column,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { FixedColumnType, TableProps } from './types';

//These are the important styles to make sticky column pinning work!
//Apply styles like this using your CSS strategy of choice with this kind of logic to head cells, data cells, footer cells, etc.
//View the index.css file for more needed styles such as border-collapse: separate
const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left');
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right');

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-1px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '1px 0 4px -4px gray inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    opacity: 1,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
    textAlign: 'left',
  };
};

const defaultColumns = [
  {
    id: 'select',
    header: ({ table }: any) => (
      <div className="flex w-full justify-center pl-2">
        <IndeterminateCheckbox
          {...{
            checked: table?.getIsAllRowsSelected(),
            indeterminate: table?.getIsSomeRowsSelected(),
            onChange: table?.getToggleAllRowsSelectedHandler(),
          }}
        />
      </div>
    ),
    cell: ({ row }: any) => (
      <div className="flex w-full justify-center">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),

    size: 40,
    enableSorting: false,
  },
];

const defaultFixedColumns: FixedColumnType[] = [
  // {
  //   id: 'select',
  //   position: 'left',
  // },
];
export function Table(props: TableProps) {
  const { columns, fixedColumns, data, rowSelection, setRowSelection, footer } =
    props;

  const [sorting, setSorting] = useState<SortingState>([]);

  const fixedCol = [
    ...defaultFixedColumns,
    ...(fixedColumns ? fixedColumns : []),
  ];
  const table = useReactTable({
    data,
    columns: [...defaultColumns, ...columns],
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    state: {
      rowSelection,
      sorting,
    },
    getRowId: (row) => row._id,
    enableRowSelection: true, //enable row selection for all rows
    onRowSelectionChange: setRowSelection,

    getSortedRowModel: getSortedRowModel(), //client-side sorting
    onSortingChange: setSorting,

    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: true,
  });

  return (
    <div>
      <div className="relative min-h-[40vh] w-full  overflow-x-auto bg-white-50">
        <table
          style={{
            width: table.getTotalSize(),
          }}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="[&_:first-child]:rounded-bl-lg [&_:first-child]:rounded-tl-lg [&_:last-child]:rounded-br-lg [&_:last-child]:rounded-tr-lg"
              >
                {headerGroup.headers.map((header, index) => {
                  const { column } = header;
                  const fixedColumn = fixedCol?.find(
                    (column) => column.id === header.id,
                  );
                  const position = fixedColumn?.position;

                  if (
                    fixedColumn &&
                    position &&
                    header.column.getIsPinned() !== position
                  ) {
                    header.column.pin(position);
                  }

                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ ...getCommonPinningStyles(column) }}
                      onClick={header.column.getToggleSortingHandler()}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === 'asc'
                            ? 'Sort ascending'
                            : header.column.getNextSortingOrder() === 'desc'
                              ? 'Sort descending'
                              : 'Clear sort'
                          : undefined
                      }
                      className="h-14 bg-white-20 pl-2 font-regular text-black-950"
                    >
                      <div className="flex cursor-pointer whitespace-nowrap text-[14px]">
                        <span className="capitalize">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </span>
                        {header.column.getCanSort() && (
                          <div className="ml-2 flex flex-col items-center justify-center">
                            <Icon
                              icon="carbon:caret-up"
                              color={
                                header.column.getNextSortingOrder() === false
                                  ? '#7c7c7c'
                                  : '#bdbdbd'
                              }
                              className={`-mb-1`}
                            />
                            <Icon
                              icon="carbon:caret-down"
                              color={
                                header.column.getNextSortingOrder() === 'asc'
                                  ? '#7c7c7c'
                                  : '#bdbdbd'
                              }
                              className={`-mt-1`}
                            />
                          </div>
                        )}
                      </div>

                      <div
                        {...{
                          onDoubleClick: () => header.column.resetSize(),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer ${
                            header.column.getIsResizing() ? 'isResizing' : ''
                          }`,
                        }}
                      />
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="group">
                {row.getVisibleCells().map((cell) => {
                  const { column } = cell;
                  return (
                    <td
                      key={cell.id}
                      style={{ ...getCommonPinningStyles(column) }}
                      className="h-[69px] bg-inherit pl-2 text-base text-white-600 group-hover:bg-white-20"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {footer}
    </div>
  );
}

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  checked,
  ...rest
}: {
  indeterminate?: boolean;
  checked: boolean;
} & HTMLProps<HTMLInputElement>) {
  const ref = useRef<HTMLInputElement>(null!);

  return (
    <span className="relative inline-block overflow-hidden">
      {checked ? <CheckIcon /> : <UnCheckIcon />}

      <input
        type="checkbox"
        ref={ref}
        className={
          className +
          'absolute bottom-0 left-0 right-0 top-0 h-5 w-5 cursor-pointer opacity-0'
        }
        {...rest}
      />
    </span>
  );
}

const UnCheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" fill="#FEFEFE" />
    <rect x="0.5" y="0.5" width="19" height="19" rx="1.5" stroke="#DCDCDC" />
  </svg>
);
const CheckIcon = () => (
  <svg
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="1" width="19" height="19" rx="1.5" fill="#FEFEFE" />
    <rect x="0.5" y="1" width="19" height="19" rx="1.5" stroke="#DCDCDC" />
    <path
      d="M15.5 7L8.5 14L5 10.5"
      stroke="#292929"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
