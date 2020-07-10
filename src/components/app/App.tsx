import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import GlobalStyles from "../../styles/globalStyle";
import Home from "../../pages/home";
import Landing from "../../pages/landing";

import Login from "../../pages/login";
import NavBar from "../navbar";
import Register from "../../pages/register";
import PrivateRoute from "../elements/privateRoute";
import { AuthProvider } from "../../contexts/AuthContext";
import Logout from "../../pages/logout";
import Alert from "../alert";
import { AlertContextProvider } from "../../contexts/AlertContext";

const App = () => {
  return (
    <AuthProvider>
      <AlertContextProvider>
        <Router>
          <GlobalStyles />
          <NavBar />
          <Alert />
          <Switch>
            <PrivateRoute path={ROUTES.HOME}>
              <Home />
            </PrivateRoute>
            <Route exact path={ROUTES.LOGIN}>
              <Login />
            </Route>
            <Route exact path={ROUTES.LOGOUT}>
              <Logout />
            </Route>
            <Route exact path={ROUTES.REGISTER}>
              <Register />
            </Route>
            <Route path={ROUTES.LANDING}>
              <Landing />
            </Route>
          </Switch>
        </Router>
      </AlertContextProvider>
    </AuthProvider>
  );
};

export default App;
