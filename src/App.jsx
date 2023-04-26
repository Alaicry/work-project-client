import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./store/slices/authSlice";
import { Route, Routes } from "react-router-dom";

const App = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<React.Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/guide" element={<Guide />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;
