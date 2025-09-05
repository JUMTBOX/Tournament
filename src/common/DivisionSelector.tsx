import {
  Select,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
} from "@/components/ui/select";

const DivisionSelector = () => {
  return (
    <div className="w-1/3">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Division" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Division</SelectLabel>
            <SelectItem value="pre_school"> 유치부 </SelectItem>
            <SelectItem value="grade_1">1학년</SelectItem>
            <SelectItem value="grade_2">2학년</SelectItem>
            <SelectItem value="grade_3">3학년</SelectItem>
            <SelectItem value="grade_4">4학년</SelectItem>
            <SelectItem value="grade_5_and_6">5학년 & 6학년</SelectItem>
            <SelectItem value="middle_school">중등부</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DivisionSelector;
