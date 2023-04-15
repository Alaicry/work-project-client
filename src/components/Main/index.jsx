import React from "react";
import Home from "../../pages/Home";
import Employees from "../../pages/Employees";
import { fetchAuthMe } from "../../store/slices/authSlice";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Container from "../Container";

const Main = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, [dispatch]);

	return (
		<main>
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/employees" element={<Employees />} />
				</Routes>
			</Container>
		</main>
	);
};

export default Main;
