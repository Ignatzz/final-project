import React, {Component} from "react";
import app from "./firebase/base"
import PrivateRoute from "./PrivateRoutes"
import Login from "./pages/Login";
import Main from "./pages/Main"
import SignUp from "./pages/SignUp"
import Gameover from "./pages/GameoverPage"
import RockyPage from "./pages/RockyPage";
import LibertyPage from "./pages/LibertyPage";
import OverworldPage from "./pages/OverworldPage";
import FairmountPage from "./pages/FairmountPage";
import SamTest from "./pages/SamTest";
import DataResetGet from "./pages/DataResetGet";


import Nav from "./components/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GameoverPage from "./pages/GameoverPage";

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
  

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute exact path = "/main" component={Main} authenticated={authenticated} />
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/gameover" component={GameoverPage} />
          {/* These just link to components for backgrounds for now. Will probaly make sense to call them as components later  */}
          <Route exact path="/overworld" component={OverworldPage} />
          <Route exact path="/rocky" component={RockyPage} />
          <Route exact path="/liberty" component={LibertyPage} />
          <Route exact path="/fairmount" component={FairmountPage} />
          <Route exact path="/samtest" component={SamTest} />
          <Route exact path="/data" component={DataResetGet} />
        </Switch>
      </div>
    </Router>
  );
};
}
export default App;
