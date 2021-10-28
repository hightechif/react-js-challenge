import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './layout/Home';
import Notfound from "./layout/NotFound";
import Challenge01 from "./layout/Challenge01";
import Challenge02 from "./layout/Challenge02";
import Challenge03 from "./layout/Challenge03";

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/challenge01" component={Challenge01} />
				<Route exact path="/challenge02" component={Challenge02} />
				<Route exact path="/challenge03" component={Challenge03} />
				<Route component={Notfound} />
			</Switch>
		</BrowserRouter>
	)
};

export default Router;
