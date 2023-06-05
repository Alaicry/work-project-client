import React from "react";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Header from "./components/Header";
import Container from "./components/Container";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./store/slices/authSlice";
import { Route, Routes } from "react-router-dom";
import DevicesGuide from "./pages/DevicesGuide";
import UsersGuide from "./pages/UsersGuide";

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
					<Route path="/guide" element={<Guide />} />
					<Route path="/guide/terminals" element={<DevicesGuide />} />
					<Route path="/guide/sensors" element={<DevicesGuide />} />
					<Route path="/guide/users" element={<UsersGuide />} />
				</Routes>
			</Container>
		</React.Fragment>
	);
};

export default App;
