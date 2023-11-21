import React from "react";
const Home = React.lazy(() => import("./views/Home"));

const routes = [
  { path: "", element: <Home /> },
];

export default routes;