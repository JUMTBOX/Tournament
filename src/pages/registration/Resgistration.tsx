import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RegistrationRequestUtil } from "@/pages/registration/requestUtil";
import DivisionSelector from "@/common/DivisionSelector";
import GroupSelector from "@/common/GroupSelector";

export default function Resgistration() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { createMulti, create } = RegistrationRequestUtil;

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (textareaRef.current instanceof HTMLTextAreaElement) {
      const teamStr = textareaRef.current?.value;

      if (teamStr.includes(",")) {
        createMulti(
          teamStr
            .split(",")
            .filter((tn) => tn.match(/\S/))
            .map((tn) => ({ teamName: tn.trim() }))
        );
      } else {
        create({ teamName: teamStr.trim() });
      }
      textareaRef.current.value = "";
    }
  };

  return (
    <Card className="flex flex-col justify-center items-center p-5 w-full">
      <div className="flex flex-row w-full mb-10 gap-10 ml-10">
        <DivisionSelector />
        <GroupSelector />
      </div>
      <CardContent className="w-4/5">
        <Textarea
          ref={textareaRef}
          placeholder="팀 명을 입력해주세요"
          className="h-40 mb-5"
        />
        <Button
          onClick={submitHandler}
          variant={"outline"}
          className="bg-blue-400 text-white"
        >
          {"등록하기"}
        </Button>
      </CardContent>
    </Card>
  );
}
