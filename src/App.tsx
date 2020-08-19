import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import routes from "./routes";
import Loading from "./components/Loading";
import Header from "./components/Header";
import { CSSTransition } from "react-transition-group";
import { play, exit } from "./timelines";

const App: React.FC = () => (
  <Router>
    <React.Suspense fallback={<Loading />}>
      <Header />
      <Route
        render={({ location }) => {
          const { pathname, key } = location;
          return (
            <Switch location={location}>
              {routes.map(({ exact, path, Component }) => (
                <Route key={path} exact={exact} path={path}>
                  {({ match }) => (
                    <CSSTransition
                      in={match != null}
                      timeout={300}
                      classNames="page"
                      unmountOnExit
                    >
                      <div className="page">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}
            </Switch>
          );
        }}
      />
      {/* <Switch>
        {routes.map(({exact, path, component}) =>
          <Route exact={exact} path={`/${path}`} component={component} key={path} />,
        )}
      </Switch> */}
    </React.Suspense>
  </Router>
);

export default App;
