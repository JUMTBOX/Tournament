import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./components/ui/card";

export default function Resgistration() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    if (textareaRef.current instanceof HTMLTextAreaElement) {
      const teamStr = textareaRef.current?.value;

      if (teamStr.includes(",")) {
        teamStr
          .trim()
          .split(",")
          .forEach((teamName) => {
            console.log(teamName);
          });
      }
    }
  };

  return (
    <Card className="flex flex-row justify-center items-center p-5 w-full">
      <CardContent className="w-3/5">
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
