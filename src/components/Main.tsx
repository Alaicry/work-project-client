import React from "react";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import Auth from "../pages/Auth";
import { fetchAuthMe } from "../store/slices/authSlice";
import { useAppDispatch } from "../store";
import { Routes, Route } from "react-router-dom";
import Container from "./Container";

const Main: React.FC = () => {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, [dispatch]);

	return (
		<main>
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/employees" element={<Employees />} />
					<Route path="/auth/signin" element={<Auth />} />
				</Routes>
			</Container>
		</main>
	);
};

export default Main;
