import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Challenges from "./pages/Challenges";
import Challenge01 from "./pages/Challenge01";
import Challenge02 from "./pages/Challenge02";
import Challenge03 from "./pages/Challenge03";
import Challenge04 from "./pages/Challenge04";
import Challenge05 from "./pages/Challenge05";
import Challenge06 from "./pages/Challenge06";
import Challenge07 from "./pages/Challenge07";
import Notfound from "./pages/NotFound";
// Slider
// Profile Page

function Router() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/challenges" element={<Challenges />} />
				<Route path="/challenge01" element={<Challenge01 />} />
				<Route path="/challenge02" element={<Challenge02 />} />
				<Route path="/challenge03" element={<Challenge03 />} />
				<Route path="/challenge04" element={<Challenge04 />} />
				<Route path="/challenge05" element={<Challenge05 />} />
				<Route path="/challenge06" element={<Challenge06 />} />
				<Route path="/challenge07" element={<Challenge07 />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</BrowserRouter>
	)
};

export default Router;
