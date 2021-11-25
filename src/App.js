import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import RouteConfig from './config/RouteConfig';

function App() {
  return (
    <BrowserRouter>
			<Navbar />
			<Routes>
				{RouteConfig.public.map((route, idx) => {
					return route.element ? (
						<Route
						key={idx}
						path={route.path}
						name={route.name}
						element={route.element}
						/>
						) : null
					})}
			</Routes>
		</BrowserRouter>
  );
}

export default App;
