import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router";

function App() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={10}>
        <AppHeader />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={80} className="flex flex-row justify-center">
        <Outlet />
      </ResizablePanel>
      <ResizablePanel defaultSize={10}></ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default App;
