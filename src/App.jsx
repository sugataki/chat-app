import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login, SignUp, Room } from "./pages/index";
import LoggedInRoute from "./LoggedInRoute";

import { AuthProvider } from "./AuthService";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
