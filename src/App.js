import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div>
        <Header />

        {
          // public Routes
        }
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register-admin" component={RegisterAdmin} />
        <Route
          exact
          path="/registered-visitors"
          component={MyRegisteredVisitors}
        />
        <Route exact path="/register-visitor" component={RegisterVisitor} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        {/* <Route path="/reset" component={ResetPassword} />
         */}
      </div>
    </Router>
  );
}

export default App;
