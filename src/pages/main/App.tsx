import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AppHeader from "../../common/AppHeader";
import { Outlet, useLocation } from "react-router";
import MainCarousel from "./MainCarousel";

function App() {
  const location = useLocation();

  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={10}>
        <AppHeader />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80} className="flex flex-row justify-center">
        {location.pathname === "/" ? <MainCarousel /> : <Outlet />}
      </ResizablePanel>
      <ResizablePanel defaultSize={10}></ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default App;
