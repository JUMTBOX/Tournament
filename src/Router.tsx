import { Routes, Route } from "react-router";
import Content from "./Content";
import Resgistration from "./Resgistration";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/registration" element={<Resgistration />} />
    </Routes>
  );
}
