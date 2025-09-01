export type Team = {
  id: string;
  name?: string;
  seed?: string;
  logoUrl?: string;
};

export default function TeamCard({ team }: { team?: Team | null }) {
  return (
    <div className="rounded-xl border bg-black px-4 py-2 shadow-sm">
      <span className="font-medium text-neutral-800">
        {team?.name ?? "NONE"}
      </span>
    </div>
  );
}
