import type { ColumnDef } from "@tanstack/react-table";

export const rankTableColumns: ColumnDef<any>[] = [
  {
    accessorKey: "rank",
    header: "순위",
  },
  {
    accessorKey: "team_name",
    header: "팀 명",
  },
  {
    accessorKey: "win",
    header: "승",
  },
  {
    accessorKey: "draw",
    header: "무",
  },
  {
    accessorKey: "lose",
    header: "패",
  },
];

export const timeTableColumns: ColumnDef<any>[] = [
  { accessorKey: "time", header: "Time" },
  { accessorKey: "field_a", header: "A " },
  { accessorKey: "field_b", header: "B " },
  { accessorKey: "field_c", header: "C " },
  { accessorKey: "field_d", header: "D " },
];
