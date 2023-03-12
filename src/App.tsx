import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Employees from "./pages/Employees";
import Home from "./pages/Home";
import { useAppDispatch } from "./store";
import { fetchAuthMe, selectIsAuth } from "./store/slices/authSlice";

const App = () => {
	const dispatch = useAppDispatch();
	const isAuth = useSelector(selectIsAuth);

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);
	console.log(isAuth);
	return (
		<React.Fragment>
			<Header />
			<main className="main">
				<div className="container container--rounded main__container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/employees" element={<Employees />} />
						<Route path="/auth/signin" element={<Auth />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};

export default App;
