import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarHeader from "./NavbarHeader";

function Layout() {
  return (
    <div>
      <NavbarHeader />
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default Layout;
