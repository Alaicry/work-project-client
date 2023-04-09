import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Employees from "../pages/Employees";
import Auth from "../pages/Auth";
import { useAppDispatch } from "../store";
import { fetchAuthMe, selectIsAuth } from "../store/slices/authSlice";
import { useSelector } from "react-redux";
import { Container } from "@chakra-ui/react";

const Main: React.FC = () => {
	const dispatch = useAppDispatch();
	const isAuth = useSelector(selectIsAuth);

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, [dispatch]);

	return (
		<main>
			<Container maxW="1280px" marginX="auto" marginY="0" paddingX="15px">
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
