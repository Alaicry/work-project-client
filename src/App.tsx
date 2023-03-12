import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Employees from "./pages/Employees";
import Home from "./pages/Home";

type Props = {};

const App = (props: Props) => {
	console.log(window.innerHeight);
	console.log(window.outerHeight);

	return (
		<React.Fragment>
			<Header />
			<main className="main">
				<div className="container container--rounded main__container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/employees" element={<Employees />} />
						<Route path="/auth" element={<Auth />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default App;
