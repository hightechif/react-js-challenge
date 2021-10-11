import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Notfound from "./pages/NotFound";
import ButtonNotif from "./components/Button/ButtonNotif";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/button" component={ButtonNotif} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
