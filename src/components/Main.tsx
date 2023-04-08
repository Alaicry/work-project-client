import React from "react";
import Container from "../layout/Container";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import Auth from "../pages/Auth";
import { useAppDispatch } from "../store";
import { fetchAuthMe, selectIsAuth } from "../store/slices/authSlice";
import { useSelector } from "react-redux";

const Main: React.FC = () => {
	const dispatch = useAppDispatch();
	const isAuth = useSelector(selectIsAuth);

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
