import { Outlet } from "react-router-dom";
import SiteFooter from "./SiteFooter";
import NavBar from "./NavBar";

const Layout = () => (
  <div className="min-h-screen flex flex-col transition-colors duration-500 selection:bg-purple-600 selection:text-white overflow-x-hidden">
    <NavBar />
    <div className="flex-1">
      <Outlet />
    </div>
    <SiteFooter />
  </div>
);

export default Layout;
