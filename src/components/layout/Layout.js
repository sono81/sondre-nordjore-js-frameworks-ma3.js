import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import News from "../news/News";
import Login from "../login/Login";

function Layout() {
  return (
    <Router>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/news" exact>
          News
        </NavLink>
        <NavLink to="/login" exact>
          Login
        </NavLink>
      </nav>

      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    </Router>
  );
}

export default Layout;
