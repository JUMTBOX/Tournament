import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useNavigate } from "react-router";

export default function AppHeader() {
  const navigate = useNavigate();

  return (
    <Menubar className="font-black h-full shadow-2xl">
      <MenubarMenu>
        <MenubarTrigger
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tournament</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Seed Academy <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>국민대 총장배</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>대회 요강</MenubarItem>
              <MenubarItem
                onClick={() => {
                  navigate("/registration");
                }}
              >
                대회 신청
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                onClick={() => {
                  navigate("/tournament/kookmin/1");
                }}
              >
                1회
              </MenubarItem>
              <MenubarItem
                onClick={() => {
                  navigate("/tournament/kookmin/2");
                }}
              >
                2회
              </MenubarItem>
              <MenubarItem
                onClick={() => {
                  navigate("/tournament/kookmin/3");
                }}
              >
                3회
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>용인 IHFS</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
