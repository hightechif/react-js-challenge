import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Menu = React.lazy(() => import("../pages/Menu"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Challenge01 = React.lazy(() => import("../pages/Challenge01"));
const Challenge02 = React.lazy(() => import("../pages/Challenge02"));
const Challenge03 = React.lazy(() => import("../pages/Challenge03"));
// const Challenge04 = React.lazy(() => import("../pages/Challenge04"));
const Challenge05 = React.lazy(() => import("../pages/Challenge05"));
const Challenge06 = React.lazy(() => import("../pages/Challenge06"));
// const Challenge07 = React.lazy(() => import("../pages/Challenge07"));
// Slider
// Profile Page

const publicRoute = [
	{ path: '/', name: 'Home', element: Home },
	{ path: '/menu', name: 'Menu', element: Menu },
	{ path: '/challenge01', name: 'Challenge01', element: Challenge01 },
	{ path: '/challenge02', name: 'Challenge02', element: Challenge02 },
	{ path: '/challenge03', name: 'Challenge03', element: Challenge03 },
	// { path: '/challenge04', name: 'Challenge04', element: Challenge04 },
	{ path: '/challenge05', name: 'Challenge05', element: Challenge05 },
	{ path: '/challenge06', name: 'Challenge06', element: Challenge06 },
	// { path: '/challenge07', name: 'Challenge07', element: Challenge07 },
	{ path: '*', name: 'NotFound', element: NotFound },
]

const privateRoute = []

const RouteConfig = {
	'public': publicRoute,
	'private': privateRoute
}
export default RouteConfig;
