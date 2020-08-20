import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Loading from "./components/Loading";
import Header from "./components/Header";

const App: React.FC = () => (
  <Router>
    <React.Suspense fallback={<Loading />}>
      <Header />
      <div className="main">
        <Switch>
          {routes.map(({ exact, path, component }) => (
            <Route
              exact={exact}
              path={`/${path}`}
              component={component}
              key={path}
            />
          ))}
        </Switch>
      </div>
    </React.Suspense>
  </Router>
);

export default App;
