import React from "react";
const Home = React.lazy(() => import("./views/home"));

const routes = [
  { path: "", element: <Home /> },
];

export default routes;