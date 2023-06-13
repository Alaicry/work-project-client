import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./store/slices/authSlice";
import { Route, Routes } from "react-router-dom";
import DevicesGuide from "./pages/DevicesGuide";
import UsersGuide from "./pages/UsersGuide";
import { guideLinks, homeLinks } from "./utils/constants/routes";
import Home from "./pages/Home";

const App = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(fetchAuthMe());
	}, []);

	return (
		<React.Fragment>
			<Header />
			<Container classNameToProps="container--white container--rounded">
				<Routes>
					<Route path="/" element={<Home list={homeLinks} />} />
					<Route path="/guide" element={<Home list={guideLinks} />} />
					<Route path="/guide/terminals" element={<DevicesGuide />} />
					<Route path="/guide/sensors" element={<DevicesGuide />} />
					<Route path="/guide/users" element={<UsersGuide />} />
				</Routes>
			</Container>
		</React.Fragment>
	);
};

export default App;
