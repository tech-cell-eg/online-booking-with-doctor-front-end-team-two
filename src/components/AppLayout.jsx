import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="flex justify-center">
      <nav className="bg-teal-600 w-[250px] grid-"></nav>
      <Outlet/>
    </div>
  );
}
export default AppLayout;
