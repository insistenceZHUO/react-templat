import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { adminRouter } from "./routes/index";
import Frame from "./components/frame";
class App extends Component {
  render() {
    return (
      <Frame adminRouter= {adminRouter}>
        <Switch>
          {adminRouter.map(route => {
            return (
              <Route
                key={route.pathname}
                exact={route.exact}
                path={route.pathname}
                render={routerProps => {
                  return <route.component {...routerProps}></route.component>;
                }}
              ></Route>
            );
          })}
          <Redirect to={adminRouter[0].pathname} from="/admin" exact></Redirect>
          <Redirect to="/404"></Redirect>
        </Switch>
      </Frame>
    );
  }
}

export default App;
