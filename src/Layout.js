import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "./components/Layout/Navigation";
const Layout = () => {
  return (
    <Fragment>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default React.memo(Layout);
