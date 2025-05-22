import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface ColumnDef<T> {
  accessorKey?: keyof T
  header: string
  cell?: (props: { row: { original: T } }) => React.ReactNode
  id?: string
}

export interface DataTableProps<T> {
  columns: ColumnDef<T>[]
  data: T[]
}

export function DataTable<T>({ columns, data }: DataTableProps<T>) {
  // Pagination state
  const [page, setPage] = React.useState(0)
  const pageSize = 10
  const pageCount = Math.ceil(data.length / pageSize)
  const pagedData = data.slice(page * pageSize, (page + 1) * pageSize)

  return (
    <div className="w-full">
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col, idx) => (
                <TableHead key={col.id ?? (typeof col.accessorKey === "string" || typeof col.accessorKey === "number" ? col.accessorKey : idx)}>
                  {col.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {pagedData.length ? (
              pagedData.map((row, rowIdx) => (
                <TableRow key={(row as any).id ?? rowIdx}>
                  {columns.map((col, colIdx) => (
                    <TableCell key={col.id ?? (typeof col.accessorKey === "string" || typeof col.accessorKey === "number" ? col.accessorKey : colIdx)}>
                      {col.cell
                        ? col.cell({ row: { original: row } })
                        : col.accessorKey
                        ? (row as any)[col.accessorKey]
                        : null}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No articles found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm">
          Total {data.length} Article Titles
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            disabled={page === 0}
            onClick={() => setPage(0)}
          >
            {"<<"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
          >
            {"<"}
          </Button>
          <span className="px-2">
            Page {page + 1} of {pageCount}
          </span>
          <Button
            size="sm"
            variant="outline"
            disabled={page >= pageCount - 1}
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
          >
            {">"}
          </Button>
          <Button
            size="sm"
            variant="outline"
            disabled={page >= pageCount - 1}
            onClick={() => setPage(pageCount - 1)}
          >
            {">>"}
          </Button>
        </div>
      </div>
    </div>
  )
}