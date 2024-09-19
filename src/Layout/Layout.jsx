import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="mt-5 mb-5">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
