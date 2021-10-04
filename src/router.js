import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Box from './components/Box';
import Notfound from "./pages/NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/box" component={Box} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
