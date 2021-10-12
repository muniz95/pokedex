import React from "react";
const Home = React.lazy(() => import("./views/Home"));

const routes = [
  { exact: true, path: "", component: Home },
];

export default routes;