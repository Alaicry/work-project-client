import React from "react";
import Home from "./pages/HomePage";
import Header from "./components/Header";
import Container from "./layout/Container";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./store/slices/authSlice";
import { Route, Routes } from "react-router-dom";
import GuidePage from "./pages/GuidePage";

const App = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<React.Fragment>
			<Header />
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/guide" element={<GuidePage />} />
				</Routes>
			</Container>
		</React.Fragment>
	);
};

export default App;
