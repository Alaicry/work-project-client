import React from "react";
import Home from "../../pages/Home";
import Employees from "../../pages/Employees";
import Auth from "../../pages/Auth";
import { fetchAuthMe } from "../../store/slices/authSlice";
import { useAppDispatch } from "../../store";
import { Routes, Route } from "react-router-dom";
import Container from "../../layout/Container";
import style from "./Main.module.css";
const Main: React.FC = () => {
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, [dispatch]);

	return (
		<main className={style.main}>
			<Container classNameFromProps={style.container}>
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
