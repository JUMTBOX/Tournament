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
import { timeTableColumns } from "@/pages/ranktable/columns";

export type TeamDto = {
  /** @description 팀 아이디 */
  teamId: number;
  /** @description 대회 아이디 */
  tournament_id: number;
  /** @description 그룹 아이디 */
  groupId: number;
  /** @description 부(division) 아이디 */
  division_id: number;
  /** @description 팀 명 */
  teamName?: string;
  /** @description 팀 설명 */
  teamDescription?: string;
  /** @description 팀 로고 url */
  logoUrl?: string;
};

export default function TimeTable() {
  return (
    <div className="w-full h-full flex flex-row justify-center">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            {timeTableColumns.map(({ header }, i) => (
              <TableHead key={i}>{header as string}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {}
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
