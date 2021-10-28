import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Notfound from "./pages/NotFound";
import Challenge01 from "./pages/Challenge01";
import Challenge02 from "./pages/Challenge02";
import Challenge03 from "./pages/Challenge03";
import Challenge04 from "./pages/Challenge04";

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/challenge01" component={Challenge01} />
				<Route exact path="/challenge02" component={Challenge02} />
				<Route exact path="/challenge03" component={Challenge03} />
				<Route exact path="/challenge04" component={Challenge04} />
				<Route component={Notfound} />
			</Switch>
		</BrowserRouter>
	)
};

export default Router;
