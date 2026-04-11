import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import SiteFooter from "./SiteFooter";
const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <NavBar />
      <div className="flex-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
};

export default Layout;
