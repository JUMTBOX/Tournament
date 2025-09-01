import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Team = {
  id: string;
  name?: string;
  seed?: string;
  logoUrl?: string;
};

export default function TeamCard({ team }: { team?: Team | null }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle> {team?.name ?? "DEFAULT TEAM NAME"} </CardTitle>
        <Avatar className="rounded-lg">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardDescription>{"DEFAULT DESCRIPTION"}</CardDescription>
      </CardHeader>
      <CardContent>{team?.seed ?? "DEFAULT CONTENT"}</CardContent>
    </Card>
  );
}
