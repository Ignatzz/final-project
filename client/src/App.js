import React from "react";
import Login from "./pages/Login";
import Main from "./pages/Main"
import SignUp from "./pages/SignUp"
import RockyPage from "./pages/RockyPage";
import LibertyPage from "./pages/LibertyPage";
import OverworldPage from "./pages/OverworldPage";
import FairmountPage from "./pages/FairmountPage";
import * as utils from "./pages/SamTest";
import DataResetGet from "./pages/DataResetGet";

// import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function loadData() {
  utils.load();

  setTimeout(
    function() {
      console.log(utils.state);
    }
    .bind(this),
    10000
  );
}
loadData();

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          {/* These just link to components for backgrounds for now. Will probaly make sense to call them as components later  */}
          <Route exact path="/overworld" component={OverworldPage} />
          <Route exact path="/rocky" component={RockyPage} />
          <Route exact path="/liberty" component={LibertyPage} />
          <Route exact path="/fairmount" component={FairmountPage} />
          <Route exact path="/data" component={DataResetGet} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
