import React, {Component} from "react";
import app from "./firebase/base"
import PrivateRoute from "./PrivateRoutes"
import Login from "./pages/Login";
import Main from "./pages/Main"
import SignUp from "./pages/SignUp"
import GameoverPage from "./pages/GameoverPage"
import IntroPage from "./pages/IntroPage"
import RockyPage from "./pages/RockyPage";
import LibertyPage from "./pages/LibertyPage";
import OverworldPage from "./pages/OverworldPage";
import FairmountPage from "./pages/FairmountPage";
import * as utils from "./pages/SamTest";
import DataResetGet from "./pages/DataResetGet";
import Combat from "./pages/Combat"

// import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const {authenticated, loading} = this.state

    if (loading) {
      return <p>Loading...</p>
    }
  

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
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path = "/main" component={Main} authenticated={authenticated} />
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/gameover" component={GameoverPage} />
          <Route exact path="/combat" component={Combat} />
          <Route exact path="/overworld" component={OverworldPage} />
          <Route exact path="/rocky" component={RockyPage} />
          <Route exact path="/liberty" component={LibertyPage} />
          <Route exact path="/fairmount" component={FairmountPage} />
          <Route exact path="/data" component={DataResetGet} />
          <Route exact path="/intro" component={IntroPage} />
        </Switch>
      </div>
    </Router>
  );
};
}
export default App;
