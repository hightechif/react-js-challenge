import React from "react";
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import Challenge01 from "../pages/Challenge01";
import Challenge02 from "../pages/Challenge02";
import Challenge03 from "../pages/Challenge03";
import Challenge04 from "../pages/Challenge04";
import Challenge05 from "../pages/Challenge05";
import Challenge06 from "../pages/Challenge06";
import Challenge07 from "../pages/Challenge07";
import NotFound from "../pages/NotFound";
// Slider
// Profile Page

const publicRoute = [
	{ path: '/', name: 'Home', element: <Home /> },
	{ path: '/challenges', name: 'Challenges', element: <Challenges /> },
	{ path: '/challenge01', name: 'Challenge01', element: <Challenge01 /> },
	{ path: '/challenge02', name: 'Challenge02', element: <Challenge02 /> },
	{ path: '/challenge03', name: 'Challenge03', element: <Challenge03 /> },
	{ path: '/challenge04', name: 'Challenge04', element: <Challenge04 /> },
	{ path: '/challenge05', name: 'Challenge05', element: <Challenge05 /> },
	{ path: '/challenge06', name: 'Challenge06', element: <Challenge06 /> },
	{ path: '/challenge07', name: 'Challenge07', element: <Challenge07 /> },
	{ path: '*', name: 'NotFound', element: <NotFound /> },
]

const privateRoute = []

const RouteConfig = {
	'public': publicRoute,
	'private': privateRoute
}
export default RouteConfig;
