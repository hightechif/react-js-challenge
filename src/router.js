import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Challenges from "./pages/Challenges";
import Challenge01 from "./pages/Challenge01";
import Challenge02 from "./pages/Challenge02";
import Challenge03 from "./pages/Challenge03";
import Challenge04 from "./pages/Challenge04";
import Challenge05 from "./pages/Challenge05";
import Challenge06 from "./pages/Challenge06";
import Notfound from "./pages/NotFound";
// Slider
// Profile Page

function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/challenges" component={Challenges} />
				<Route exact path="/challenge01" component={Challenge01} />
				<Route exact path="/challenge02" component={Challenge02} />
				<Route exact path="/challenge03" component={Challenge03} />
				<Route exact path="/challenge04" component={Challenge04} />
				<Route exact path="/challenge05" component={Challenge05} />
				<Route exact path="/challenge06" component={Challenge06} />
				<Route component={Notfound} />
			</Switch>
		</BrowserRouter>
	)
};

export default Router;
