import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import Footer from "./components/Layout/Footer";
import RegisterAdmin from "./components/Admin/RegisterAdmin";
import RegisterVisitor from "./components/Admin/RegisterVisitor";
import Login from "./components/Admin/LoginAdmin";
import ForgotPassword from "./components/Admin/ForgotPassword";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import MyRegisteredVisitors from "./components/Admin/MyRegisteredVisitors";
import jwtDecode from "jwt-decode";
import { setJwtToken } from "./securityUtils/SetJwtToken";
import { LOGIN_ADMIN } from "./actions/types";
import { logoutAdmin } from "./actions/adminActions";
import store from "./store";
import SignoutVisitor from "./components/Admin/SignoutVisitor";
import MyVisitorsLogs from "./components/Admin/MyVisitorsLogs";
import SecuredRoute from "./securityUtils/SecuredRoute";
import TrackVisitor from "./components/Admin/TrackVisitor";
import TrackedVisitor from "./components/Admin/TrackedVisitor";
import TrackVisitors from "./components/Admin/TrackVisitors";
import TrackedVisitors from "./components/Admin/TrackedVisitors";
import Test from "./components/Admin/Test";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJwtToken(jwtToken);
  const decodedToken = jwtDecode(jwtToken);
  store.dispatch({
    type: LOGIN_ADMIN,
    payload: decodedToken,
  });

  const currentTime = Date.now() / 1000;
  if (decodedToken.exp < currentTime) {
    store.dispatch(logoutAdmin());
    window.location.href = "/";
  }
}
function App() {
  return (
    <Router>
      <Header />

      {
        // public Route
      }
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register-admin" component={RegisterAdmin} />
      <Route exact path="/test" component={Test} />
      {
        // private Routes
      }
      <Switch>
        <SecuredRoute exact path="/dashboard" component={Dashboard} />
        <SecuredRoute
          exact
          path="/registered-visitors"
          component={MyRegisteredVisitors}
        />
        <SecuredRoute exact path="/visitors-log" component={MyVisitorsLogs} />
        <SecuredRoute
          exact
          path="/signout-visitor"
          component={SignoutVisitor}
        />
        <SecuredRoute
          exact
          path="/register-visitor"
          component={RegisterVisitor}
        />
        <SecuredRoute exact path="/track-visitor" component={TrackVisitor} />

        <SecuredRoute
          exact
          path="/tracked-visitor"
          component={TrackedVisitor}
        />
        <SecuredRoute exact path="/track-visitors" component={TrackVisitors} />
        <SecuredRoute
          exact
          path="/tracked-visitors"
          component={TrackedVisitors}
        />
        <SecuredRoute
          exact
          path="/forgot-password"
          component={ForgotPassword}
        />
        {/* <Route path="/reset" component={ResetPassword} />
         */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
