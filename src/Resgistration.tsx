import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
    <>
      <Textarea ref={textareaRef} placeholder="팀 명을 입력해주세요" />
      <Button onClick={submitHandler} variant={"outline"}>
        {"등록하기"}
      </Button>
    </>
  );
}
