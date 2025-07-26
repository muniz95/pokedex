import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Loading from "./components/loading";
import Header from "./components/header";

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
