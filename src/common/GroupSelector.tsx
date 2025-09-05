import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
} from "@/components/ui/select";

export default function GroupSelector() {
  return (
    <div className="w-1/3">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Group" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Group</SelectLabel>
            <SelectItem value="A">A</SelectItem>
            <SelectItem value="B">B</SelectItem>
            <SelectItem value="C">C</SelectItem>
            <SelectItem value="D">D</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
