import React from "react";
import Login from "./pages/Login";
import Main from "./pages/Main"
import SignUp from "./pages/SignUp"

import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
