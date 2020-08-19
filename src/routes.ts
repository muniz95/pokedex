import React from "react";
const Home = React.lazy(() => import("./views/Home"));
const Details = React.lazy(() => import("./views/Details"));

const routes = [
  { exact: true, path: "", Component: Home },
  { exact: true, path: "details", Component: Details },
];

export default routes;