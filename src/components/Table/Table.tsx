import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
// import cn from 'clsx';
('use client');

import { ColumnDef, flexRender } from '@tanstack/react-table';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  paginationParams?: {
    pageIndex: number;
    pageSize: number;
  };
}

const DataTable = <TData, TValue>({ columns, data, paginationParams }: DataTableProps<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    rowCount: 1000,
    state: paginationParams
      ? {
          pagination: paginationParams,
        }
      : undefined,
  });

  return (
    <div className="flex flex-col rounded-lg border bg-slate-50">
      <Table className="rounded-lg bg-slate-50">
        <TableHeader className="h-8">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, idx) => {
                return (
                  <TableHead
                    className={cn('h-8 bg-gray-100', {
                      'rounded-tl-lg': idx === 0,
                      'rounded-tr-lg': idx === headerGroup.headers.length - 1,
                    })}
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell className={cn('py-2', { 'whitespace-nowrap': cell.column.id === 'phone' })} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
