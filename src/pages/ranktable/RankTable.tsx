import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import DivisionSelector from "../../common/DivisionSelector";
import GroupSelector from "../../common/GroupSelector";
import { rankTableColumns } from "@/pages/ranktable/columns";

export default function RankTable() {
  const table = useReactTable({
    data: [""],
    columns: rankTableColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row w-full">
        <DivisionSelector />
        <GroupSelector />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
      </Table>
    </div>
  );
}
