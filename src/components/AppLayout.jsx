import { Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

function AppLayout() {
  return (
    <div className="flex">
      <Outlet />
    </div>
  );
}
export default AppLayout;
