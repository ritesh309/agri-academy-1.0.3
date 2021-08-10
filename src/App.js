import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Service from "./Service"
import Signup from "./studentcomponents/Signup"
import Login from "../src/studentcomponents/Login"
import Flogin from "../src/facultycomponents/Flogin"
import Fsignup from "../src/facultycomponents/Fsignup"



const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/studentlogin">
        <Login />
      </Route>
      <Route path="/studentsignup">
        <Signup />
      </Route>
      <Route path="/facultysignup">
        <Fsignup />
      </Route>
      <Route path="/facultylogin">
        <Flogin />
      </Route>
    </Switch>
  );
};

export default App;