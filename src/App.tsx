import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Router from "./Router";
import AppHeader from "./AppHeader";

function App() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>
        <AppHeader />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>
        <Router />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default App;
