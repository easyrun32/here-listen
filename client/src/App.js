import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import { Home } from "./component/Home/Home.component";
import { ProtectedRoute } from "./component/protected-route/protected-route.component";
import { Dashboard } from "./component/Dashboard/dashboard.component";
export function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
