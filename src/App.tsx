import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import Loading from "./components/Loading";
import Header from "./components/Header";

const App: React.FC = () => {
  const routing = useRoutes([...routes])
  return (
    <React.Suspense fallback={<Loading />}>
      <Header />
      <div className="main">
        {routing}
      </div>
    </React.Suspense>
  )
};

export default App;
