import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  type RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router";
import { TournamentRoutes } from "@/routes/TournamentRoutes";
import App from "./pages/main/App.tsx";
import Resgistration from "@/pages/registration/Resgistration.tsx";
import "./index.css";

const queryClient = new QueryClient();

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/registration", element: <Resgistration /> },
      ...TournamentRoutes,
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  </StrictMode>
);
