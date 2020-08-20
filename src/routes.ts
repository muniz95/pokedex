import React from "react";
const Home = React.lazy(() => import("./views/Home"));
const Details = React.lazy(() => import("./views/Details"));

const routes = [
  { exact: true, path: "", component: Home },
  { exact: true, path: "details/:id", component: Details },
];

export default routes;