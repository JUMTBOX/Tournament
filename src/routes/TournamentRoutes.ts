import Bracket from "@/pages/bracket/Bracket";
import type { RouteObject } from "react-router";

export const TournamentRoutes: RouteObject[] = [
  { path: "/tournament/:name/:cardinal", Component: Bracket },
];
