import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        {/* Rendered the nested routes inside the Outlet */}
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Layout;
