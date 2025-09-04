import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export type Team = {
  id?: number;
  teamName: string;
  teamDescription?: string;
  logoUrl?: string;
};

export default function TeamCard({ team }: { team?: Team | null }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle> {team?.teamName ?? "DEFAULT TEAM NAME"} </CardTitle>
            <Avatar className="rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardDescription>{"DEFAULT DESCRIPTION"}</CardDescription>
          </CardHeader>
          <CardContent>
            {team?.teamDescription ?? "DEFAULT CONTENT"}
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <Avatar className="rounded-lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <DialogTitle>{team?.teamName ?? "DEFAULT TEAM NAME"}</DialogTitle>
        </DialogHeader>
        <div>description...</div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
